interface DashboardProps {
  tableTitle: string;
}

export const Dashboard = ({ tableTitle }: DashboardProps) => {
  return (
    <section className="flex flex-col ">
      <h2 className="mx-auto p-2  mt-3 text-4xl ">{tableTitle}</h2>
    </section>
  );
};
