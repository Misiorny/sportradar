interface HeaderProps {
  headerText: string;
}

export const Header = ({ headerText }: HeaderProps) => {
  return (
    <header className="bg-main flex px-8 py-4 ">
      <h1 className="text-3xl mx-auto text-complementary uppercase ">
        {headerText}
      </h1>
    </header>
  );
};
