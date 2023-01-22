import fullData from "../../data/dataS1.json";
import { Game } from "../../utils/data_step_two";
import { TdCell } from "./TdCell";

interface TableRowProps {
  game: Game;
}
const cutDate = (day: string) => day.slice(0, 10);
const scoresFormat = ({ team: { home, away }, status }: Game) => {
  if (status === "postponed") return { half: "postponed", full: "postponed" };
  const half = `${home.score.half}:${away.score.half}`;
  const full = `${home.score.full}:${away.score.full}`;
  return { half, full };
};

export const TableRow = ({ game }: TableRowProps) => {
  const {
    day,
    stadium,
    status,
    team: { home, away },
    winner,
  } = game;
  const { half, full } = scoresFormat(game);
  const rowTable = [cutDate(day), stadium, home.name, away.name, half, full];
  const isLabeled = (label: string) => [home.name, away.name].includes(label);

  const colorCell = (label: string): string | undefined => {
    if (!isLabeled(label) || status === "postponed") return;
    if (!winner) return "bg-orange-300";
    return label === winner.name ? "bg-green-500" : "bg-red-500";
  };
  return (
    <tr>
      {rowTable.map((label, i) => (
        <TdCell key={i} className={colorCell(label)}>
          {label}
        </TdCell>
      ))}
    </tr>
  );
  console.log("date", day);
};
