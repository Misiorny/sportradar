import tableHeadNames from "../../data/tableHeadNames";

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        {tableHeadNames.stepTwo.map((e) => (
          <th key={e.id}>{e.headName}</th>
        ))}
      </tr>
    </thead>
  );
};
