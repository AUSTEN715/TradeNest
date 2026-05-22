import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Loading from "./Loading";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isVerify, setIsVerify] = useState(true);
  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://tradenest-backend-uhug.onrender.com/verify",
        {},
        { withCredentials: true },
      );
      const { status, user } = data;
      setUsername(user);

      if (status) {
        setIsVerify(false);
      } else {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  if(isVerify){
    return <Loading/>;
  }
  return (
    <>
      <TopBar user={username} />
      <Dashboard user={username}/>

      <ToastContainer />
    </>
  );
};

export default Home;
