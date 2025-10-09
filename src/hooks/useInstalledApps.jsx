import { useState, useEffect, useCallback } from "react";

const getInstalledAppsFromStorage = () => {
  try {
    const item = localStorage.getItem("installedApps");
    return item ? JSON.parse(item).map(Number) : [];
  } catch (error) {
    console.error("Failed to parse installed apps from localStorage", error);
    return [];
  }
};

export const useInstalledApps = () => {
  const [installedAppIds, setInstalledAppIds] = useState(
    getInstalledAppsFromStorage
  );
  const handleStorageChange = useCallback(() => {
    setInstalledAppIds(getInstalledAppsFromStorage());
  }, []);

  useEffect(() => {
    window.addEventListener("installedAppsChanged", handleStorageChange);
    return () => {
      window.removeEventListener("installedAppsChanged", handleStorageChange);
    };
  }, [handleStorageChange]);

  const installApp = (appId) => {
    const numericAppId = Number(appId);
    const currentIds = getInstalledAppsFromStorage();
    if (!currentIds.includes(numericAppId)) {
      const updatedIdsAsNumbers = [...currentIds, numericAppId];
      const updatedIdsAsStrings = updatedIdsAsNumbers.map(String);
      localStorage.setItem(
        "installedApps",
        JSON.stringify(updatedIdsAsStrings)
      );
      window.dispatchEvent(new Event("installedAppsChanged"));
    }
  };
  const uninstallApp = (appId) => {
    const numericAppId = Number(appId);
    const currentIds = getInstalledAppsFromStorage();
    const updatedIdsAsNumbers = currentIds.filter((id) => id !== numericAppId);
    const updatedIdsAsStrings = updatedIdsAsNumbers.map(String);
    localStorage.setItem("installedApps", JSON.stringify(updatedIdsAsStrings));
    window.dispatchEvent(new Event("installedAppsChanged"));
  };
  const isAppInstalled = (appId) => {
    const numericAppId = Number(appId);
    return installedAppIds.includes(numericAppId);
  };
  return { installApp, uninstallApp, isAppInstalled, installedAppIds };
};
