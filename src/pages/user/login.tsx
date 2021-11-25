import { LockOpenIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset_register_success } from "../../actions/authActions";
import { RootState } from "../../reducers";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const loading = useSelector((state: RootState) => state.auth.authLoading);

  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(reset_register_success());
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(login(loginInputs));
    }
  };

  if (typeof window !== "undefined" && isAuthenticated && !loading)
    router.push("/dashboard");

  const changeHandler = (e: any) =>
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-2 justify-center">
        <div className="mb-6">
          <h6 className="mt-4 text-center text-3xl font-bold text-gray-900">
            Login
          </h6>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="username"
              type="username"
              name="username"
              placeholder="Username"
              onChange={changeHandler}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border   w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockOpenIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
