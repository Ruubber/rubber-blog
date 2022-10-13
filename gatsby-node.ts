import path from "path";
import { Actions, Reporter } from "gatsby";

export const onCreateBabelConfig = ({ actions }: { actions: Actions }) => {
  const { setBabelPlugin } = actions;

  setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  });
};

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: {
  actions: Actions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  graphql: any;
  reporter: Reporter;
}) => {
  const { createPage } = actions;

  const blogIndex = path.resolve("./src/templates/blogIndex.tsx");

  createPage({
    path: "/",
    component: blogIndex,
    context: {},
  });

  const result: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: any;
    data?: {
      allMarkdownRemark: { nodes: { frontmatter: { path?: string } }[] };
    };
  } = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            frontmatter {
              path
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild("Create Page GraphQL Error");
    return;
  }

  const blogPost = path.resolve("./src/templates/blogPost.tsx");

  result.data?.allMarkdownRemark.nodes.forEach((node) => {
    const { path } = node.frontmatter;
    if (!path) return;

    // Type-safe `createPage` call.
    createPage({
      path,
      component: blogPost,
      context: {
        path,
      },
    });
  });
};
