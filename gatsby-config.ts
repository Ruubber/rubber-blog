import type { GatsbyConfig } from "gatsby";
import path from "path";

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules",
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `rubber-blog`,
    siteUrl: `https://rubber.gatsbyjs.io`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    "gatsby-plugin-tsconfig-paths",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
  ],
};

export default config;
