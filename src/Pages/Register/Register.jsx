import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
  const { createUser,googleSignIn, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const RegisterHandle = (e) => {
    e.preventDefault();
    const from = e.target;
    const username = from.username.value;
    const email = from.email.value;
    const photourl = from.photourl.value;
    const password = from.password.value;

    createUser(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(username, photourl)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: username,
            email: email
          };

          console.log(userInfo, "user info");
          axios.post("http://localhost:5001/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              swal ( "Oops" ,  "Something went wrong!" ,  "error" )
              navigate("/dashboard");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  const LoginWithGoogle = () =>{
    googleSignIn();
}

  return (
    <div>
      <main className="relative min-h-screen w-full bg-white">
        <div className="p-6">
          <div className="absolute left-1/2 top-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="mb-3 text-2xl font-bold">Create your profile</h2>
              {/* -----register form start here -------- */}
              <form onSubmit={RegisterHandle}>
                <div className="my-4 w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-teal-400">
                  <input
                    type="text"
                    name="photourl"
                    placeholder="photo url"
                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-teal-400">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <div className="my-4 w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-teal-400">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-teal-400">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="my-4 w-full rounded-2xl border-b-4 border-b-teal-600 bg-teal-500 py-3 font-bold text-white hover:bg-teal-400 active:translate-y-[0.125rem] active:border-b-teal-400"
                >
                  Register
                </button>
              </form>
              {/* -----register form end here -------- */}
            </div>

            <div className="flex items-center space-x-4">
              <hr className="w-full border border-gray-300" />
              <div className="font-semibold text-gray-400">OR</div>
              <hr className="w-full border border-gray-300" />
            </div>

            <footer>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-teal-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >
                  FACEBOOK
                </a>
                <button onClick={LoginWithGoogle}
                  className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-teal-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >
                  GOOGLE
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                Already Have an Account?
                <Link to={"/login"} className="font-medium text-gray-500">
                  Sign
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
