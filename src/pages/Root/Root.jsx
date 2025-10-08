import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
const Root = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading"; // Check if navigation is in progress

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isNavigating && <LoadingSpinner />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
