import { NavLink } from "react-router-dom";

export default function Register() {
  return (
      <section className="background-login">
        <div className="main-container">
          <div className="overlay-container">
            <div className="overlay-panel">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal details</p>
              <button className="ghost btn1">
              <NavLink to="/Login">Sign In</NavLink>
              </button>
            </div>
          </div>
          <div className="form-container">
            <form action="#">
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </section>
  );
}
