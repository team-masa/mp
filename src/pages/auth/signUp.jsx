import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import unDraw from "../../assets/images/coco2.png";
import { apiSignUp, apiCheckUserNameExists } from '../../services/auth';
import { Triangle } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { debounce } from 'lodash';

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false)

  const checkUserName = async (userName) => {
    console.log("I've been called");
    setIsUsernameLoading(true);

    try {
      const res = await apiCheckUserNameExists(userName);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }

    finally {
      setIsUsernameLoading(false);
    }
  };

  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUserName(userNameWatch);
      }
    }, 1000)

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    }

  }, [userNameWatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let payLoad = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmPassword: data.password
    };

    if (data.otherNames) {
      payLoad = { ...payLoad, otherNames: data.otherNames };
    }

    try {
      const res = await apiSignUp(payLoad);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    } finally {
      setIsSubmitting(false);
    }
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
                  type="text"
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="First name"
                  {...register("firstName", { required: "First name is required", minLength: { value: 4, message: "First name must be at least 4 characters long" } })}
                />
                {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>)}
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">Last name</label>
                <input
                  id="last-name"
                  type="text"
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Last name"
                  {...register("lastName", { required: "Last name is required", minLength: { value: 4, message: "Last name must be at least 4 characters long" } })}
                />
                {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>)}
              </div>
              <div>
                <label htmlFor="other" className="sr-only">Other name</label>
                <input
                  id="otherNames"
                  type="text"
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Other names"
                  {...register("otherNames", { minLength: { value: 4, message: "Other names must be at least 4 characters long" } })}
                />
                {errors.otherNames && (<p className="text-red-500 text-sm mt-1">{errors.otherNames.message}</p>)}
              </div>
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  type="text"
                   className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Username"
                  {...register("userName", { required: "Username is required", minLength: { value: 4, message: "Username must be at least 4 characters long" } })}
                />
                {errors.userName && (<p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>)}
                <div className='flex items-center gap-x-2'>
                  {isUsernameLoading && <Triangle />}
                  {usernameAvailable && (<p className='text-green-500'>Username is available!</p>)}
                  {usernameNotAvailable && (<p className='text-red-500'>Username is already taken!</p>)}
                </div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"

                  type="email"

                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Email address"
                  {...register("email", { required: "Email is required", minLength: { value: 10, message: "Email must be at least 10 characters long" } })}
                />
                {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"

                  type="password"

                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  placeholder="Password"
                  {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password must be at least 5 characters long" } })}
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
                {isSubmitting ? <Triangle /> : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
