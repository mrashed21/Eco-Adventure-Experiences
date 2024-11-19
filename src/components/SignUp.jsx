import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { handleSignUp, handleLoginGoogle, setuser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleSignForm = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const profile = e.target.profile.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(terms);
    handleSignUp(email, password).then((result) => {
      setuser(result.user);
    });
  };
  return (
    <>
      <div className="bg-purple-100 py-10 ">
        <div className="hero w-6/12 mx-auto min-h-screen">
          <div className="hero-content  w-full flex-col">
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
                </div>
                <div className="form-control ">
                  <label className="label cursor-pointer justify-start gap-2">
                    <input
                      type="checkbox"
                      name="terms"
                      className="checkbox h-5 w-5 checkbox-primary"
                    />
                    <span className="text-sm font-semibold">
                      Agree to Terms and Conditions
                    </span>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="form-control mt-6">
                  <button
                    onClick={handleLoginGoogle}
                    className="btn btn-primary"
                  >
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
