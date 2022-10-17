import { Typography, styled } from "@mui/material";

interface HeaderTypoProps {
  type: "title" | "description";
}

export const HeaderTypo = styled(Typography)<HeaderTypoProps>(
  ({ theme, type }) => ({
    color: theme.color?.color.primary,
    fontWeight: type === "title" ? 800 : 500,
    fontSize: type === "title" ? 48 : 16,
  }),
);
