import React from "react";
import Navpr from "./Navpr";
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
      console.log(data); // You can handle form submission here
    }

  return (
    <div>
      <Navpr />

      <div className="flex container bg-slate-200 justify-center items-center m-auto">
        <div className="  bg-[#1a1a1aed] w-[30%] p-[3%] px-[2%] m-[10%] rounded-xl">
          <div className=" w-full ">
            <div>
              <h2 className="mt-6  text-3xl font-extrabold text-white">
                Login
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md flex flex-col gap-3 shadow-sm -space-y-px">
                <div>
                  
                
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", { required: true })}
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-50 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800  ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      Email is required
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", { required: true })}
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-50 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800  ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      Password is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3H4V4zm2 10v2h8v-2H6zm-2 3v-7h8v7H4zm10 0h2v-7h-2v7zM9 0a1 1 0 0 1 1 1v1H8V1a1 1 0 0 1 1-1zm4 5h2v2h-2V5zM7 5h2v2H7V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
