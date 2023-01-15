// import Image from "next/image";
// import logo from "../../pictures/Sportradar_logo_RGB_white.webp";

interface FooterProps {
  footerText: string;
}

export const Footer = ({ footerText }: FooterProps) => {
  return (
    <footer className="bg-main  py-4 px-2 ">
      {/*<div className="">*/}
      {/*  <Image src={logo} alt="Sportradar logo" />*/}
      {/*</div>*/}
      <p className="text-xl text-center text-complementary ">{footerText}</p>
    </footer>
  );
};
