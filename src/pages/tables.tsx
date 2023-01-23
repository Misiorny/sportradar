const apiKey = "7gv3rgnu48fkhb9gykdqxfp6";
const seasonId = "sr:season:77453";
const apiUrl = `https://api.sportradar.us/soccer/trial/v4/en/seasons/${seasonId}/schedules.json?api_key=${apiKey}`;

const competitionId = "sr:competition:202";
const seasonUrl = `https://api.sportradar.us/soccer/trial/v4/en/competitions/${competitionId}/seasons.json?api_key=${apiKey}`;

const eventId = "sr:competition:202";
const timelineUrl = `https://api.sportradar.us/soccer/trial/v4/en/sport_events/${eventId}/timeline.json?api_key=${apiKey}`;
import { InferGetStaticPropsType } from "next";

const Tables = ({ tables }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(seasonUrl);
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
            <option value={tables.seasons[0].id}>
              {tables.seasons[0].name}
            </option>
            <option value={tables.seasons[1].id}>
              {tables.seasons[1].name}
            </option>
            <option value={tables.seasons[2].id}>
              {tables.seasons[2].name}
            </option>
          </select>
        </form>
        <div className="flex justify-center p-4 text-2xl ">
          <h3 className="px-2 text-complementary">Start date: </h3>
          <p className="px-2 text-main font-bold">
            {tables.seasons[0].start_date}
          </p>
          <h3 className="px-2 text-complementary">End date:</h3>
          <p className="px-2 text-main font-bold">
            {tables.seasons[0].end_date}
          </p>
        </div>
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
