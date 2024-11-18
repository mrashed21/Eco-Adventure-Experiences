import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password).then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <div className="bg-purple-100 py-10 ">
        <div className="hero w-6/12 mx-auto min-h-screen">
          <div className="hero-content  w-full flex-col">
            <div className="card bg-base-100 w-full shrink-0 shadow-md">
              <form onSubmit={handleLoginForm} className="card-body">
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
                </div>

                <div className="flex items-center justify-between">
                  <p>
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </p>

                  <p className="text-end text-xs text-[#706F6F]">
                    Dont’t Have An Account ?
                    <Link
                      to={"/signup"}
                      className="text-red-500 ml-1 font-medium"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
