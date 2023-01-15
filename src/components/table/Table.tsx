import { useEffect, useState } from "react";
import { TableHeader, TableRow, TableTitle } from "./index";

export const Table = () => {
  const [seasonData, setSeasonData] = useState({});
  useEffect(() => {
    fetch(
      "https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=7gv3rgnu48fkhb9gykdqxfp6",
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => setSeasonData(JSON.stringify(data)))
      .catch((error) => console.error(error));
  }, []);
  console.log("seasonData", seasonData);
  return (
    <section className="flex flex-col flex-grow pb-6 ">
      <TableTitle tableTitle="Table of results" />
      <table className=" border mx-auto text-center table-auto  ">
        <TableHeader />
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </section>
  );
};
