import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
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
            <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;