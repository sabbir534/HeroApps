import { useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DownImage from "../../assets/icon-downloads.png";
import RatingImage from "../../assets/icon-ratings.png";
import { useInstalledApps } from "../../hooks/useInstalledApps";
import {
  addToStoredDB,
  formatNumber,
  getInstalledApps,
} from "../../utils/appUtil";

const Installation = () => {
  const data = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  useEffect(() => {
    const storedAppsData = getInstalledApps();
    const convertedData = storedAppsData.map((id) => parseInt(id));
    const appsToDisplay = data.filter((app) => convertedData.includes(app.id));
    setInstalledApps(appsToDisplay);
  }, [data]);

  const { uninstallApp } = useInstalledApps();
  const handleUninstall = (appId, appTitle) => {
    uninstallApp(appId);
    addToStoredDB(appId);
    setInstalledApps((prevApps) => prevApps.filter((app) => app.id !== appId));
    toast.warn(`${appTitle} has been uninstalled.`);
  };
  const sortedInstalledApps = useMemo(() => {
    const sortableApps = [...installedApps];
    if (sortOrder === "high-low") {
      sortableApps.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      sortableApps.sort((a, b) => a.downloads - b.downloads);
    }
    return sortableApps;
  }, [installedApps, sortOrder]);

  return (
    <div className="bg-[#D2D2D2] min-h-screen p-4 sm:p-6 md:p-15">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <h1 className="text-3xl font-bold mb-3 text-center text-gray-800">
        My Installed Apps
      </h1>
      <p className="text-[#627382] pt-5 pb-10 text-center">
        Explore All Apps on the Market developed by us.
      </p>
      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1  gap-6">
          <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
            <div className="font-bold text-2xl">
              ({sortedInstalledApps.length}) Apps Found
            </div>
            <div>
              <select
                className="select select-bordered select-sm w-full sm:w-auto"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default" disabled>
                  Sort by Downloads
                </option>
                <option value="high-low">High-Low</option>
                <option value="low-high">Low-High</option>
              </select>
            </div>
          </div>
          {sortedInstalledApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center justify-between card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
                <Link to={`/appDetails/${app.id}`} className="flex-shrink-0">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-20 w-20 object-contain rounded-lg border border-gray-200"
                  />
                </Link>
                <div className="flex flex-col justify-between gap-2">
                  <h2 className="card-title text-lg font-semibold">
                    {app.title}
                  </h2>
                  <div className="flex justify-between gap-4">
                    <div className="flex items-center gap-2 text-[#00D390] border-none">
                      <img src={DownImage} alt="" className="w-4 h-4" />
                      {formatNumber(app.downloads)}
                    </div>
                    <div className="flex items-center gap-2 text-[#F81] border-none">
                      <img src={RatingImage} alt="" className="w-4 h-4" />
                      {app.ratingAvg}
                    </div>
                    <p className="text-gray-500">{app.size}MB</p>
                  </div>
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className=" self-center md:self-start w-full md:w-auto opacity-90 cursor-pointer transition-colors text-white text-xl px-32 md:px-8 py-3 font-bold rounded-md bg-[#00D390] hover:bg-[#00b87b]"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">
            You have no installed apps yet.
          </p>
          <Link
            to="/apps"
            className="btn btn-primary mt-6 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white border-none"
          >
            Browse Apps
          </Link>
        </div>
      )}
    </div>
  );
};

export default Installation;
