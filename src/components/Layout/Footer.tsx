export default function Footer({
  info,
}: {
  info: { site: string; url: string }[];
}) {
  return (
    <footer>
      <div style={{ display: "flex", padding: "0 20px"}}>
        {info.map(({ site, url }) => (
          <a href={url}>{site}</a>
        ))}
      </div>
    </footer>
  );
}
