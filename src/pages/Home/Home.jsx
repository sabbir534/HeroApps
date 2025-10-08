import Banner from "../../components/Banner/Banner";
import StateSection from "../../components/StateSection/StateSection";
import Apps from "../Apps/Apps";
import { useLoaderData } from "react-router";
const Home = () => {
  const appsData = useLoaderData();
  return (
    <div>
      <Banner />
      <StateSection />
      <Apps appsData={appsData} />
    </div>
  );
};

export default Home;
