import { LockOpenIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(loginInputs);
  };
  const changeHandler = (e: any) =>
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-2 justify-center">
        <div className="mb-6">
          {/* <div className="flex justify-center">
            <Image className="object-contain" src={mainLogo} alt="Main Logo" />
          </div> */}
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
              Email
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="email"
              type="email"
              name="username"
              placeholder="Email"
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
        </div>
      </form>
    </div>
  );
}
