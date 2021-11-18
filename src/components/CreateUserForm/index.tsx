import { useForm, SubmitHandler } from 'react-hook-form';
import { headers } from "../../utils/Headers"
import fetchData from "../../utils/fetcherHelper"
import postData from "../../utils/postHelper"

type FormValues = {
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: number;
  email: string;
};

const CreateUserForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {

    const { data } = postData('users/create', formData);
    console.log(data);
    
  };

  const { data } = fetchData('roles');

  return (
    <>
      <div className="mt-8">
        <h2 className="max-w-4xl mx-auto text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add user
        </h2>
      </div>
      <section className="max-w-4xl p-6 mx-auto bg-white shadow-md dark:bg-gray-800 mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                First Name
              </label>
              <input
                {...register('firstName')}
                type="text"
                placeholder="Enter first name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none shadow"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Last Name
              </label>
              <input
                {...register('lastName')}
                placeholder="Enter last name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none shadow"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                User Role
              </label>
              <select
                {...register('role')}
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none shadow"
              >
                <option value="">Select role</option>
                {data?.map((role: any)=>(<><option value={role.name}>{role.name}</option></>))}
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Phone Number
              </label>
              <input
                {...register('phoneNumber')}
                placeholder="Enter phone number"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none shadow"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
            <div className="mt-4">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Email
              </label>
              <input
                {...register('email')}
                placeholder="Enter email address"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none shadow"
              />
            </div>
              <div className="bg-gray-50 mt-8  border-4 border-solid">
                <div className="flex items-center justify-center w-full cursor-pointer  px-4 py-2">
                    <label className="flex flex-col w-full hover:bg-gray-100 hover:border-gray-300 ">
                        <div className="flex flex-col items-center justify-center">
                      
                            <p className="text-sm tracking-wider text-gray-800 group-hover:text-gray-600">
                                <input type="file" className="opacity-8 border-none" /></p>
                        </div>
                        
                    </label>
                </div> 
              </div>
            </div>
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 hover:bg-gray-800 focus:outline-none focus:bg-gray-600 m-2"
            >
              Add User
            </button>
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 hover:bg-blue-600 focus:outline-none focus:bg-gray-600 m-2">
              Exit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateUserForm;
