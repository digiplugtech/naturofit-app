import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logPageView } from '../utils/analytics';

const SignupPage: React.FC = () => {
  const [userType, setUserType] = useState<'patient' | 'doctor'>('patient');
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  useEffect(() => {
    logPageView();
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup form submitted:', { ...formData, userType });
    // Add API call logic here
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center pb-20 font-sans">
      {/* Header */}
      <div className="w-full bg-white border-b border-gray-100 shadow-sm h-[65px] relative flex justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-[1280px] flex justify-between items-center h-full">
            <Link to="/">
                 <img src="/assets/signup/image-450.png" alt="NaturoFit" className="h-[38px] object-contain ml-4 md:ml-8" />
            </Link>
          <div className="flex items-center gap-2 mr-4 md:mr-8">
            <span className="text-gray-600 font-normal">Already have an account?</span>
            <Link to="/login" className="text-primary font-medium hover:underline">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[448px] flex flex-col items-center mt-12 px-4">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-[#e8f5e8] rounded-full flex items-center justify-center mb-4">
             <div className="w-[30px] h-[32px] flex items-center justify-center">
                <img src="/assets/signup/frame0.svg" alt="" className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Create Your Account</h1>
          <p className="text-gray-600 text-sm">Join Naturo Fit for better health and wellness</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg w-full p-8">
            
          {/* User Type Toggle */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium text-sm mb-3">I am a:</label>
            <div className="bg-[#f3f4f6] rounded-xl p-1 flex h-[52px]">
              <button
                type="button"
                onClick={() => setUserType('patient')}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg transition-all ${
                  userType === 'patient' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                 <div className="w-[12px] h-[17px] flex items-center justify-center">
                    <img src="/assets/signup/frame1.svg" alt="" className={`w-full h-full ${userType === 'patient' ? 'brightness-0 invert' : ''}`} />
                </div>
                <span className="font-medium text-sm">Patient</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType('doctor')}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg transition-all ${
                  userType === 'doctor' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="w-[12px] h-[17px] flex items-center justify-center">
                    <img src="/assets/signup/frame2.svg" alt="" className={`w-full h-full ${userType === 'doctor' ? 'brightness-0 invert' : ''}`} />
                </div>
                <span className="font-medium text-sm">Doctor</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-[#adaebc]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm mb-1">Mobile Number</label>
              <p className="text-xs text-gray-500 mb-2">We'll send an OTP for verification</p>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter your Mobile Num"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-[#adaebc]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-[#adaebc]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm mb-1">Create Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-[#adaebc]"
              />
            </div>

             <div>
              <label className="block text-gray-700 font-medium text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-[#adaebc]"
              />
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-600">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </div>
            
            <div className="pt-2">
                <p className="text-center text-xs text-gray-500 mb-4">Quick & secure signup</p>
                <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <img src="/assets/signup/frame3.svg" alt="" className="w-full h-full brightness-0 invert" />
                </div>
                Create Account
                </button>
            </div>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-xl shadow-sm px-4 py-4 mt-8 w-full flex flex-row justify-between items-center gap-2 text-sm text-gray-600">
           <div className="flex items-center gap-2">
             <div className="w-[14px] h-[14px] flex items-center justify-center">
                <img src="/assets/signup/frame4.svg" alt="" className="w-full h-full" />
             </div>
             <span>Secure & Safe</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-[10px] h-[14px] flex items-center justify-center">
                <img src="/assets/signup/frame5.svg" alt="" className="w-full h-full" />
             </div>
             <span>OTP Verified</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-[12px] h-[14px] flex items-center justify-center">
                <img src="/assets/signup/frame6.svg" alt="" className="w-full h-full" />
             </div>
             <span>Data Protected</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
