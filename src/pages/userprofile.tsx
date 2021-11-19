import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";

const UserProfile = () => {
  return (
    <>
      <div className=" ">
        {" "}
        <div className="mt-20 flex justify-center">
          <div className="bg-white w-2/4 rounded overflow-hidden shadow-lg h-auto mr-8">
            <div className="flex items-stretch justify-between p-4">
              <h3>My Account</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 p-4 rounded">
                settings
              </button>
            </div>

            <div className="body p-4">
              <form action="">
                <h6>User information</h6>
                <div className="row p-4">
                  <div className="col flex my-6">
                    <div className="formGroup flex flex-col w-2/4 mr-4">
                      <label htmlFor="" className="">
                        Username
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="john.deo"
                      />
                    </div>

                    <div className="formGroup flex flex-col w-2/4 ml-4">
                      <label htmlFor="" className="">
                        Email Address
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        value="john.deo@mail.com"
                      />
                    </div>
                  </div>

                  <div className="col flex">
                    <div className="formGroup flex flex-col w-2/4 mr-4">
                      <label htmlFor="" className="">
                        First Name
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="john"
                      />
                    </div>
                    <div className="formGroup flex flex-col w-2/4 ml-4">
                      <label htmlFor="" className="">
                        Last Name
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="deo"
                      />
                    </div>
                  </div>
                </div>

                <h6>Contact information</h6>
                <div className="row p-4">
                  <div className="col flex my-6">
                    <div className="formGroup flex flex-col w-4/6 mr-4">
                      <label htmlFor="" className="">
                        Address
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="woodlands plot number 323123"
                      />
                    </div>
                  </div>

                  <div className="col flex">
                    <div className="formGroup flex flex-col w-2/4 mr-4">
                      <label htmlFor="" className="">
                        Province
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="lusaka"
                      />
                    </div>
                    <div className="formGroup flex flex-col w-2/4 mx-4">
                      <label htmlFor="" className="">
                        City
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="lusaka"
                      />
                    </div>
                    <hr className="p-16S" />
                    <div className="formGroup flex flex-col w-2/4 ml-4">
                      <label htmlFor="" className="">
                        Postal code
                      </label>
                      <input
                        className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value="10101"
                      />
                    </div>
                  </div>
                </div>

                <h6>More</h6>
                <div className="row p-4">
                  <div className="col flex">
                    <div className="formGroup flex flex-col w-4/6 mr-4">
                      <label htmlFor="" className="">
                        About Me
                      </label>
                      <textarea
                        className="rounded overflow-hidden shadow-lg border  w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value="this is john deo,  i'm being used as a placeholder text"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex justify-items-center flex-col w-1/4 ml-8">
            <div className="bg-white  w-full rounded overflow-hidden shadow-lg h-96 ">
              <div className="cont p-8">
                <div className="flex  justify-between ">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  text-xs p-2 rounded w-18">
                    connect
                  </button>
                  <button className="bg-primary hover:bg-blue-700 text-white text-xs p-2  rounded w-18">
                    message
                  </button>
                </div>
                <IconContext.Provider value={{ size: "90", color: "#c0c0c0" }}>
                  <div className=" z-10 bg-white rounded-full p-2 absolute top-ten left-sv">
                    <BsPersonCircle />
                  </div>
                </IconContext.Provider>

                <div className="body">
                  <div className="flex justify-around p-8">
                    <div className="text-center">
                      <p>40</p>
                      <p className="font-extralight">Stats</p>
                    </div>
                    <div className="text-center">
                      <p>20</p>
                      <p className="font-extralight">Photos</p>
                    </div>
                    <div className="flex flex-col text-center justify-items-center">
                      {" "}
                      <p>50</p>
                      <p className="font-extralight">Stats 2</p>
                    </div>
                  </div>

                  <div className="name">
                    <h2 className="text-center">John Deo</h2>
                  </div>
                </div>

                <p className="text-center p-4">
                  Thank you for visiting the profile page, bye take care
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mr-8 rounded w-full">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
