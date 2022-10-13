import { Helmet } from "react-helmet";
import { Typography } from "@mui/material";

export default function Header({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <>
      <Helmet>
        <title>Rubber Blog</title>
      </Helmet>
      <header style={{ padding: "30px 0" }}>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </header>
    </>
  );
}
