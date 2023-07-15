import { NavLink } from "react-router-dom";
import "../../Assets/Css/Login.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    toast.success("Hello " + data.name, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <section className="background-login">
      <div className="main-container">
        <div className="form-container">
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign-in</h1>
            <input
              type="email"
              placeholder="Email"
              {...register("name", {
                required: "Enter Your email.",
                maxLength: 80,
              })}
            />
            <span style={{ color: "red" }}>{errors.name?.message}</span>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required.",
                min: 8,
              })}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
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
      <ToastContainer />
    </section>
  );
}
