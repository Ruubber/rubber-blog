import Header from "./Header";
import Footer from "./Footer";
import { theme } from "theme";

interface PropType {
  title: string;
  description: string;
  path: string;
  children?: React.ReactNode;
}

export function Layout({ children, ...headerProps }: PropType) {
  return (
    <div style={{ background: theme.backgroundColor.primary }}>
      <div
        style={{
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: "100vh",
        }}
      >
        <Header {...headerProps} />
        {children}
        <Footer info={[]} />
      </div>
    </div>
  );
}
