import { Link } from "react-router";
import Error404 from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="md:col-span-3 lg:col-span-4 text-center py-10  flex flex-col items-center px-5 md:px-15">
      <img src={Error404} alt="Apps Not Found" className="w-2/3 md:w-[450px]" />
      <p className="text-2xl md:text-3xl font-bold mt-10">
        Oops, page not found!
      </p>
      <p className="text-[#627382]">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center pt-10 pb-15">
        <Link
          to="/"
          className="btn opacity-90 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white rounded-1xl py-2 px-10"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
