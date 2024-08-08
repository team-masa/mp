// src/pages/auth/signIn.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Pink from '../../assets/images/signin.png';
import { useNavigate } from "react-router-dom";
import { apiLogin } from '../../services/auth';
import { InfinitySpin, } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  const [showPassword, setShowPassword] = useState(false);


 const addToLocalStorage = (accesssToken, user) => {
  localStorage.setItem("accessToken", accesssToken);
  localStorage.setItem("firstname", user.firstName);
  localStorage.setItem("lastname", user.lastName);
  localStorage.setItem("userName", user.userName);
}

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiLogin({

        email: data.email,
        password: data.password
      });

      addToLocalStorage(res.data.accessToken, res.data.user)

      toast.success(res.data.message)
      navigate("/dashboard")

      

    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
    finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center relative">
        <img
          src={Pink}
          alt="Background"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#3F3D56]">
        <div className="w-full max-w-md p-8 space-y-8">
          <h2 className="text-5xl font-bold text-[#C69749] dark:text-[#C69749]">Welcome</h2>
          <p className="text-base text-[#C69749] dark:text-[#C69749]">Log in to your account to continue</p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="awesome@user.com"
                {...register("email", { required: "Email is required" })}
                className={`w-full px-4 py-2 pl-10 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#F50081] focus:border-[#F50081]`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className={`w-full px-4 py-2 pl-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#F50081] focus:border-[#F50081]`}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-[#C69749] hover:underline">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#C69749] text-white rounded-md hover:text-black hover:bg-[#B2B1BB]/90 transition-colors duration-300 flex justify-center items-center"

            >
              {isSubmitting ? <InfinitySpin /> : "Login"}


            </button>
            <p className="text-sm text-center text-white/60 dark:text-gray-600">
              Don’t have an account? <a href="#" className="text-[#C69749] hover:underline" onClick={() => navigate('/signup')}>Sign up!</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-white/60 dark:text-gray-600 hover:text-[#]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white/60 dark:text-gray-600 hover:text-[#]">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/60 dark:text-gray-600 hover:text-[#]">
                <FaLinkedinIn />
              </a>
            </div>
          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;