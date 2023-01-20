import data from "../../utils/data_step_two";

export const TableRow = () => {
  return (
    <>
      {data.map((e) => (
        <tr key={e.id}>
          <td>{e.match}</td>
          <td>{e.stadium}</td>
          <td id={e.team.home.id}>{e.teamHome}</td>
          <td id={e.team.away.id}>{e.teamAway}</td>
          <td>
            {e.team.home.score.half}:{e.team.away.score.half}
          </td>
          <td>
            {e.team.home.score.half}:{e.team.away.score.half}
          </td>
        </tr>
      ))}
    </>
  );
};
