import { TableHeader, TableRow, TableTitle } from "./index";
import stepOneData from "../../utils/data";

export const Table = () => {
  console.log(stepOneData);
  return (
    <section className="flex flex-col flex-grow pb-6 ">
      <TableTitle tableTitle="Table of results" />
      <table className=" border mx-auto text-center table-auto  ">
        <TableHeader />
        <tbody>
          {stepOneData.map((e) => (
            <TableRow
              key={e.id - 1}
              teamsPlayed={`${e.teamHome}-${e.teamAway}`}
              result={`${e.score}`}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
