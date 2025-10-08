import { useLoaderData, useParams } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DownImage from "../../assets/icon-downloads.png";
import RatingImage from "../../assets/icon-ratings.png";
import ReviewImage from "../../assets/icon-review.png";
import { formatNumber } from "../../utils/appUtil";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === parseInt(id));
  console.log(singleApp);
  const reversedRatings = [...singleApp.ratings].reverse();
  return (
    <div className="flex flex-col gap-8 bg-gray-200 px-4 sm:px-10 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={singleApp.image}
          alt={`${singleApp.title} icon`}
          className="w-full max-w-[200px] md:max-w-[256px] aspect-square object-cover rounded-lg self-center"
        />

        <div className="flex-grow flex flex-col justify-between">
          <h1 className="text-3xl font-bold">{singleApp.title}</h1>
          <p className="mt-1">
            <span className="text-gray-600"> Developed by </span>
            <span className="font-semibold bg-clip-text text-transparent bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">
              {singleApp.companyName}
            </span>
          </p>
          <div className="divider my-4"></div>
          <div className="flex gap-5 justify-center md:justify-start">
            <div className="flex flex-col gap-2">
              <img
                src={DownImage}
                alt="Downloads"
                className="w-[30px] h-[30px]"
              />
              <p className="font-medium text-sm">Downloads</p>
              <p className="text-2xl font-extrabold">
                {formatNumber(singleApp.downloads)}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={RatingImage}
                alt="Average Rating"
                className="w-[30px] h-[30px]"
              />
              <p className="font-medium text-sm">Rating</p>
              <p className="text-2xl font-extrabold">{singleApp.ratingAvg}</p>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={ReviewImage}
                alt="Reviews"
                className="w-[30px] h-[30px]"
              />
              <p className="font-medium text-sm">Reviews</p>
              <p className="text-2xl font-extrabold">
                {formatNumber(singleApp.reviews)}
              </p>
            </div>
          </div>
          <button className="mt-6 self-center md:self-start w-full md:w-auto opacity-90 bg-[#00D390] hover:bg-[#00b87b] transition-colors text-white text-xl px-8 py-3 font-bold rounded-md">
            Install Now ({singleApp.size} MB)
          </button>
        </div>
      </div>

      <div>
        <div className="divider"></div>
        <h2 className="text-xl font-bold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={reversedRatings}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={60} />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" name="Votes" />
          </BarChart>
        </ResponsiveContainer>
        <div className="divider"></div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Description</h2>
        <p className="mt-2 text-gray-700">{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
