import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInstalledApps } from "../../utils/appUtil";
const Installation = () => {
  const data = useLoaderData();
  console.log("installation", data);
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    // Fetch the list of installed app IDs from localStorage
    //const installedAppIds = JSON.parse(localStorage.getItem("installedApps")) || [];
    const storedAppsData = getInstalledApps();
    console.log("storedAppsData", storedAppsData);
    const convertedData = storedAppsData.map((id) => parseInt(id));
    console.log("convertedData", convertedData);
    //console.log("installedAppIds", installedAppIds);
    // Filter the main list to get the full data for installed apps
    const appsToDisplay = data.filter((app) => convertedData.includes(app.id));
    console.log("appsToDisplay", appsToDisplay);
    setInstalledApps(appsToDisplay);
  }, []);

  // Handler to uninstall an app
  const handleUninstall = (appId, appTitle) => {
    // Remove the app ID from localStorage
    const storedAppsData = getInstalledApps();
    console.log("storedAppsData", storedAppsData);
    const convertedData = storedAppsData.map((id) => parseInt(id));
    const updatedIds = convertedData.filter((id) => id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));

    // Update the state to remove the app card from the UI
    setInstalledApps((prevApps) => prevApps.filter((app) => app.id !== appId));

    // Show a success toast message
    toast.info(`${appTitle} has been uninstalled.`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-10">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        My Installed Apps
      </h1>
      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure className="p-4">
                <Link to={`/appDetails/${app.id}`}>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-40 w-full object-cover rounded-lg"
                  />
                </Link>
              </figure>
              <div className="card-body p-4 text-center">
                <h2 className="card-title justify-center text-lg font-semibold">
                  {app.title}
                </h2>
                <p className="text-sm text-gray-500">{app.companyName}</p>
                <div className="card-actions justify-center mt-4">
                  <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="btn btn-outline btn-error btn-sm"
                  >
                    Uninstall
                  </button>
                </div>
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
