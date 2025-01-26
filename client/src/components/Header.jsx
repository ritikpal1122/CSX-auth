import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="header flex justify-between bg-gray-200 items-center  rounded-lg shadow-md backdrop-filter backdrop-blur-md">
        <div className="p-6 text-yellow-500 text-2xl font-bold   flex justify-center items-center">
          <Link to="/">
             CSX Auth
          </Link>
        </div>
        <div className="nav-items flex justify-center items-center md:max-w-md p-6">
          <ul className="flex justify-center items-center md:flex md:justify-center md:items-center">
            <li className="mr-4 text-gray-500 font-bold md:mr-6">
              <Link to="/">
                <a className="hover:text-blue-400 transition duration-300">Home</a>
              </Link>
            </li>
            <li className="mr-4 text-gray-500 font-bold md:mr-6">
              <Link to="/about">
                <a className="hover:text-blue-400 transition duration-300">About</a>
              </Link>
            </li>
            <li className="text-gray-500 font-bold">
              <Link to="/sign-in">
                <a className="hover:text-blue-400 transition duration-300">SignIn</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;