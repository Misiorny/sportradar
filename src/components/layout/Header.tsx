interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <header className="bg-main flex px-8 py-4 ">
      <h1 className="text-3xl text-center text-complementary uppercase ">
        {text}
      </h1>
    </header>
  );
};
