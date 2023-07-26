import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../Helper/Helper";

export default function Register() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data).then((success) => {
        if (success.status == 201) {
          Navigate("/login");
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
          console.log(success);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="background-login">
      <div className="main-container">
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
            <div className="register-link">
              <p>
                Already a member!
                <NavLink to="/Login">Sign In</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
