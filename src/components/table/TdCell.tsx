interface TdCellProps {
  cellText: string;
  cellId: string;
}

export const TdCell = ({ cellText, cellId }: TdCellProps) => {
  return (
    <td id={cellId} className={`border border-slate-300 py-2 `}>
      {cellText}
    </td>
  );
};
