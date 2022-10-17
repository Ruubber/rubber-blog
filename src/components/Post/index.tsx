import { Typography } from "@mui/material";
import { TagChip } from "components";
import { css } from "@emotion/react";

export function Post({
  title,
  tag,
  spoiler,
}: {
  title: string;
  tag: string[];
  spoiler: string;
}) {
  return (
    <div
      css={css({
        padding: "20px 0",
      })}
    >
      <Typography variant="h6">{title}</Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        {tag.map((item, i) => (
          <TagChip
            key={i}
            style={{ marginRight: tag.length === i + 1 ? undefined : 5 }}
            tag={item}
          />
        ))}
      </div>
      <Typography>{spoiler}</Typography>
    </div>
  );
}
