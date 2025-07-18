import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";           // icons for logout 
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();            // clears the local storage of the browser
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div>
      {user && (
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name - {user.name}</strong>
            </p>

            <p>
              <strong>Email - {user.email}</strong>
            </p>

            {user.role === "user" && (
            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="common-btn"
            >
              <MdDashboard />
              Dashboard
            </button>
            )}

            <br />

            {user.role === "admin" && (     // if user is admin
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn"
              >
                <MdDashboard style={{ marginRight: "5px" }}/> 
                Admin Dashboard
              </button>
            )}

            <br />

            <button
              onClick={logoutHandler}          // logout function
              className="common-btn"
              style={{ background: "red" }}
            >
              <IoMdLogOut style={{ marginRight: "5px" }}/>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
