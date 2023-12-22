import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png"

const Footer = () => {
  return (
    <div className="bg-white rounded-lg shadow dark:bg-teal-500 m-4">
      <div className="p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={'/'}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TaskManager
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                github
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2023{" "}
          <Link to={'/'} className="hover:underline">
            TaskManager™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
