import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {

const { createUser, updateUser } = useContext(AuthContext);
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const profilePhoto = e.target.profilePhoto.value;
    const password = e.target.password.value;

    console.log("Submit hitted");

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
      setErr(
        "Password must be at least 6 characters long, contain at least one capital letter, and contain at least one special character."
      );
      toast.error(err);
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res);
        updateUser(name, profilePhoto)
          .then(() => {
            toast.success("User created Successfully!");
            navigate("/");
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => console.log(err));
  };



  return (
    <div>
      <div className="relative ">
        <div className="bg-gray-600">
          <img
            className="h-[100vh] w-full mix-blend-overlay inset-0 "
            src="/public/background.jpg"
            alt=""
          />
        </div>

        <div className=" rounded-lg absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  p-4 mt-8 backdrop-blur-lg border-2 border-white dark:border-red-600 w-[80%] md:w-auto">
          <div className="px-1 md:px-10 lg:px-14 py-8">
            <h2 className=" text-white text-center text-xl my-4">
              Registration for promo!
            </h2>
            <form onSubmit={handleRegistration}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="py-2 px-4 w-full rounded-md my-6 text-sm"
                required
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="py-2 px-4 w-full rounded-md text-sm"
                required
              />
              <br />
              <input
                type="text"
                placeholder="Profile Img URL.."
                name="profilePhoto"
                className="py-2 px-4 w-full rounded-md mt-6 text-sm"
                required
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="py-2 px-4 w-full rounded-md my-6 text-sm"
                required
              />
              <br />
              <input
                type="submit"
                value="REGISTER"
                className="text-white font-semibold py-2 px-4 w-full rounded-md bg-[#E50914] mb-4"
              />
            </form>
            <a className="text-left text-sm text-white">
              Have an account?{" "}
              <Link to="/login">
                <span className="font-semibold text-blue-300">Sign In</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
