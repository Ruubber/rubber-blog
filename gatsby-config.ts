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
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Rubber Blog`,
    description: `Rubber Blog With Gatsby.JS`,
    siteUrl: `https://rubber.gatsbyjs.io`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-slug",
    `gatsby-plugin-emotion`,
    "gatsby-plugin-mdx",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-transformer-remark",
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
