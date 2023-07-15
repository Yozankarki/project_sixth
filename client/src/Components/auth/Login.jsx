import { NavLink } from "react-router-dom";
import "../../Assets/Css/Login.css";
export default function Login() {
  return (
    <section className="background-login">
      <div className="main-container">
        <div className="form-container">
          <form action="#">
            <h1>Sign-in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p>
              <a href="#">Forgot your password?</a>
            </p>
            <button className="btn1">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay-panel">
            <h1>Hi There!</h1>
            <p>Enter your personal details to open an account with us</p>
            <button className="ghost btn1">
			<NavLink to="/Register">Sign Up</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
