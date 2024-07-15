// src/pages/auth/signIn.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Pink from '../../assets/images/signin.png';
import { useNavigate } from "react-router-dom";
import { apiLogin } from '../../services/auth';

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  console.log(isSubmitting);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();  
const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    console.log(isSubmitting)
    // Backend call here
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password
      });
      console.log("Response: ", res.data);
      navigate("/dashboard")
      setIsSubmitting(false)
      
    } catch (error) {
      console.log(error);
    }

    finally{
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
          <h2 className="text-5xl font-bold text-white/60 dark:text-gray-600">Welcome</h2>
          <p className="text-base text-white/60 dark:text-gray-600">Log in to your account to continue</p>
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
              <a href="#" className="text-sm text-[#F50081] hover:underline">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#F50081] text-white rounded-md hover:bg-[#8d0f4e]/90 transition-colors duration-300" onClick={()=> navigate('/dashboard')}
              
            >
              {isSubmitting ? "Loading..." : "Login"}
              
              
            </button>
            <p className="text-sm text-center text-white/60 dark:text-gray-600">
              Don’t have an account? <a href="#" className="text-[#F50081] hover:underline" onClick={()=> navigate('/signup')}>Sign up!</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-white/60 dark:text-gray-600 hover:text-[#F50081]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white/60 dark:text-gray-600 hover:text-[#F50081]">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/60 dark:text-gray-600 hover:text-[#F50081]">
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
