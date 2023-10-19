import { MdMovieFilter } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SingleLink from "../SingleLink/SingleLink";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Logout Successfull");
      })
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <SingleLink path={""} linkTitle={"Home"}></SingleLink>
      <SingleLink path={"trending"} linkTitle={"Trending"}></SingleLink>
      <SingleLink path={"upcoming"} linkTitle={"Upcoming"}></SingleLink>
      <SingleLink path={"addProduct"} linkTitle={"Add Product"}></SingleLink>
      <SingleLink path={"myCart"} linkTitle={"My Cart"}></SingleLink>
      <SingleLink path={"addBrand"} linkTitle={"Add Brand"}></SingleLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost btn-sm normal-case text-xl text-[#E50914]">
          <MdMovieFilter></MdMovieFilter>Popcorn Plays
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* <div className="navbar-end">
        <NavLink to='/login'><span className="btn btn-sm bg-[#E50914] hover:bg-[#366785] text-white ">Sign In</span></NavLink>
      </div> */}

      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={`${user.photoURL}`} alt="" />
                ) : (
                  <img src={"../../defau.png"} alt="" />
                )}
              </div>
            </div>
            <p className="font-semibold">{user.displayName}</p>
            <button className="btn btn-neutral btn-sm" onClick={handleSignOut}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <span className="btn btn-sm bg-[#E50914] hover:bg-[#366785] text-white ">
              Sign In
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
