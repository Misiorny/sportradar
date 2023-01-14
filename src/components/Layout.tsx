import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header text="All teams, all results in one place!" />
      {children}
      <Footer text="All teams, all results in one place!" />
    </>
  );
};
