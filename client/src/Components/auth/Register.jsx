import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
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
        <div className="overlay-container">
          <div className="overlay-panel">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal details
            </p>
            <button className="ghost btn1">
              <NavLink to="/Login">Sign In</NavLink>
            </button>
          </div>
        </div>
        <div className="form-container">
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Enter your name",
                maxLength: 20,
              })}
            />
            <span style={{ color: "red" }}>{errors.name?.message}</span>

            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Enter your email",
                maxLength: 80,
              })}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                min: 8,
              })}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "password didn't match.",
                min: 8,
              })}
            />
            <span style={{ color: "red" }}>
              {errors.confirmPassword?.message}
            </span>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
