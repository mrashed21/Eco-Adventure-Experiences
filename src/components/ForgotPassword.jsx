import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const ForgotPassword = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState(state || "");
  const { handleForgotPassword } = useContext(AuthContext);

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      await handleForgotPassword(email);
      toast.success("Send email successful!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.open("https://mail.google.com", "_blank");
      }, 3000);
    } catch {
      toast("Something went Wrong! Try agin.", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="bg-purple-100">
      <div className=" p-5 md:p-10 md:w-8/12 mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold">
          Reset your Password
        </h2>
        <div className="mt-5 p-5 md:p-10 bg-white rounded-xl shadow-xl">
          <form onSubmit={forgotPassword}>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="btn btn-primary rounded-full mt-5"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
