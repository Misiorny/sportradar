import logo from "../pictures/Sportradar_logo_RGB_white.webp";
import Image from "next/legacy/image";

const Home = () => {
  return (
    <>
      <header className="bg-main flex space-x-44">
        <Image
          src={logo}
          alt="Sportradar logo"
          width={160}
          height={36}
          // layout="responsive"
        />
        <h2 className="text-3xl text-center text-complementary uppercase">
          All teams, all results in one place!
        </h2>
      </header>

      <div className="flex flex-grow  bg-amber-300 shadow-xl drop-shadow-2xl shadow-blue-700 mx-auto max-w-md mt-3">
        <p className="mx-auto px-4 py-2 mt-3 text-3xl ">
          Tu bedzie kiedyś nowa strona{" "}
        </p>
      </div>
      <footer className="bg-main">
        <Image src={logo} alt="Sportradar logo" />
        <p>Created by Misiorny </p>
      </footer>
    </>
  );
};

export default Home;
