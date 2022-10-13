import { Layout } from "components";
import { graphql } from "gatsby";

export default function BlogIndex(props: any) {
  const defaultProps = {
    title: "",
    description: "",
    path: "",
  };
  return <Layout {...defaultProps}>testBlogIndex</Layout>;
}
