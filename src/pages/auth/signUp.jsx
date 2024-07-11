import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import unDraw from "../../assets/images/coco2.png";

const SignUp = () => {
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0 bg-red-100">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white p-8 shadow-xl rounded-md">
        <img src={unDraw} alt="Sign Up Illustration" className="w-full md:w-1/2 h-auto object-contain" />
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">Sign Up</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="first-name" className="sr-only">First name</label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="First name"
                  {...register("firstName", { required: "First name is required", minLength: { value: 2, message: "First name must be at least 2 characters long" } })}
                />
                {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>)}
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">Last name</label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Last name"
                  {...register("lastName", { required: "Last name is required", minLength: { value: 2, message: "Last name must be at least 2 characters long" } })}
                />
                {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>)}
              </div>
              <div>
                <label htmlFor="other" className="sr-only">Other name</label>
                <input
                  id="other"
                  name="other"
                  type="text"
                  autoComplete="additional-name"
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Other name"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Username"
                  {...register("username", { required: "Username is required", minLength: { value: 2, message: "Username must be at least 2 characters long" } })}
                />
                {errors.username && (<p className="text-red-500 text-sm mt-1">{errors.username.message}</p>)}
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Email address"
                  {...register("email", { required: "Email is required", minLength: { value: 2, message: "Email must be at least 2 characters long" } })}
                />
                {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Password"
                  {...register("password", { required: "Password is required", minLength: { value: 2, message: "Password must be at least 2 characters long" } })}
                />
                {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="termsAgreement"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={isTermsAgreed}
                  onChange={(e) => setIsTermsAgreed(e.target.checked)}
                  required
                />
                <label htmlFor="termsAgreement" className="ml-2 block text-sm text-gray-900">
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#F50081] hover:bg-[#3F3D56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
