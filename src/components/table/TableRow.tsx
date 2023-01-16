interface TableRowProps {
  teamsPlayed: string;
  result: string;
}
import data from "../../data/dataS1.json";
export const TableRow = ({ teamsPlayed, result }: TableRowProps) => {
  return (
    <tr>
      <td className="border border-slate-300 py-2">{teamsPlayed}</td>
      <td className="border border-slate-300 py-2">{result}</td>
    </tr>
  );
};
