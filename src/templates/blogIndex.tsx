import { Layout, Post } from "components";
import { graphql, PageProps } from "gatsby";
import { compact } from "lodash";

export default function BlogIndex({
  data: { site, allMarkdownRemark },
}: PageProps<Queries.IndexPageQuery>) {
  const layoutProps = {
    title: site?.siteMetadata?.title || "",
    description: site?.siteMetadata?.description || "",
    path: "/",
  };

  const posts = allMarkdownRemark.edges;

  return (
    <Layout {...layoutProps}>
      {posts.map(({ node: { fields, frontmatter } }, i) => (
        <Post
          key={i}
          title={frontmatter?.title || ""}
          tag={compact(frontmatter?.tag)}
          spoiler={frontmatter?.spoiler || ""}
        />
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tag
          }
        }
      }
    }
  }
`;
