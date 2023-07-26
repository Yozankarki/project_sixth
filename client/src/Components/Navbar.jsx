import { NavLink } from "react-router-dom";
import "../Assets/Css/Navbar.css";
import { getUserToken } from "../Helper/Helper";
import { useEffect, useState } from "react";

const isLoggedIn = () => {
  const accessToken = localStorage.getItem("token");
  return accessToken != null;
};

export default function Navbar() {
  const [username, setUserName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getUserToken()
      .then((user) => {
        setUserName(user.data.name);
        setId(user.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName("");
  };
  const isValidAdmin = () => {
    if (id === "64bf3714a83a39d228f3e6fa") return true;
    else return false;
  };

  return (
    <header className="background-image">
      <nav>
        <h1>
          <a href="#">
            GUIDE<span>AL</span>
          </a>
        </h1>
        <ul>
          <li>HOME</li>
          <li>ROOMS</li>
          <li>EVENTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <div className="secondary-nav">
          {isLoggedIn() ? (
            <>
              {/* checking wheather the user is admin or not. */}
              {isValidAdmin() ? (
                <button>Admin Panel</button>
              ) : (
                <li className="TokenUser">
                  <NavLink>Welcome, {username}</NavLink>
                </li>
              )}
              <li>
                <NavLink onClick={handleLogout}>LOGOUT</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/Login">LOGIN</NavLink>
              </li>
              <li>
                <NavLink to="/Register">REGISTER</NavLink>
              </li>
            </>
          )}
        </div>
      </nav>
      <div className="hero-text">
        <h1>Welcome to guideal </h1>
        <h6>Hotel & Resort</h6>
      </div>
    </header>
  );
}
