import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col ">
      <Header headerText="All teams, all results in one place!" />
      <div className="flex flex-grow">{children}</div>
      <Footer footerText="Created by Misiorny" />
    </main>
  );
};
