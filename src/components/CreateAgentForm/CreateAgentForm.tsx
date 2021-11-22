import { useState } from "react";

const CreateAgentForm = (props: any) => {
  return props.trigger ? (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-hideBg ">
        <div className="content bg-white w-1/2 p-4 rounded overflow-hidden shadow-lg">
          <div className="flex justify-end">
            <button
              onClick={() => props.setTrigger(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 p-4 rounded"
            >
              Close
            </button>
          </div>
          <form action="">
            <h6>User information</h6>
            <div className="row p-4">
              <div className="col flex my-6">
                <div className="formGroup flex flex-col w-2/4 mr-4">
                  <label htmlFor="" className="">
                    First Name
                  </label>
                  <input
                    className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value="john.deo"
                  />
                </div>

                <div className="formGroup flex flex-col w-2/4 ml-4">
                  <label htmlFor="" className="">
                    Last Name
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
                    Gender
                  </label>
                  <input
                    className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value="john"
                  />
                </div>
                <div className="formGroup flex flex-col w-2/4 ml-4">
                  <label htmlFor="" className="">
                    Location
                  </label>
                  <input
                    className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value="deo"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 p-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
export default CreateAgentForm;
