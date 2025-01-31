import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="bg-purple-100 py-10">
        <div className="mx-5 md:w-1/2 md:mx-auto bg-white py-8 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-medium py-3">
            {" "}
            {user?.displayName
              ? `Welcome  ${user?.displayName}`
              : "Welcome to Profile"}{" "}
          </h2>
          <div className="w-40 h-40 rounded-full ">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full rounded-full"
              />
            ) : (
              <span className="text-9xl">
                {" "}
                <FaRegUserCircle />
              </span>
            )}
          </div>
          <h2 className="text-4xl font-bold my-3">
            {user?.displayName && user?.displayName }
          </h2>
          <p className="text-xl font-medium">
            Email:
            <span className="font-normal"> {user?.email}</span>
          </p>

          <button className="btn btn-primary rounded-full mt-5">
            <Link to={"/update/profile"}>Update Profile</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
