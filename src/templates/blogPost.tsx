import { Layout } from "components";
import { graphql } from "gatsby";

export default function BlogPost(props: any) {
  const defaultProps = {
    title: "",
    description: "",
    path: "",
  };
  return <Layout {...defaultProps}>testBlogPost</Layout>;
}
