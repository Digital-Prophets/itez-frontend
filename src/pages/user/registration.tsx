import { LockClosedIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authActions";
/* import Spinner from "../../components/Spinner";
import { RootState } from "../../reducers";useSelectoruseContext
 */
import mainLogo from "../../assets/undp-logo.png";

export default function Registration() {
  //const loading = useSelector((state: RootState) => state.auth.authLoading);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    userRole: 0,
  });

  const changeHandler = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const changeRole = (e: any) =>
    setInputs({ ...inputs, userRole: +e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(register(inputs));
      console.log("Registration" + JSON.stringify(inputs));
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-2 justify-center">
        <div className="mb-6">
          <div className="flex justify-center">
            <Image className="object-contain" src={mainLogo} alt="Main Logo" />
          </div>

          <h6 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Register Account
          </h6>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div className="mt-5 mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name*
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="First Name"
            />
          </div>
          <div className="mt-5 mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name*
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="lastname"
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="email"
              type="text"
              name="email"
              onChange={changeHandler}
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              className="shadow appearance-none border   w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="password"
              type="password"
              name="password"
              onChange={changeHandler}
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <div className="grid gap-4 grid-cols-2">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                User Role*
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                id="role"
                type="text"
                name="userRole"
                onChange={changeRole}
                placeholder="User Role"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                onChange={changeHandler}
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="group relative w-full flex mt-4 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Create Account
          </button>
          <p className="mt-2">
            Already have an account? <Link href="/account/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
