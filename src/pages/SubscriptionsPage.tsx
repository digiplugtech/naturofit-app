import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logPageView } from '../utils/analytics';

const SubscriptionsPage: React.FC = () => {
  useEffect(() => {
    logPageView();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fdffec] font-sans">
      
      {/* Hero Section */}
      <div className="pt-12 pb-16 px-4 md:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-heading mb-4">
          Simple & Transparent Pricing for Natural Healing
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Drug-free, personalized care with no hidden charges
        </p>
        <button className="bg-[#6bbe23] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all">
          Choose Your Plan
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-heading text-[#6bbe23] mb-2">
            Choose Your Wellness Journey
          </h2>
          <p className="text-gray-600">
            Personalized natural healing plans designed for your health goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Naturopathy Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-xl relative border border-gray-100 flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#6bbe23] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Limited-Time Offer
              </span>
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#e8f5e8] rounded-full flex items-center justify-center">
                <img src="/assets/subscriptions/frame0.svg" alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Naturopathy Care Plan</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-gray-400 line-through text-lg">₹40,000</span>
              </div>
              <div className="text-[#6bbe23] text-4xl font-bold mb-2">₹30,000</div>
              <p className="text-gray-500 text-sm">Complete wellness package</p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame1.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Personalized naturopathy treatment plan</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame2.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">1:1 consultations with certified experts</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame3.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Lifestyle & diet guidance</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame4.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Natural therapy recommendations</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame5.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Follow-ups & progress tracking</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame6.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Holistic mind-body wellness support</span>
              </div>
            </div>

            <button className="w-full bg-[#6bbe23] text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-md">
              Subscribe Now
            </button>
          </div>

          {/* Homeopathy Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-xl relative border border-gray-100 flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#f97316] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Special Launch Offer
              </span>
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#fff7ed] rounded-full flex items-center justify-center">
                <img src="/assets/subscriptions/frame7.svg" alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Homeopathy Consultation Plan</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-gray-400 line-through text-lg">₹1,500</span>
              </div>
              <div className="text-[#374151] text-4xl font-bold mb-2">₹1,000</div>
              <p className="text-gray-500 text-sm">Individual consultation</p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
               <div className="flex gap-3">
                <img src="/assets/subscriptions/frame8.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Detailed 1:1 homeopathy consultation</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame9.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Personalized medicine guidance</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame10.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Chronic condition support</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame11.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Follow-up consultations</span>
              </div>
              <div className="flex gap-3">
                <img src="/assets/subscriptions/frame12.svg" alt="" className="w-5 h-5 mt-1" />
                <span className="text-gray-600">Safe & gentle long-term care</span>
              </div>
            </div>

            <button className="w-full bg-[#6bbe23] text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-md">
              Get Started
            </button>
          </div>
          
        </div>
      </div>

      {/* Why Our Plans Are Worth It */}
      <div className="bg-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-heading mb-2">
            Why Our Plans Are Worth It
          </h2>
          <p className="text-gray-600">
            Experience the difference of authentic natural healing
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center w-40">
            <div className="w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 text-white">
                <img src="/assets/subscriptions/frame13.svg" alt="" className="w-6 h-6 brightness-0 invert" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Certified & Verified Doctors</h3>
            <p className="text-xs text-gray-500">Licensed professionals with proven expertise</p>
          </div>
          <div className="flex flex-col items-center w-40">
             <div className="w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 text-white">
                <img src="/assets/subscriptions/frame14.svg" alt="" className="w-6 h-6 brightness-0 invert" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Personalized Treatment</h3>
            <p className="text-xs text-gray-500">Tailored to your unique health needs</p>
          </div>
          <div className="flex flex-col items-center w-40">
             <div className="w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 text-white">
                <img src="/assets/subscriptions/frame15.svg" alt="" className="w-6 h-6 brightness-0 invert" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Drug-Free & Natural</h3>
            <p className="text-xs text-gray-500">Gentle healing without side effects</p>
          </div>
          <div className="flex flex-col items-center w-40">
             <div className="w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 text-white">
                <img src="/assets/subscriptions/frame16.svg" alt="" className="w-6 h-6 brightness-0 invert" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Transparent Pricing</h3>
            <p className="text-xs text-gray-500">No hidden costs or surprise charges</p>
          </div>
           <div className="flex flex-col items-center w-40">
             <div className="w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 text-white">
                <img src="/assets/subscriptions/frame17.svg" alt="" className="w-6 h-6 brightness-0 invert" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Trusted Platform</h3>
            <p className="text-xs text-gray-500">India's reliable wellness destination</p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-[#fbf9f6] py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've built more than just a platform - we've created a trusted ecosystem for natural healing
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
             <div className="w-10 h-10 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src="/assets/subscriptions/frame18.svg" alt="" className="w-5 h-5 brightness-0 invert" />
            </div>
            <h3 className="font-bold text-heading mb-3 h-12 flex items-center justify-center">Certified & Verified Doctors</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every practitioner is thoroughly verified for qualifications and experience in naturopathy & homeopathy.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
             <div className="w-10 h-10 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src="/assets/subscriptions/frame19.svg" alt="" className="w-5 h-5 brightness-0 invert" />
            </div>
            <h3 className="font-bold text-heading mb-3 h-12 flex items-center justify-center">1:1 Personalized Care</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Individual consultations tailored to your unique constitution, lifestyle, and health goals.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
             <div className="w-10 h-10 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src="/assets/subscriptions/frame20.svg" alt="" className="w-5 h-5 brightness-0 invert" />
            </div>
            <h3 className="font-bold text-heading mb-3 h-12 flex items-center justify-center">Holistic Mind-Body Approach</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Addressing root causes by treating the whole person - physical, mental, and emotional well-being.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
             <div className="w-10 h-10 bg-[#6bbe23] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src="/assets/subscriptions/frame21.svg" alt="" className="w-5 h-5 brightness-0 invert" />
            </div>
            <h3 className="font-bold text-heading mb-3 h-12 flex items-center justify-center">Technology-Driven Platform</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Modern technology meets ancient wisdom for seamless, patient-first healthcare experience.
            </p>
          </div>
        </div>
      </div>

      {/* Savings Banner */}
      <div className="bg-[#6bbe23] py-16 px-4 md:px-20 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="flex flex-col items-center p-4">
            <div className="mb-4">
                 <img src="/assets/subscriptions/frame22.svg" alt="" className="w-8 h-8 brightness-0 invert" />
            </div>
            <div className="text-3xl font-bold mb-2">Save ₹10,000</div>
            <div className="text-white/90">on Naturopathy Care Plan</div>
          </div>
          <div className="flex flex-col items-center p-4 pt-8 md:pt-4">
             <div className="mb-4">
                 <img src="/assets/subscriptions/frame23.svg" alt="" className="w-8 h-8 brightness-0 invert" />
            </div>
            <div className="text-3xl font-bold mb-2">Save ₹5,000</div>
            <div className="text-white/90">on Homeopathy Consultation</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#fdffec] py-20 px-4 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Invest in Your Health, Naturally</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Take the first step towards drug-free healing with our expert guidance
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link to="/booking" className="bg-[#6bbe23] text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-md">
            Book Your 1:1 Consultation
          </Link>
          <button className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
            Talk to an Expert
          </button>
        </div>
      </div>

    </div>
  );
};

export default SubscriptionsPage;
