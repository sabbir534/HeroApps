import AppErrorImage from "../../assets/App-Error.png";
const AppNotFound = ({ handleGoback }) => {
  return (
    <div className="md:col-span-3 lg:col-span-4 text-center flex flex-col items-center px-5 md:px-15">
      <img
        src={AppErrorImage}
        alt="Apps Not Found"
        className="w-2/3 md:w-[450px]"
      />
      <p className="text-2xl md:text-3xl font-bold mt-10">
        OPPS!! APP NOT FOUND
      </p>
      <p className="text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className="flex justify-center pt-10 pb-15">
        <button
          onClick={handleGoback}
          className="btn opacity-90 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white rounded-1xl py-2 px-10"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
