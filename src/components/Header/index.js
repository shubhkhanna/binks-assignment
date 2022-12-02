import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import Navlinks from "./Navlinks";

const Header = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full shadow-md bg-gray-50">
      <div className="flex flex-col p-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <nav className="flex-col flex-grow hidden md:flex md:justify-end md:flex-row">
          <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
            {userInfo ? (
              <Navlinks to="/" title="Home" />
            ) : (
              <Navlinks to="signin" title="Sign in" />
            )}

            {/* Logout Button */}
            {userInfo && (
              <button
                className="px-4 py-1 text-gray-500 hover:text-blue-500 font-semibold rounded-full hover:bg-white focus:outline-none focus:shadow-outline hover:outline"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
