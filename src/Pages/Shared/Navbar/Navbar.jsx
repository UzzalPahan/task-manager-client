import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const {logOut} = useContext(AuthContext)
  const handleUserLogin = () =>{
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  }

  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* --------- Navbar -----------  */}
      <nav className="bg-teal-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* --------- Logo -----------  */}
          <Link to={"/"} className="text-white text-xl font-bold">
            TaskManager
          </Link>

          {/* --------- Routes -----------  */}
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* --------- Login & Register -----------  */}
          <div className="flex gap-4 items-center">
            {user?
            <>
            <img src={user?.photoURL} className="w-10 rounded-lg" alt="" />
            <button onClick={handleUserLogin} className="text-white hover:text-gray-300">
              Logout
            </button>
            </>
            :
            <Link to={'/login'} className="text-white hover:text-gray-300">
              Login
            </Link>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
