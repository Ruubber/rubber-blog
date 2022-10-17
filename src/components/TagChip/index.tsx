import { Chip } from "@mui/material";
import styled from "@emotion/styled";

interface PropType {
  tag: string;
  style: React.CSSProperties;
}

export function TagChip({ tag, style }: PropType) {
  const tagColor = (function () {
    switch (tag) {
      case "test":
        return "blue";
      case "success":
        return "red";
      default:
        return "#fff";
    }
  })();

  const StyledChip = styled(Chip)({
    borderColor: tagColor,
    color: tagColor,
  });

  return (
    <StyledChip
      size="small"
      style={{ ...style }}
      variant="outlined"
      color="primary"
      label={tag.toUpperCase()}
    />
  );
}
