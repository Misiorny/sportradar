export const TableForm = () => {
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
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
        </select>
      </form>
      <div className="flex justify-center p-4 text-2xl ">
        <h3 className="px-2 text-complementary">Start date: </h3>
        <p className="px-2 text-main font-bold">from fetch</p>
        <h3 className="px-2 text-complementary">End date:</h3>
        <p className="px-2 text-main font-bold">from fetch</p>
      </div>
    </section>
  );
};
