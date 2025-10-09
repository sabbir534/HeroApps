const StateSection = () => {
  return (
    <div className="w-full bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-20">
      <h1 className="text-white text-center text-4xl font-bold">
        Trusted by Millions, Built for You
      </h1>
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-15 md:gap-30 mt-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-white text-center text-sm opacity-50">
            Total Downloads
          </p>
          <h2 className="text-5xl font-bold decoration-[#b8c355] bg-clip-text text-transparent bg-[linear-gradient(125deg,#3CD057FF_5.68%,#2ABEDBFF_88.38%)]">
            29.6M
          </h2>
          <p className="text-white text-center text-sm opacity-50">
            21% More Than Last Month
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-white text-center text-sm opacity-50">
            Total Reviews
          </p>
          <h2 className="text-white text-5xl font-bold">906K</h2>
          <p className="text-white text-center text-sm opacity-50">
            46% More Than Last Month
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-white text-center text-sm opacity-50">
            Active Apps
          </p>
          <h2 className=" text-5xl font-bold decoration-[#c9519b] bg-clip-text text-transparent bg-[linear-gradient(125deg,#C92334FF_5.68%,#4019A3FF_88.38%)]">
            132+
          </h2>
          <p className="text-white text-center text-sm opacity-50">
            31 More Will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
