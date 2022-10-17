import { Helmet } from "react-helmet";
import { HeaderTypo } from "./styles";

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
        <title>{title}</title>
        <meta name="description" content="Rubber Blog With Gatsby.JS" />
      </Helmet>
      <header style={{ padding: "30px 0" }}>
        <HeaderTypo type="title">{title}</HeaderTypo>
        <HeaderTypo type="description">{description}</HeaderTypo>
      </header>
    </>
  );
}
