import { Link } from "react-router-dom";
import errorImage from "../assets/errorpage.png";
const Error = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] flex-col">
      <img src={errorImage} alt="" />
      <Link className="underline text-red-600 text-3xl hover:text-red-400" to={'/'}>Back To Home</Link>
    </div>
  );
};

export default Error;
