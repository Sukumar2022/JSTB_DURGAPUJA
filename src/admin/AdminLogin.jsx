import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function AdminLogin({ onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Backend Authentication API Call
  const onSubmit = async (data) => {
    setServerError('');

    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', {
        username: data.username,
        password: data.password,
      });

      // Response format: ApiResponse { success, message, data: AuthResponseDto }
      const authData = response.data.data;

      if (authData && authData.token) {
        // Save JWT token and user info to LocalStorage
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', JSON.stringify(authData));

        if (onLoginSuccess) {
          onLoginSuccess(authData.token);
        }
      }
    } catch (err) {
      // Extract custom error message from backend ApiResponse or display fallback
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Invalid username or password. Please try again.';
      setServerError(errorMsg);
    }
  };

  return (
    <section 
      className="w-full relative bg-cover bg-center bg-no-repeat text-[#fbeee0] py-16 px-4 sm:px-8 lg:px-16 font-sans border-t-2 border-b-2 border-[#e5a93c]/30 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/bg3.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full relative z-10 bg-[#fbf6ee] text-[#4a0303] rounded-2xl p-6 sm:p-8 border-2 border-[#e5a93c]/60 shadow-2xl space-y-6"
      >
        {/* HEADER & EMBLEM */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full bg-[#580a0a] text-[#e5a93c] flex items-center justify-center border-2 border-[#e5a93c] shadow-md">
              <i className="ri-shield-user-line text-2xl"></i>
            </div>
          </div>
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-[#580a0a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Admin Portal
          </h2>
          <span className="inline-block bg-[#580a0a] text-[#e5a93c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#e5a93c]/40 font-bengali-sans">
            কমিটি অ্যাডমিন প্যানেল
          </span>
        </div>

        {/* SERVER ERROR DISPLAY */}
        {serverError && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#ffebeb] border border-[#d9534f] text-[#d9534f] text-xs font-semibold p-3 rounded-xl flex items-center space-x-2"
          >
            <i className="ri-error-warning-line text-lg shrink-0"></i>
            <span>{serverError}</span>
          </motion.div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Username */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#580a0a]">
              Admin Username
            </label>
            <div className="relative">
              <input 
                type="text"
                placeholder="Enter username" 
                className={`w-full bg-[#fffdfa] border ${
                  errors.username ? 'border-[#d9534f]' : 'border-[#e5a93c]/60'
                } rounded-xl pl-10 pr-4 py-3 text-xs text-[#4a0303] focus:outline-none focus:border-[#580a0a]`}
                {...register('username', { required: 'Username is required' })}
              />
              <i className="ri-user-line absolute left-3 top-3.5 text-[#8a5d24] text-sm"></i>
            </div>
            {errors.username && (
              <p className="text-[11px] text-[#d9534f] font-medium pl-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#580a0a]">
              Security Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Enter password" 
                className={`w-full bg-[#fffdfa] border ${
                  errors.password ? 'border-[#d9534f]' : 'border-[#e5a93c]/60'
                } rounded-xl pl-10 pr-10 py-3 text-xs text-[#4a0303] focus:outline-none focus:border-[#580a0a]`}
                {...register('password', { required: 'Password is required' })}
              />
              <i className="ri-lock-line absolute left-3 top-3.5 text-[#8a5d24] text-sm"></i>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-[#8a5d24] hover:text-[#580a0a] text-sm"
              >
                <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] text-[#d9534f] font-medium pl-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#580a0a] hover:bg-[#720e0e] text-[#e5a93c] font-bold text-xs py-3.5 rounded-xl transition-colors shadow-lg flex items-center justify-center space-x-2 border border-[#e5a93c]/40 mt-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <i className="ri-loader-4-line animate-spin text-sm"></i>
                <span>Verifying Credentials...</span>
              </span>
            ) : (
              <>
                <i className="ri-login-box-line text-sm"></i>
                <span>Login to Dashboard</span>
              </>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-[#e5a93c]/30 text-center text-xs text-[#5c3e38]">
          <p>Authorized access only for Puja Committee Members.</p>
        </div>
      </motion.div>
    </section>
  );
}