import { TableFormOption } from "../components/table/TableFormOption";

const apiKey = "7gv3rgnu48fkhb9gykdqxfp6";
const seasonId = "sr:season:77453";
const apiUrl = `https://api.sportradar.us/soccer/trial/v4/en/seasons/${seasonId}/schedules.json?api_key=${apiKey}`;

const competitionId = "sr:competition:202";
const seasonUrl = `https://api.sportradar.us/soccer/trial/v4/en/competitions/${competitionId}/seasons.json?api_key=${apiKey}`;

const eventId = "sr:competition:202";
const timelineUrl = `https://api.sportradar.us/soccer/trial/v4/en/sport_events/${eventId}/timeline.json?api_key=${apiKey}`;
import { InferGetStaticPropsType } from "next";
import { Table } from "../components/table";

const Tables = ({ tables }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(seasonUrl);
  console.log(tables);
  return (
    <div className="mx-auto">
      <section className="flex flex-col">
        <form className="mx-auto flex ">
          <label htmlFor="season" className="p-2 text-xl uppercase text-main">
            Chose Season
          </label>
          <select
            name="season"
            id="season"
            className="text-complementary text-xl p-2"
          >
            {tables.seasons.map((e) => (
              <TableFormOption key={Math.random()} value={e.id} name={e.name} />
            ))}
          </select>
        </form>
        <Table />
      </section>
    </div>
  );
};
export const getStaticProps = async () => {
  const result = await fetch(`${seasonUrl}`);
  const tables: SeasonApiResponse = await result.json();
  console.log(result);
  return {
    props: {
      tables,
    },
  };
};

export interface Season {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  year: string;
  competition_id: string;
}

export interface SeasonApiResponse {
  seasons: Season[];
}

export default Tables;
