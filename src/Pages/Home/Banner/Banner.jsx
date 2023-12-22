import { Link } from "react-router-dom";
import "./styles.css";

const Banner = () => {
  return (
    <div>
      <div className="w-full bg-cover bg-center bg_image">
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
              Manage your all task with 
              <span className="underline text-teal-400">  TaskManager</span>
            </h1>
            <Link to={"/dashboard"}>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white text-sm uppercase font-medium rounded hover:bg-teal-500 focus:outline-none focus:bg-teal-500">
                Lets Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
