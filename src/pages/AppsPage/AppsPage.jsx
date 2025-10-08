import { useLoaderData, Link } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import SingleApp from "../SingleApp/SingleApp";
import SearchApp from "../SearchApp/SearchApp";
import AppNotFound from "../AppNotFound/AppNotFound";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const AppsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const appsData = useLoaderData();
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setIsSearching(true);
    const debounce = setTimeout(() => {
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchTerm]);
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleGoback = () => {
    setSearchTerm("");
  };
  return (
    <div className="bg-[#D2D2D2] pt-15 pb-15">
      <h3 className="text-center font-bold text-5xl p-2">
        Our All Applications
      </h3>
      <p className="text-[#627382] pt-5 pb-10 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="px-5 md:px-15 flex flex-col gap-5 md:flex-row justify-between items-center mb-5">
        <div className="font-bold text-2xl">
          ({filteredApps.length}) Apps Found
        </div>
        <div>
          <SearchApp searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div>
        {isSearching ? (
          <LoadingSpinner />
        ) : filteredApps.length === 0 && searchTerm !== "" ? (
          <AppNotFound handleGoback={handleGoback} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 px-5 md:px-15">
            {filteredApps.map((singleApp) => (
              <SingleApp singleApp={singleApp} key={singleApp.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsPage;
