import { Link, NavLink } from "react-router-dom";
import "../Assets/Css/Navbar.css";
import { getUserToken } from "../Helper/AuthHelper";
import { useEffect, useState } from "react";

export const IsLoggedIn = () => {
  const accessToken = localStorage.getItem("token");
  return accessToken != null;
};
export const IsValidAdmin = (id) => {
  if (id === "64bf3714a83a39d228f3e6fa") return true;
  else return false;
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
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      setUserName("");
    }
  };
  //checking wheather the user is admin or not.
  IsValidAdmin(id);

  return (
    <header className="background-image">
      <nav>
        <h1>
          <a href="/">
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
          {IsLoggedIn() ? (
            <>
              {/* checking wheather the user is admin or not. */}
              {IsValidAdmin(id) ? (
                <li className="TokenUser">
                  <NavLink to="/Dashboard">Admin Panel</NavLink>
                </li>
              ) : (
                <li className="TokenUser">
                  <NavLink to="#">Welcome, {username}</NavLink>
                </li>
              )}
              <li>
                <Link onClick={handleLogout}>LOGOUT</Link>
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
