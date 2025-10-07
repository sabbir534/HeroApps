import { VscGithub } from "react-icons/vsc";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive
      ? "font-bold underline underline-offset-4 decoration-[#632EE3] bg-clip-text text-transparent bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
      : "text-black";
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={navLinkStyles}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={navLinkStyles}>
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="HERO IO"
              className="h-[30px]  md:h-[40px] w-[30px] md:w-[40px] mr-2"
            />
            <span className="decoration-[#632EE3] bg-clip-text text-transparent bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-xl md:text-2xl">
              HERO IO
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/sabbir534"
          className="btn opacity-90 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white rounded-1xl px-4 py-2"
        >
          <VscGithub /> Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
