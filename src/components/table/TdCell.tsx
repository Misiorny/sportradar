interface TdCellProps {
  cellId: string;
  cellText: string;
}

export const TdCell = ({ cellId, cellText }: TdCellProps) => {
  return (
    <td id={cellId} className="border border-slate-300 py-2">
      {cellText}
    </td>
  );
};
