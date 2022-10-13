import Header from "./Header";
import Footer from "./Footer";
import { Global, css } from "@emotion/react";

interface PropType {
  title: string;
  description: string;
  path: string;
  children?: React.ReactNode;
}

export function Layout({ children, ...headerProps }: PropType) {
  return (
    <div>
      <div
        style={{
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: "100vh",
        }}
      >
        <Global
          styles={css`
            html,
            body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            }
          `}
        />
        <Header {...headerProps} />
        {children}
        <Footer info={[]} />
      </div>
    </div>
  );
}
