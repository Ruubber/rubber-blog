import path from "path";
import { CreatePagesArgs } from "gatsby";

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const blogIndex = path.resolve("./src/templates/blogIndex.tsx");

  createPage({
    path: "/",
    component: blogIndex,
  });

  const result: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: any;
    data?: {
      allMarkdownRemark: { nodes: { fields: { slug?: string } }[] };
    };
  } = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            fields {
              slug
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
    const { slug } = node.fields;
    if (!slug) return;

    // Type-safe `createPage` call.
    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
      },
    });
  });
};
