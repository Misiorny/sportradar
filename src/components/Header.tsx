import Image from "next/legacy/image";
import logo from "../pictures/Sportradar_logo_RGB_white.webp";
interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <header className="bg-main flex relative px-8 py-4">
      <div className="content-center flex w-full justify-evenly">
        <Image src={logo} alt="Sportradar logo" />
      </div>
      <h2 className="text-3xl text-center text-complementary uppercase p-8">
        {text}
      </h2>
    </header>
  );
};
