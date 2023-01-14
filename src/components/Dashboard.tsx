interface DashboardProps {
  tableTitle: string;
}

export const Dashboard = ({ tableTitle }: DashboardProps) => {
  return (
    <section className="flex flex-col ">
      <h3 className="mx-auto p-2  mt-3 text-xl uppercase">{tableTitle}</h3>
    </section>
  );
};
