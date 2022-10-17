import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colorTheme } from "theme";

interface HeaderTypoProps {
  type: "title" | "description";
}

export const HeaderTypo = styled(Typography)<HeaderTypoProps>(({ type }) => ({
  color: colorTheme.color.primary,
  fontWeight: type === "title" ? 800 : 500,
  fontSize: type === "title" ? 48 : 16,
}));
