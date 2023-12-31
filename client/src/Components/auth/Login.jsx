import { NavLink, useNavigate } from "react-router-dom";
import "../../Assets/Css/Login.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Helper/AuthHelper";
/* import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../Features/users/GetUserSlice"; */

export default function Login() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data).then((success) => {
        if (success.status == 201) {
          const token = success.data.token;
          localStorage.setItem("token", token);
          Navigate("/");
        } else {
          toast.error(success.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
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
              {...register("email", {
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
            <div className="register-link">
              <p>
                Not a member yet?
                <NavLink to="/Register">Register now</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
