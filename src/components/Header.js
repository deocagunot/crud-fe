import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navColor = "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4";

const classNameFunc = ({ isActive }) =>
  isActive ? navColor + " text-white" : navColor;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/crud-fe/" tabIndex="0" className="flex">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              CRUD EXAM
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isMobile && showMenu && "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow text-teal-200 ">
            <NavLink tabIndex="1" to="/crud-fe" className={classNameFunc} end>
              Home
            </NavLink>
            <NavLink tabIndex="2" to="about" className={classNameFunc}>
              About
            </NavLink>
            <NavLink tabIndex="3" to="posts" className={classNameFunc}>
              Posts
            </NavLink>
          </div>
          <div>
            <Link
              tabIndex="4"
              to="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
