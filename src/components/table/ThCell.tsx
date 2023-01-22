import { ReactNode } from "react";

interface ThCellProps {
  children: ReactNode;
}

export const ThCell = ({ children }: ThCellProps) => {
  return <th className="py-2 border border-slate-300">{children}</th>;
};
