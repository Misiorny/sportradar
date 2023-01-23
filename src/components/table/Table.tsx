import { TableForm, TableHeader, TableRow, TableTitle } from "./index";
import { useGames } from "../../utils/useGames";

export const Table = () => {
  const { loading, error, games } = useGames();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Failed to load data</h1>;
  if (!games) return <h1>Failed to start app</h1>;

  return (
    <section className="flex flex-col flex-grow pb-6 ">
      <TableTitle tableTitle="Table of results" />
      <TableForm />

      <table className=" border mx-auto text-center table-auto  ">
        <TableHeader />
        <tbody>
          {games.map((game) => (
            <TableRow key={game.id} game={game} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
