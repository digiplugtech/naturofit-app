import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logPageView } from '../utils/analytics';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'patient' | 'doctor'>('patient');

  useEffect(() => {
    logPageView();
  }, []);

  return (
    <div className="min-h-screen w-full flex relative bg-[#fbf9f6] font-sans">
      {/* Left Section - Green Background */}
      <div className="hidden lg:block w-1/2 relative bg-primary overflow-hidden">
        {/* Background Circles/Decorations based on CSS div3/div4/div5/div6 */}
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-full opacity-20"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-20">
          <img src="/assets/login/image-440.png" alt="NaturoFit" className="w-64 mb-12" />
          
          <div className="space-y-8 text-white">
            <div className="flex items-center gap-4">
              <img src="/assets/login/frame0.svg" alt="" className="w-6 h-6" />
              <span className="text-lg">Secure & Trusted Healthcare</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/login/frame1.svg" alt="" className="w-6 h-6" />
              <span className="text-lg">Expert Doctors & Specialists</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/login/frame2.svg" alt="" className="w-6 h-6" />
              <span className="text-lg">Personalized Wellness Plans</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 sm:p-10 relative">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-heading mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* User Type Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setUserType('patient')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                userType === 'patient' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <img src="/assets/login/frame8.svg" alt="" className={`w-3 h-3 ${userType === 'patient' ? 'brightness-0 invert' : ''}`} />
              Patient
            </button>
            <button
              onClick={() => setUserType('doctor')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                userType === 'doctor' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <img src="/assets/login/frame9.svg" alt="" className={`w-3 h-3 ${userType === 'doctor' ? 'brightness-0 invert' : ''}`} />
              Doctor
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <img src="/assets/login/frame3.svg" alt="" className="w-3 h-3" />
                Email or Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter your full name" // Placeholder text from design says "Enter your full name" for email field? Keeping as per design.
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <img src="/assets/login/frame4.svg" alt="" className="w-3 h-3" />
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-primary font-medium hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
              <img src="/assets/login/frame6.svg" alt="" className="w-4 h-4 brightness-0 invert" />
              Sign In
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <button type="button" className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2">
              <img src="/assets/login/frame5.svg" alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Don't have an account?</p>
            <Link to="/onboarding" className="text-primary font-bold hover:underline">Create New Account</Link>
          </div>

          <div className="mt-6 bg-[#e8f5e8] rounded-xl p-3 flex items-center justify-center gap-2">
            <img src="/assets/login/group0.svg" alt="Secure" className="w-4 h-4" />
            <span className="text-sm text-gray-600">Your data is safe & secure with us</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
