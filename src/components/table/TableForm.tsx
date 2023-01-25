import { TableFormOption } from "./TableFormOption";

interface TableFormProps {
  value: string;
  name: string;
}

export const TableForm = ({ value, name }: TableFormProps) => {
  return (
    <section className="flex flex-col">
      <form className="mx-auto flex">
        <label htmlFor="season" className="p-2 text-xl uppercase text-main">
          Chose Season
        </label>
        <select
          name="season"
          id="season"
          className="text-complementary text-xl p-2"
        >
          <TableFormOption value={value} name={name} />
        </select>
      </form>
    </section>
  );
};
