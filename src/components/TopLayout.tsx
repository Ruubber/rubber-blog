import React from "react";
import { Global, css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function TopLayout({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    typography: {
      fontFamily: "DM Sans",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html,
            body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              font-family: "DM Sans";
            }
            .MuiTypography-root {
              font-family: "DM Sans";
            }
          `}
        />
        {children}
      </ThemeProvider>
    </>
  );
}
