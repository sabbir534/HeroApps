import { Link } from "react-router";
import DownImage from "../../assets/icon-downloads.png";
import RatingImage from "../../assets/icon-ratings.png";
import { formatNumber } from "../../utils/appUtil";
const SingleApp = ({ singleApp }) => {
  const { id, title, image, downloads, ratingAvg } = singleApp;

  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure className="p-3">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover  rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2 btn text-[#00D390] bg-[#F1F5E8] border-none">
              <img src={DownImage} alt="" className="w-4 h-4" />
              {formatNumber(downloads)}
            </div>
            <div className="flex items-center gap-2 btn text-[#F81] bg-[#FFF0E1] border-none">
              <img src={RatingImage} alt="" className="w-4 h-4" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
