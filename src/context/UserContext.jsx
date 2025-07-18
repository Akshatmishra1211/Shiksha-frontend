import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";                      // javascript library to make http request (get,post) better than fetch
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";    // to print messages

const UserContext = createContext();     // create a global accesible data

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loginUser(email, password, navigate, fetchMyCourse) {
    setBtnLoading(true);    // button loading feature
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {      // to retrieve data from login page
        email,
        password,
      });

      toast.success(data.message);       // the message we wrote in backend (toast means a pop up message)
      localStorage.setItem("token", data.token);   // saves in browsers local storage , token is required so user remains logged in even if the page reloads 
      setUser(data.user);
      setIsAuth(true);
      setBtnLoading(false);
      navigate("/");                 // redirect to home page
      fetchMyCourse();
    } catch (error) {
      setBtnLoading(false);
      setIsAuth(false);
      toast.error(error.response.data.message);    // show error message in backend
    }
  }

  async function registerUser(name, email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/register`, {
        name,
        email,
        password,
      });

      toast.success(data.message);
      localStorage.setItem("activationToken", data.activationToken);     // This token is sent in the headers of future requests to prove that the user is allowed to access protected routes like /api/user/me, /api/course
      setBtnLoading(false);
      navigate("/verify");
    } catch (error) {
      setBtnLoading(false);
      toast.error(error.response.data.message);
    }
  }

  async function verifyOtp(otp, navigate) {
    setBtnLoading(true);
    const activationToken = localStorage.getItem("activationToken");    // retrieving token that we stored register function
    try {
      const { data } = await axios.post(`${server}/api/user/verify`, {     // retrieve data from verify 
        otp,
        activationToken,
      });

      toast.success(data.message);
      navigate("/login");              // after verification navigate to login
      localStorage.clear();
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: {
          token: localStorage.getItem("token"),      // retrieving token that we stored in login function
        },
      });

      setIsAuth(true);       // IsAuth means loggedin or not
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();         // get the current logged in user from the backend
  }, []);                // [] means only run once
  return (
    <UserContext.Provider   // make these functions available globally
      value={{              // these functions can be imported in any file in whole react app
        user,
        setUser,
        setIsAuth,
        isAuth,
        loginUser,
        btnLoading,
        loading,
        registerUser,
        verifyOtp,
        fetchUser,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);     // let you use the globally accesible data that you created using create context
