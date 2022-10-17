import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Global, css } from "@emotion/react";
import { theme } from "theme";

export function TopLayout({ children }: { children: React.ReactNode }) {
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
          `}
        />
        {children}
      </ThemeProvider>
    </>
  );
}
