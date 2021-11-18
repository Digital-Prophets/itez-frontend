import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    gender: "",
    sex: "",
    maritalStatus: "",
    nameOfSpouse: "",
    numberOfChildren: "",
    numberOfSiblings: "",
    emailAddress: "",
    phoneNumber: "",
    educationalLevel: "",
    profilePhoto: "",
    fathersFirstName: "",
    fathersLastName: "",
    fathersVillage: "",
    fathersDOB: "",
    mothersFirstName: "",
    mothersLastName: "",
    mothersDOB: "",
    mothersVillage: "",
    mothersAddress: "",
    fathersPhoneNumber: "",
    mothersPhoneNumber: "",
    fathersAddress: "",
  })
  

  const handleChange = (e: Event) => {
      setState({      
        ...state,      
        [e.target.name]: e.target.value,
    })
}
 

  return (
    <>
      <button
        className="bg-blue-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Beneficiary
      </button>
      {showModal ? (
        <>
          <div
            className="mx-auto max-w-full mt-8 justify-center items-center flex  overflow-y-auto fixed inset-0 z-50 outline-none"
          >
            <div className="relative mt-8">
              {/*content*/}
              <div className="mt-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Beneficiary Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="">
        {/* <div className="md:grid md:grid-cols- md:gap-6"> */}
        <div className="flex justify-center">
          <div className="md:col-span-1">
            <div className="px-8 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Create Beneficiary</h3>
            </div>
          </div>
          <div className="md:col-span-2 p-4">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 self-auto py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        value={state.firstName}            
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="middle-name" className="block text-sm font-medium text-gray-700">
                        Middle name
                      </label>
                      <input
                        type="text"
                        name="middleName"
                        id="middle-name"
                        value={state.middleName}            
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        value={state.lastName}            
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        name="dateOfBirth"
                        id="date_of_birth"
                        value={state.dateOfBirth}            
                        onChange={handleChange}
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={state.gender}            
                        onChange={handleChange}
                        name="gender"
                        autoComplete="gender"
                        className="mt-1 block w-96 py-2 px-3 border border-gray-700 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                        
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                      Sex
                      </label>
                      <select
                        id="sex"
                        value={state.sex}            
                        onChange={handleChange}
                        name="sex"
                        autoComplete="sex"
                        className="mt-1 block w-96 py-2 px-3 border border-gray-700 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Homosexual</option>
                        <option>Bisexual</option>
                        <option>Heterosexual</option>
                        
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="marital_status" className="block text-sm font-medium text-gray-700">
                      Marital Status
                      </label>
                      <select
                        id="marital_status"
                        value={state.maritalStatus}            
                        onChange={handleChange}
                        name="maritalStatus"
                        autoComplete="marital_status"
                        className="mt-1 block w-96 py-2 px-3 border border-gray-700 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        
                      </select>
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="name_of_spouse" className="block text-sm font-medium text-gray-700">
                        Name of spouse
                      </label>
                      <input
                        type="text"
                        name="nameOfSpouse"
                        id="nameOfSpouse"
                        value={state.nameOfSpouse}            
                        onChange={handleChange}
                        autoComplete="name_of_spouse"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                      
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="number_of_children" className="block text-sm font-medium text-gray-700">
                        NUmber of children
                      </label>
                      <input
                        type="text"
                        name="numberOfChildren"
                        id="number_of_children"
                        value={state.numberOfChildren}            
                        onChange={handleChange}
                        autoComplete="number_of_children"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                      
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="number_of_siblings" className="block text-sm font-medium text-gray-700">
                        NUmber of siblings
                      </label>
                      <input
                        type="text"
                        name="numberOfSiblings"
                        id="number_of_siblings"
                        value={state.numberOfSiblings}            
                        onChange={handleChange}
                        autoComplete="number_of_siblings"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                      
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="emailAddress"
                        id="email_address"
                        value={state.emailAddress}            
                        onChange={handleChange}
                        autoComplete="address-level1"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                                            />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phone_number"
                        value={state.phoneNumber}            
                        onChange={handleChange}
                        autoComplete="phone-number"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                                            />
                      
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="educational_level" className="block text-sm font-medium text-gray-700">
                      Educational Level
                      </label>
                      <select
                        id="educational_level"
                        value={state.educationalLevel}            
                        onChange={handleChange}
                        name="educationalLevel"
                        autoComplete="educational_level"
                        className="mt-1 block w-96 py-2 px-3 border border-gray-700 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Primary</option>
                        <option>Secondary</option>
                        <option>Tertiary</option>
                        
                      </select>
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700">Profile photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-40 text-gray-700"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input 
                            id="file-upload"
                            value={state.profilePhoto}            
                            onChange={handleChange} 
                            name="profilePhoto" 
                            type="file" 
                            className="sr-only" 
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                  {/* <h3 className="text-3xl font-semibold">
                    Parent Details
                  </h3> */}
                  
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="father-first-name" className="block text-sm font-medium text-gray-700">
                       Father's First name
                      </label>
                      <input
                        type="text"
                        name="fathersFirstName"
                        id="father-first-name"
                        value={state.fathersFirstName}            
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="father-last-name" className="block text-sm font-medium text-gray-700">
                       Father's Last name
                      </label>
                      <input
                        type="text"
                        name="fathersLastName"
                        id="father-last-name"
                        value={state.fathersLastName}            
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Father's Phone Number
                      </label>
                      <input
                        type="text"
                        name="fathersPhoneNumber"
                        id="phone-number"
                        value={state.fathersPhoneNumber}            
                        onChange={handleChange}
                        autoComplete="phone-number"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="fathers-village" className="block text-sm font-medium text-gray-700">
                        Father's Village
                      </label>
                      <input
                        type="text"
                        name="fathersVillage"
                        id="fathers-village"
                        value={state.fathersVillage}            
                        onChange={handleChange}
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="father-dob" className="block text-sm font-medium text-gray-700">
                       Father's DOB
                      </label>
                      <input
                        type="text"
                        name="fathersDOB"
                        id="father-dob"
                        value={state.fathersDOB}            
                        onChange={handleChange}
                        autoComplete="fathers-dob"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Father's Address
                      </label>
                      <input
                        type="text"
                        name="fathersAddress"
                        id="address"
                        value={state.fathersAddress}            
                        onChange={handleChange}
                        autoComplete="address"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="father-first-name" className="block text-sm font-medium text-gray-700">
                       Mother's First name
                      </label>
                      <input
                        type="text"
                        name="mothersFirstName"
                        id="mother-first-name"
                        value={state.mothersFirstName}            
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="father-last-name" className="block text-sm font-medium text-gray-700">
                       Mother's Last name
                      </label>
                      <input
                        type="text"
                        name="mothersLastName"
                        id="mother-last-name"
                        value={state.mothersLastName}            
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                       Mother's Phone Number
                      </label>
                      <input
                        type="text"
                        name="mothersPhoneNumber"
                        id="phone-number"
                        value={state.mothersPhoneNumber}            
                        onChange={handleChange}
                        autoComplete="number"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="fathers-village" className="block text-sm font-medium text-gray-700">
                        Mother's Village
                      </label>
                      <input
                        type="text"
                        name="mothersVillage"
                        id="mothers-village"
                        value={state.mothersVillage}            
                        onChange={handleChange}
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="father-dob" className="block text-sm font-medium text-gray-700">
                      Mother's DOB
                      </label>
                      <input
                        type="text"
                        name="mothersDOB"
                        value={state.mothersDOB}            
                        onChange={handleChange}
                        autoComplete="fathers-dob"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                       Mother's Address
                      </label>
                      <input
                        type="text"
                        name="mothersAddress"
                        id="address"
                        value={state.mothersAddress}            
                        onChange={handleChange}
                        autoComplete="address"
                        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-96 h-9 shadow-sm sm:text-sm border-gray-700"                      />
                    </div>
                  </div>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-gray-700 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-700 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
