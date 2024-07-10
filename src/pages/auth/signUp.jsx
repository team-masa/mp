import React, { useState } from 'react';
import poOne from "../../assets/images/po.avif";

const SignUp = () => {
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  return (
    <div className=" ">
      

      <div className="flex items-center justify-center w-full h-full absolute inset-0 bg-gradient-to-r from-[#4052FF] via-[#FF40BF] to-[#FF4040]">
        <div className="max-w-md w-full bg-white bg-opacity-50 p-8  shadow-xl rounded-md">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Sign Up
            </h2>
          </div>
          <form className="mt-8 space-y-6 rounded-full" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded shadow-sm -space-y-px">
              <div className="pb-4">
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 placeholder:font-bold text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="First name"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="surname" className="sr-only">
                  Surname
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 placeholder:font-bold text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="Surname"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="othername" className="sr-only">
                  Other name
                </label>
                <input
                  id="othername"
                  name="othername"
                  type="text"
                  autoComplete="additional-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 placeholder:font-bold text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="Other name"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 placeholder:font-bold text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="Username"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 placeholder:font-bold text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 placeholder:font-bold text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="mt-1 flex items-center">
                <input
                  type="checkbox"
                  id="termsAgreement"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={isTermsAgreed}
                  onChange={(e) => setIsTermsAgreed(e.target.checked)}
                  required
                />
                <label htmlFor="termsAgreement" className="ml-2 block text-sm text-white">
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ce5e74] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
