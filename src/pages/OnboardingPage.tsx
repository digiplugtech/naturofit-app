import React, { useState, useRef } from 'react';

const OnboardingPage: React.FC = () => {
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const certificateInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleCertificateClick = () => {
    certificateInputRef.current?.click();
  };

  const handlePhotoClick = () => {
    photoInputRef.current?.click();
  };

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertificateFile(e.target.files[0]);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  return (
    <div className="font-sans text-body bg-[#f9fafb]">
       <div className="text-center py-8 md:py-10 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-heading mb-2">Register as a Naturopathy & Homeopathy Professional</h1>
        <p className="text-gray-600 text-sm md:text-base">Book consultations with certified naturopathy doctors or register as a practitioner to join our healing community</p>
      </div>

       <div className="max-w-4xl mx-4 md:mx-auto bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 mb-10 md:mb-20 relative">
          {/* Top Icon */}
         <div className="text-center mb-8 md:mb-10">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-4">
             <img src="/assets/onboarding/frame0.svg" alt="Register" className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-heading">Book Your Consultation</h2>
          <p className="text-gray-500 text-sm md:text-base">Schedule an appointment with our certified naturopathy doctors.</p>
        </div>

        {/* Confirmation Box */}
        <div className="bg-[#ecfdf5] border border-primary/20 rounded-xl p-4 mb-6 md:mb-8 flex items-start gap-3">
             <div className="mt-1">
                 {/* Checkbox or Icon */}
                 <div className="w-5 h-5 rounded border border-primary flex items-center justify-center bg-white">
                     {/* Tick */}
                 </div>
             </div>
             <p className="text-sm text-[#064e3b] leading-relaxed">
                 I confirm that all the provided information is true and accurate. I understand that providing false information may result in the rejection of my application or termination of services.
             </p>
        </div>
        
        <form className="space-y-6 md:space-y-8">
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame3.svg" alt="" className="w-4 h-4" /> Full Name
                  </label>
                  <input type="text" placeholder="Enter your full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame4.svg" alt="" className="w-4 h-4" /> Age
                  </label>
                  <input type="text" placeholder="Enter your age" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame5.svg" alt="" className="w-4 h-4" /> Gender
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-white appearance-none">
                      <option>Choose a gender</option>
                      <option>Male</option>
                      <option>Female</option>
                  </select>
                </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame9.svg" alt="" className="w-4 h-4" /> Contact Number
                  </label>
                  <input type="tel" placeholder="Enter your Phone Number" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                 <div className="md:col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame10.svg" alt="" className="w-4 h-4" /> Email Address
                  </label>
                  <input type="email" placeholder="Enter your Email Address" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
            </div>

            {/* Education & Professional Details */}
            <div>
                <h3 className="text-lg font-bold text-heading mb-4 md:mb-6 flex items-center gap-2">
                    <img src="/assets/onboarding/frame11.svg" alt="" className="w-5 h-5" /> Education & Professional Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Education / Qualification</label>
                         <div className="border border-gray-200 rounded-lg p-3">
                            <select className="w-full bg-transparent outline-none">
                                <option>Qualification</option>
                                {/* <option>MBBS</option> */}
                                <option>BAMS</option>
                                <option>BHMS</option>
                                <option>BNYS</option>
                                {/* <option>Other</option> */}
                            </select>
                         </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                        <input type="text" placeholder="Qualification" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" /> {/* Placeholder says "Qualification" in HTML? assume typo, should be years */}
                    </div>
                </div>

                <div className="mb-4 md:mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Specialization Areas</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {['Naturopathy', 'Homeopathy', 'Yoga Therapy', 'Diet Therapy', 'Acupuncture', 'Hydrotherapy', 'Massage Therapy', 'Herbal Medicine'].map(area => (
                            <label key={area} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
                                <span className="text-sm text-gray-600">{area}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Modes of Consultation</label>
                         <select className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-white">
                             <option>Online</option>
                             {/* <option>General Consultation</option> */}
                             {/* ... */}
                         </select>
                     </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Clinic / Practice Location</label>
                        <input type="text" placeholder="Enter your full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" /> {/* Placeholder says "Enter your full name"? Typo in HTML */}
                     </div>
                 </div>
            </div>

            {/* Verification & Profile */}
             <div>
                <h3 className="text-lg font-bold text-heading mb-4 md:mb-6 flex items-center gap-2">
                    <img src="/assets/onboarding/group0.svg" alt="" className="w-5 h-5" /> Verification & Profile
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    {/* Upload Certificates */}
                    <div 
                        onClick={handleCertificateClick}
                        className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <input 
                            type="file" 
                            ref={certificateInputRef}
                            onChange={handleCertificateChange}
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                        />
                        {certificateFile ? (
                            <>
                                <div className="w-8 h-8 mb-3 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
                                <span className="text-sm font-medium text-gray-700 break-all">{certificateFile.name}</span>
                                <span className="text-xs text-gray-400 mt-1">Change file</span>
                            </>
                        ) : (
                            <>
                                <img src="/assets/onboarding/frame25.svg" alt="Upload" className="w-8 h-8 mb-3 opacity-50" />
                                <span className="text-sm font-medium text-gray-700">Click to upload or drag and drop</span>
                                <span className="text-xs text-gray-400 mt-1">PDF, JPG, PNG (Max 5MB)</span>
                            </>
                        )}
                    </div>

                    {/* Upload Photo */}
                     <div 
                        onClick={handlePhotoClick}
                        className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors"
                     >
                        <input 
                            type="file" 
                            ref={photoInputRef}
                            onChange={handlePhotoChange}
                            className="hidden"
                            accept=".jpg,.jpeg,.png"
                        />
                        {photoFile ? (
                            <>
                                <img 
                                    src={URL.createObjectURL(photoFile)} 
                                    alt="Preview" 
                                    className="w-16 h-16 mb-3 rounded-full object-cover border border-gray-200" 
                                />
                                <span className="text-sm font-medium text-gray-700 break-all">{photoFile.name}</span>
                                <span className="text-xs text-gray-400 mt-1">Change photo</span>
                            </>
                        ) : (
                            <>
                                <img src="/assets/onboarding/frame26.svg" alt="Upload" className="w-8 h-8 mb-3 opacity-50" />
                                <span className="text-sm font-medium text-gray-700">Upload your photo</span>
                                <span className="text-xs text-gray-400 mt-1">JPG, PNG (Max 2MB)</span>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Bio</label>
                    <textarea rows={4} placeholder="Write a brief introduction about yourself, your experience, and approach to naturopathy..." className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
                </div>
            </div>
            
            <button type="submit" className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 md:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
               <img src="/assets/onboarding/frame2.svg" alt="" className="w-5 h-5" />
               Register as Naturopath
            </button>

        </form>
       </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-20 text-center px-4">
            <div className="flex items-center gap-2">
            <img src="/assets/onboarding/frame27.svg" alt="Verified" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Verified Doctors</span>
            </div>
            <div className="flex items-center gap-2">
            <img src="/assets/onboarding/frame28.svg" alt="Secure" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
            <img src="/assets/onboarding/frame29.svg" alt="Free" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Free Registration</span>
            </div>
        </div>

        <section className="bg-primary py-10 md:py-16 px-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Healing Journey Today</h2>
            <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8">Join thousands who have transformed their lives through natural healing</p>
            <button className="bg-white text-primary font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full hover:bg-gray-100 transition-colors">
            Get Started Now
            </button>
        </section>
    </div>
  );
};

export default OnboardingPage;
