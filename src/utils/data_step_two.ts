import data from "../data/dataS1.json";

type Score = {
  half: number;
  full: number;
};

type Team = {
  id: string;
  name: string;
  score: Score;
};

type GameStatus = "close" | "postponed";

type Game = {
  id: string;
  date: string;
  stadium: string;
  status: GameStatus;
  team: {
    home: Team;
    away: Team;
  };
  winnerId: string | null;
};
const stepTwoData: Game = data.schedules.map(
  ({ sport_event_status, sport_event }, i) => ({
    id: i,
    date: sport_event.start_time.slice(0, 10),
    stadium: sport_event.venue.name,
    status: sport_event_status.status,
    team: {
      home: [
        { id: sport_event.competitors[0].id },
        { name: sport_event.competitors[0].name },
        {
          score: [
            {
              half: sport_event_status.period_scores
                ? sport_event_status.period_scores[0].home_score
                : "postponed",
            },
            {
              full:
                sport_event_status.status === "closed"
                  ? `${sport_event_status.home_score}`
                  : "postponed",
            },
          ],
        },
      ],
      away: [
        { id: sport_event.competitors[1].id },
        { name: sport_event.competitors[1].name },
        {
          score: [
            {
              half: sport_event_status.period_scores
                ? sport_event_status.period_scores[0].away_score
                : "postponed",
            },
            {
              full:
                sport_event_status.status === "closed"
                  ? `${sport_event_status.away_score}`
                  : "postponed",
            },
          ],
        },
      ],
    },

    winnerId: sport_event_status.winner_id
      ? `${sport_event_status.winner_id}`
      : null,
  })
);

export default stepTwoData;
