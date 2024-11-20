import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { handleSignUp, handleLoginGoogle, setUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one numeric character.";
    }
    if (!/\W/.test(password)) {
      return "Password must contain at least one special character.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };
  // const location = useLocation();
  const navigate = useNavigate();
  const handleSignForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    handleSignUp(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success("Signup successful!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="bg-purple-100 py-10 ">
        <div className="px-5 md:px-0 md:w-6/12 mx-auto">
          <div className=" w-full flex-col">
            <div className="card bg-base-100 w-full shrink-0 shadow-md">
              <form onSubmit={handleSignForm} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-medium">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-medium">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="profile"
                    placeholder="Enter your Photo URL"
                    className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="text-lg font-medium">Password</span>
                  </label>
                  <input
                    type={showPassword ? " text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                    required
                  />
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-3 top-14 text-xl"
                    type="button"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {error && (
                    <p className="text-red-500 text-sm text-center mt-3">
                      {error}
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-full">
                    Sign Up
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button
                    onClick={handleLoginGoogle}
                    className="btn btn-outline rounded-full text-black"
                  >
                    <span className="text-2xl">
                      <FcGoogle />
                    </span>{" "}
                    Sign Up with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
