import SingleApp from "../SingleApp/SingleApp";
import { Link } from "react-router";
const Apps = ({ appsData }) => {
  const limitedApps = appsData.slice(0, 8);
  return (
    <div className="bg-[#D2D2D2] pt-15">
      <h3 className="text-center font-bold text-5xl p-2">Trending Apps</h3>
      <p className="text-[#627382] pt-5 pb-10 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 px-5 md:px-15">
        {limitedApps.map((singleApp) => (
          <SingleApp singleApp={singleApp} key={singleApp.id} />
        ))}
      </div>
      <div className="flex justify-center pt-10 pb-15">
        <Link
          to="/apps"
          className="btn opacity-90 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white rounded-1xl py-2 px-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Apps;
