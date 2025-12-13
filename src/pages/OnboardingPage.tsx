import React, { useState, useRef } from 'react';
import config from '../config';
import { logEvent } from '../utils/analytics';

const OnboardingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    education: '',
    experienceYears: '',
    specialization: [] as string[],
    consultationType: 'Online',
    clinicLocation: '',
    bio: '',
  });

  const [certificate_file, setCertificateFile] = useState<File | null>(null);
  const [profile_photo, setPhotoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const certificateInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (area: string) => {
    setFormData(prev => {
      const current = prev.specialization;
      if (current.includes(area)) {
        return { ...prev, specialization: current.filter(a => a !== area) };
      } else {
        return { ...prev, specialization: [...current, area] };
      }
    });
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    console.log('Submitting doctor registration:', {
        ...formData,
        certificate_file: certificate_file ? certificate_file.name : null,
        profile_photo: profile_photo ? profile_photo.name : null
    });

    try {
      const submitData = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'specialization') {
          submitData.append(key, JSON.stringify(formData[key as keyof typeof formData]));
        } else {
          submitData.append(key, String(formData[key as keyof typeof formData]));
        }
      });

      // Append files
      if (certificate_file) {
        submitData.append('certificate_file', certificate_file);
      }
      if (profile_photo) {
        submitData.append('profile_photo', profile_photo);
      }

      const response = await fetch(`${config.apiUrl}/doctors`, {
        method: 'POST',
        body: submitData, // FormData automatically sets the correct Content-Type header with boundary
      });

      if (!response.ok) {
        throw new Error('Failed to register doctor');
      }

      setSuccess(true);
      logEvent('Onboarding', 'Form Submitted', 'Doctor Registration');
      // Reset form
      setFormData({
        name: '',
        age: '',
        gender: '',
        contactNumber: '',
        email: '',
        education: '',
        experienceYears: '',
        specialization: [],
        consultationType: 'Online',
        clinicLocation: '',
        bio: '',
      });
      setCertificateFile(null);
      setPhotoFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    } finally {
      setLoading(false);
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
          <h2 className="text-xl md:text-2xl font-bold text-heading">Doctor Onboarding</h2>
          <p className="text-gray-500 text-sm md:text-base">Join our network of certified naturopathy & homeopathy doctors.</p>
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

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm text-center">
            Registration successful! Our team will verify your details shortly.
          </div>
        )}
        
        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame3.svg" alt="" className="w-4 h-4" /> Full Name
                  </label>
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    type="text"  
                    placeholder="Enter your full name" 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame4.svg" alt="" className="w-4 h-4" /> Age
                  </label>
                  <input 
                    name="age" 
                    value={formData.age} 
                    onChange={handleInputChange} 
                    type="number" 
                    placeholder="Enter your age" 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame5.svg" alt="" className="w-4 h-4" /> Gender
                  </label>
                  <select 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-white appearance-none"
                    required
                  >
                      <option value="">Choose a gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                  </select>
                </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame9.svg" alt="" className="w-4 h-4" /> Contact Number
                  </label>
                  <input 
                    name="contactNumber" 
                    value={formData.contactNumber} 
                    onChange={handleInputChange} 
                    type="tel" 
                    placeholder="Enter your Phone Number" 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                 <div className="md:col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <img src="/assets/onboarding/frame10.svg" alt="" className="w-4 h-4" /> Email Address
                  </label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    type="email" 
                    placeholder="Enter your Email Address" 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
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
                            <select 
                                name="education" 
                                value={formData.education} 
                                onChange={handleInputChange} 
                                className="w-full bg-transparent outline-none"
                                required
                            >
                                <option value="">Qualification</option>
                                <option value="MBBS">MBBS</option>
                                <option value="BAMS">BAMS</option>
                                <option value="BHMS">BHMS</option>
                                <option value="BNYS">BNYS</option>
                                <option value="Other">Other</option>
                            </select>
                         </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                        <input 
                            name="experienceYears" 
                            value={formData.experienceYears} 
                            onChange={handleInputChange} 
                            type="number" 
                            placeholder="Years of Experience" 
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" 
                            required 
                        />
                    </div>
                </div>

                <div className="mb-4 md:mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Specialization Areas</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {['Naturopathy', 'Homeopathy', 'Yoga Therapy', 'Diet Therapy', 'Acupuncture', 'Hydrotherapy', 'Massage Therapy', 'Herbal Medicine'].map(area => (
                            <label key={area} className="flex items-center gap-2 cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={formData.specialization.includes(area)}
                                    onChange={() => handleCheckboxChange(area)}
                                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" 
                                />
                                <span className="text-sm text-gray-600">{area}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Modes of Consultation</label>
                         <select 
                            name="consultationType" 
                            value={formData.consultationType} 
                            onChange={handleInputChange} 
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary bg-white"
                         >
                             <option value="Online">Online</option>
                             {/* <option value="Offline">Offline</option>
                             <option value="Both">Both</option> */}
                         </select>
                     </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Clinic / Practice Location</label>
                        <input 
                            name="clinicLocation" 
                            value={formData.clinicLocation} 
                            onChange={handleInputChange} 
                            type="text" 
                            placeholder="Enter location" 
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" 
                            required 
                        />
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
                        {certificate_file ? (
                            <>
                                <div className="w-8 h-8 mb-3 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
                                <span className="text-sm font-medium text-gray-700 break-all">{certificate_file.name}</span>
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
                        {profile_photo ? (
                            <>
                                <img 
                                    src={URL.createObjectURL(profile_photo)} 
                                    alt="Preview" 
                                    className="w-16 h-16 mb-3 rounded-full object-cover border border-gray-200" 
                                />
                                <span className="text-sm font-medium text-gray-700 break-all">{profile_photo.name}</span>
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
                    <textarea 
                        name="bio" 
                        value={formData.bio} 
                        onChange={handleInputChange} 
                        rows={4} 
                        placeholder="Write a brief introduction about yourself..." 
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                </div>
            </div>
            
            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 md:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
               {loading ? (
                   <span>Registering...</span>
               ) : (
                   <>
                    <img src="/assets/onboarding/frame2.svg" alt="" className="w-5 h-5" />
                    Register as Naturopath
                   </>
               )}
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
