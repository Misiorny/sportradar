import Image from "next/image";
import logo from "../../pictures/Sportradar_logo_RGB_white.webp";

interface FooterProps {
  text: string;
}

export const Footer = ({ text }: FooterProps) => {
  return (
    <footer className="bg-main flex flex-col py-4 px-2 content-center">
      <div className=" flex w-full justify-evenly">
        <Image src={logo} alt="Sportradar logo" />
      </div>
      <p className="text-xl text-center text-complementary ">{text}</p>
    </footer>
  );
};
