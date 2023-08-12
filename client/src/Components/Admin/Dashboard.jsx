import { useState } from "react";
import "../../Assets/Css/Admin/Dashboard.css";
import { getUserToken } from "../../Helper/AuthHelper";
import { IsLoggedIn, IsValidAdmin } from "../Navbar";

export default function Dashboard() {
  const [authorize, setAuthorize] = useState("");
  getUserToken().then((user) => {
    setAuthorize(user.data._id);
  });
  return (
    <>
      {IsLoggedIn() ? (
        <>
          {/* checking wheather the user is admin or not. */}
          {IsValidAdmin(authorize) ? (
            <div className="dashboard-container">
              <aside className="side-dashboard">
                <div className="user-avatar">
                  <h3>Yojan karki</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro
                  </p>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa-house"></i> Dashboard
                  </li>
                  <li>
                    <i className="fa-solid fa-house"></i> Dashboard
                  </li>
                  <li>
                    <i className="fa-solid fa-house"></i> Dashboard
                  </li>
                  <li>
                    <i className="fa-solid fa-house"></i> Dashboard
                  </li>
                  <li>
                    <i className="fa-solid fa-house"></i> Dashboard
                  </li>
                  <li>
                    <i className="fa-solid fa-house"></i> Dashboard
                  </li>
                </ul>
              </aside>

              <main className="section-dashboard">
                <ul>
                  <div>
                    <h1>
                      Admin<span>kit</span>
                    </h1>
                  </div>
                </ul>
              </main>
            </div>
          ) : (
            <p>login as admin</p>
          )}
        </>
      ) : (
        <p>Not authorized</p>
      )}
    </>
  );
}
