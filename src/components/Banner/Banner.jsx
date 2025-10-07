import bookImage from "../../assets/bannerImage.png";
const Banner = () => {
  return (
    <div className="flex items-center justify-around mx-30 my-10">
      <div className="flex flex-col items-start">
        <h1 className="text-7xl font-bold mb-20">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-primary">View The List</button>
      </div>
      <div>
        <img src={bookImage} alt="" className="w-[318px] " />
      </div>
    </div>
  );
};

export default Banner;
