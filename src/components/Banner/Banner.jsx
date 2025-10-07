import { Link } from "react-router";
import AppStoreBtn from "../../assets/appleBtn.png";
import PlayStoreBtn from "../../assets/gstoreBtn.png";
import HeroImage from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#D2D2D2] pt-15">
      <h1 className="text-5xl font-bold mb-4">We Build</h1>
      <h1 className="text-5xl font-bold">
        <span className="decoration-[#632EE3] bg-clip-text text-transparent bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] mr-3">
          Productive
        </span>
         Apps
      </h1>
      <p className="text-[#627382] px-8 py-4 text-center max-w-[50rem]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="pb-10 pt-6">
        <Link
          to="https://play.google.com/"
          className="mr-4 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline border-gray-400 hover:bg-gray-200 hover:border-gray-400"
        >
          <img src={PlayStoreBtn} alt="" className="h-4 md:h-8 w-4 md:w-8" />
          Google Play
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline border-gray-400 hover:bg-gray-200 hover:border-gray-400"
        >
          <img src={AppStoreBtn} alt="" className="h-4 md:h-8 w-4 md:w-8" />
          Apple Store
        </Link>
      </div>
      <img src={HeroImage} alt="" className="md:max-w-[50rem]" />
    </div>
  );
};

export default Banner;
