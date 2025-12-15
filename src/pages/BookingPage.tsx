import React, { useState } from 'react';
import config from '../config';
import { logEvent } from '../utils/analytics';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    symptoms: '', // Renamed from healthConcern
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    console.log('Submitting form data:', formData);

    try {
      const response = await fetch(`${config.apiUrl}/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      setSuccess(true);
      logEvent('Booking', 'Form Submitted', 'Customer Booking');
      setFormData({
        name: '',
        age: '',
        gender: '',
        contactNumber: '',
        email: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: '',
        symptoms: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-body bg-[#f9fafb]">
      <div className="text-center py-8 md:py-10 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-heading mb-2">Natural Healing Platform</h1>
        <p className="text-gray-600 text-sm md:text-base">Book consultations with certified naturopathy doctors or register as a practitioner to join our healing community</p>
      </div>

      <div className="max-w-4xl mx-4 md:mx-auto bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 mb-10 md:mb-20">
        <div className="text-center mb-8 md:mb-10">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-4">
             <img src="/assets/booking/frame0.svg" alt="Book" className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-heading">Book Your Consultation</h2>
          <p className="text-gray-500 text-sm md:text-base">Schedule an appointment with our certified naturopathy doctors</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm text-center">
            Booking successful! We will contact you shortly.
          </div>
        )}

        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <img src="/assets/booking/frame1.svg" alt="" className="w-4 h-4" /> Full Name
              </label>
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                required 
              />
            </div>

            {/* Age */}
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame2.svg" alt="" className="w-4 h-4" /> Age
              </label>
              <input 
                name="age" 
                value={formData.age} 
                onChange={handleInputChange} 
                type="number" 
                placeholder="Enter your age" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                required 
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame3.svg" alt="" className="w-4 h-4" /> Gender
              </label>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleInputChange} 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white appearance-none"
                required
              >
                <option value="">Choose a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame7.svg" alt="" className="w-4 h-4" /> Contact Number
              </label>
               <input 
                name="contactNumber" 
                value={formData.contactNumber} 
                onChange={handleInputChange} 
                type="tel" 
                placeholder="Enter your Phone Number" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                required 
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame8.svg" alt="" className="w-4 h-4" /> Email Address
              </label>
               <input 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                type="email" 
                placeholder="Enter your Email Address" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                required 
              />
            </div>

            {/* Select Doctor (Commented out in original, kept commented) */}
            {/* <div>
               ...
            </div> */}

             {/* Preferred Date */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame15.svg" alt="" className="w-4 h-4" /> Preferred Date
              </label>
              <div className="relative">
                <input 
                  name="preferredDate" 
                  value={formData.preferredDate} 
                  onChange={handleInputChange} 
                  type="date" 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                  required 
                />
              </div>
            </div>

             {/* Preferred Time */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame17.svg" alt="" className="w-4 h-4" /> Preferred Time
              </label>
              <input 
                name="preferredTime" 
                value={formData.preferredTime} 
                onChange={handleInputChange} 
                type="time" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                required 
              />
            </div>

             {/* Consultation Type */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame19.svg" alt="" className="w-4 h-4" /> Consultation Type
              </label>
              <select 
                name="consultationType" 
                value={formData.consultationType} 
                onChange={handleInputChange} 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white appearance-none"
                required
              >
                <option value="">Consultant Type</option>
                <option value="ONLINE">Online Consultation</option>
                <option value="GENERAL">General Consultation</option>
                <option value="SPECIALIST">Specialist Consultation</option>
              </select>
            </div>

             {/* Payment Method (Commented out in original) */}
             {/* ... */}
          </div>

          {/* Health Concern */}
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <img src="/assets/booking/frame30.svg" alt="" className="w-4 h-4" /> Health Concern / Symptoms
              </label>
            <textarea 
              name="symptoms" // Renamed from healthConcern
              value={formData.symptoms} // Renamed from healthConcern
              onChange={handleInputChange} 
              placeholder="Describe your health concerns or symptoms" 
              rows={4} 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <span className="text-primary font-medium cursor-pointer">terms and privacy policy</span>
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 md:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span>Booking...</span>
            ) : (
              <>
                <img src="/assets/booking/frame31.svg" alt="" className="w-5 h-5" />
                Book Appointment
              </>
            )}
          </button>
        </form>
      </div>

       {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-20 text-center px-4">
        <div className="flex items-center gap-2">
          <img src="/assets/booking/frame32.svg" alt="Verified" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-gray-700 font-medium text-sm md:text-base">Verified Doctors</span>
        </div>
        <div className="flex items-center gap-2">
           <img src="/assets/booking/frame33.svg" alt="Secure" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-gray-700 font-medium text-sm md:text-base">Secure Platform</span>
        </div>
        <div className="flex items-center gap-2">
           <img src="/assets/booking/frame34.svg" alt="Free" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-gray-700 font-medium text-sm md:text-base">Free Registration</span>
        </div>
      </div>

       {/* CTA Section */}
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

export default BookingPage;
