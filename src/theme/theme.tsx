import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    color?: {
      backgroundColor: { primary: string };
      color: { primary: string };
    };
  }
  interface ThemeOptions {
    color?: {
      backgroundColor: { primary: string };
      color: { primary: string };
    };
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
  },
  color: {
    backgroundColor: {
      primary: "#eff6ff",
    },
    color: {
      primary: "#004ca3",
    },
  },
});
