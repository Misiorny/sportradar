import data from "../../utils/data_step_two";
import { TdCell } from "./TdCell";

export const TableRow = () => {
  return (
    <>
      {data.map((e) => (
        <tr key={e.id}>
          <TdCell cellId={`${e.id}+1`} cellText={e.matchDate} />
          <TdCell cellId={`${e.id}+2`} cellText={e.stadiumName} />
          <TdCell cellId={e.teamHomeId} cellText={e.teamHome} />
          <TdCell cellId={e.teamAwayId} cellText={e.teamAway} />
          <TdCell
            cellId={`${e.id}+3`}
            cellText={`${e.firstHalfScore[0].homeScore}:${e.firstHalfScore[1].awayScore}`}
          />
          <TdCell cellId={`${e.id}+4`} cellText={e.score} />
        </tr>
      ))}
    </>
  );
};
