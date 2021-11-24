import { ChangeEvent, useState } from "react";

import axios from "axios";

const DefaultFormData = {
  first_name: "",
  last_name: "",
  birthday: new Date(2015, 3, 25),
  gender: "",
  location: "",
};

const CreateAgentForm = (prop: any) => {
  const url = "http://localhost:8000/api/agents/";

  const [formData, setFormData] = useState(DefaultFormData);

  const { first_name, last_name, birthday, gender, location } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "post",
      url: url,
      data: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        birthdate: formData.birthday,
        gender: formData.gender,
        location: formData.location,
      },
    }).then((res) => {
      console.log(res.data);
    });

    setFormData(DefaultFormData);
  };

  return prop.trigger ? (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-hideBg ">
        <div className="content bg-white w-2/3 p-4 rounded overflow-hidden shadow-lg">
          <div className="flex justify-end">
            <button
              onClick={() => prop.setTrigger(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 p-4 rounded"
            >
              Close
            </button>
          </div>

          <form onSubmit={onSubmit} action="">
            <h6>User information</h6>
            <div className="row p-4">
              <div className="col flex my-6">
                <div className="formGroup flex flex-col w-2/4 mr-4">
                  <label htmlFor="" className="">
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                    type="text"
                    id="first_name"
                    value={first_name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="formGroup flex flex-col w-2/4 ml-4">
                  <label htmlFor="" className="">
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                    type="text"
                    id="last_name"
                    value={last_name}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="col flex">
                <div className="formGroup flex flex-col w-2/4 ml-4">
                  <label htmlFor="" className="">
                    Birthday
                  </label>
                  <input
                    className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                    type="date"
                    id="birthday"
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="formGroup flex flex-col w-2/4 mr-4">
                  <label htmlFor="" className="">
                    Select Gender
                  </label>
                  <select
                    className="rounded overflow-hidden shadow-lg border w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    value={gender}
                    onChange={onChangeSelect}
                    required
                  >
                    {" "}
                    <option value="" disabled selected hidden>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Felmale</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="formGroup flex flex-col w-2/4 ml-4">
                  <label htmlFor="" className="">
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                    type="text"
                    id="location"
                    value={location}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 p-4 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
    </>
  ) : (
    ""
  );
};
export default CreateAgentForm;
