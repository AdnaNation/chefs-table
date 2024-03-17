import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import cover from "../../assets/cover.png";

const Header = () => {
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost  lg:hidden"
              >
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
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>

                <li>
                  <a className="text-[#89898B] mr-5">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>
              </ul>
            </div>
            <a className="text-lg lg:text-4xl font-extrabold manrope">
              Recipe Calories
            </a>
          </div>
          <div className="navbar-center hidden lg:flex md:flex">
            <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <IoMdSearch className="-mr-8 text-2xl text-gray-500"></IoMdSearch>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-full mr-2 w-full max-w-xs hidden md:block lg:block bg-[#150B2B0D] pl-8"
            />
            <a className="bg-[#0BE58A] text-white font-bold manrope text-3xl lg:text-5xl rounded-full">
              <FaRegCircleUser></FaRegCircleUser>
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero lg:h-[600px] overflow-hidden rounded-xl"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className=" bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl text-white">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-xs lg:text-2xl">
              Join our thriving community of food enthusiasts, share your
              culinary creations, and connect with fellow cooks from around the
              world. With regular updates and fresh content, there is always
              something new to explore and savor on our cooking recipe blog
              site. Let the culinary adventure begin!
            </p>
            <button className="btn rounded-3xl mr-3 bg-[#0BE58A] text-black border-none">
              Explore Now
            </button>
            <button className="btn bg-inherit rounded-3xl text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
