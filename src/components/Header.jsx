import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/userSlice";
import { server_url } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const user = useSelector((store) => store?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await axios.get(`${server_url}/logout`, {
        withCredentials: true,
      });
      navigate("/login");
      dispatch(removeUser());
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>

      <div className="flex gap-2">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />

        {/* User Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
          {user?.photoUrl ? (
            <img
              alt={user?.username}
              src={user?.photoUrl}
              className="w-full h-full rounded-full"
            />
            ) : (
              <span className="text-white text-xs">{user?.username?.charAt(0)}</span>
  )}
</div>
          </div>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><Link onClick={handleLogOut}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

