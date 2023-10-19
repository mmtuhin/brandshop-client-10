import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        setError(null);
        toast.success("Login Successfull!");

        navigate(location?.state ? location.state : "/");
        e.clearData();
      })
      .catch((err) => {
        setError(err);
        toast.error(error.message);
      });
  };

  const handleSocialSignIn = (media) => {
    media()
      .then(() => {
        toast.success("Login Successful!");
        navigate(location?.state ? location.state : "/");
        setError(null);
      })
      .catch((err) => {
        setError(err);
        toast.error(error.message);
      });
  };

  return (
    <div className="relative ">
      <div className="bg-gray-600">
        <img
          className="h-[90vh] w-full mix-blend-overlay inset-0 "
          src="/public/background.jpg"
          alt=""
        />
      </div>

      <div className=" rounded-lg absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  p-4 mt-8 backdrop-blur-lg border-2 border-white dark:border-red-600 w-[80%] md:w-auto">
        <div className="px-1 md:px-10 py-8">
          <h2 className=" text-white text-center text-xl my-4">
            Sign In for exciting offers!
          </h2>
          <form onSubmit={handleSignin}>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="py-2 px-4 w-full rounded-md "
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="py-2 px-4 w-full rounded-md my-6"
            />
            <br />
            <input
              type="submit"
              value="LOGIN"
              className="text-white font-semibold py-2 px-4 w-full rounded-md bg-[#E50914] mb-4"
            />
          </form>
          <a className="text-left text-sm text-white">
            New here?{" "}
            <Link to="/registration">
              <span className="font-semibold text-blue-300">Register</span>
            </Link>
          </a>
          <div className="py-2 text-sm">
            <p className="font-semibold my-2">Social Login:</p>
            <div className="flex items-center bg">
              <button
                className="hover:bg-sky-700 btn btn-sm bg-gray-800 text-white"
                onClick={() => handleSocialSignIn(googleSignIn)}
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
