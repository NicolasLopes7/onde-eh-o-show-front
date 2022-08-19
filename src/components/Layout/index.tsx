import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Box } from "../Primitives";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box
      css={{
        display: "grid",
        h: "100%",
        minH: "100vh",
        maxW: "1300px",
        mx: "auto",
        px: "$4",
        gridTemplateRows: "auto 4fr auto",
      }}
    >
      <Header />
      <Box
        as="main"
        css={{
          display: "flex",
          flexDir: "column",
        }}
      >
        {/* <NavigationMenu /> */}
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
