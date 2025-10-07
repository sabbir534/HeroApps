import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
const Root = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
