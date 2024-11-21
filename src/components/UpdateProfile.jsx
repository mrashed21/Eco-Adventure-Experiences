import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { handleName } = useContext(AuthContext);
  const handeleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.profile.value;
    if (!name) {
      return toast.error("Enter your name", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!image) {
      return toast.error("Input Image URL", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      handleName(name, image).then(() => {
        navigate("/profile");
      });
    }
    toast.success("Update profile successfully", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <div className=" bg-purple-100 py-5">
        <div className=" px-5 md:p-10 md:w-8/12 mx-auto">
          <h2 className="text-center text-3xl font-bold">
            {" "}
            Update your Profle
          </h2>
          <div className=" mt-5 p-10 bg-white rounded-xl shadow-xl ">
            <form onSubmit={handeleUpdate}>
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
              <div className="flex items-center justify-center mt-4">
                <button className="btn btn-primary rounded-full mt-5">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
