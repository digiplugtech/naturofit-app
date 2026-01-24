import React, { useEffect } from 'react';
import { logPageView } from '../utils/analytics';

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-[#fdffec] pt-16 pb-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0a1852] mb-6 font-sans">
          Our Journey Toward Natural Healing
        </h1>
        <p className="text-[#374151] text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
          Transforming India's healthcare landscape by making authentic naturopathy and homeopathy accessible to every home, connecting you with certified experts who believe in healing without harm.
        </p>
        <button className="bg-[#6bbe23] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg">
          Join Our Wellness Journey
        </button>
      </div>

      {/* Why Started Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Issues */}
        <div className="flex-1 space-y-12">
          <h2 className="text-[#0a1852] text-3xl font-bold mb-8">Why Naturo Fit Was Started</h2>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center">
                <img src="/assets/about/frame0.svg" alt="" className="w-4 h-6" />
              </div>
              <div>
                <h3 className="text-[#111827] font-semibold text-lg mb-2">Rising Lifestyle Diseases</h3>
                <p className="text-[#4b5563] leading-relaxed">Diabetes, hypertension, and stress-related disorders are affecting millions of Indians at younger ages.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center">
                <img src="/assets/about/frame1.svg" alt="" className="w-5 h-6" />
              </div>
              <div>
                <h3 className="text-[#111827] font-semibold text-lg mb-2">Over-Dependency on Medication</h3>
                <p className="text-[#4b5563] leading-relaxed">Quick fixes and symptom suppression without addressing root causes of health problems.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center">
                <img src="/assets/about/frame2.svg" alt="" className="w-4 h-6" />
              </div>
              <div>
                <h3 className="text-[#111827] font-semibold text-lg mb-2">Lack of Personalized Care</h3>
                <p className="text-[#4b5563] leading-relaxed">Generic treatments that don't consider individual constitution and lifestyle factors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Solution */}
        <div className="lg:w-[528px] bg-[#f0fdf4] rounded-2xl p-8 lg:p-10 self-stretch flex flex-col justify-between">
          <div>
            <h3 className="text-[#1f2937] text-2xl font-bold mb-6">The Natural Solution</h3>
            <p className="text-[#374151] text-lg leading-relaxed mb-4">
              We envisioned a platform where drug-free, root-cause healing becomes accessible to every Indian family, connecting them with authentic naturopathy and homeopathy experts who understand the power of natural healing.
            </p>
          </div>
          
          <div className="flex items-center gap-3 mt-8">
            <img src="/assets/about/frame3.svg" alt="" className="w-6 h-6" />
            <span className="text-[#1f2937] font-semibold text-lg">Healing Without Harm</span>
          </div>
        </div>
      </div>

      {/* The Beginning Section */}
      <div className="bg-[#f9fafb] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[#0a1852] text-3xl md:text-4xl font-bold mb-4">The Beginning of Naturo Fit</h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            Born from real experiences and deep research into India's traditional healing wisdom
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Observation",
              desc: "Our founders noticed a significant gap between patients seeking natural healing and certified naturopathy & homeopathy professionals across India.",
              icon: "frame4.svg"
            },
            {
              title: "Deep Research",
              desc: "Months of studying traditional healing methods, understanding patient needs, and connecting with authentic practitioners across the country.",
              icon: "frame5.svg"
            },
            {
              title: "The Vision",
              desc: "Building a trusted digital platform where authentic natural healing meets modern technology to serve every Indian family.",
              icon: "frame6.svg"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-[#6bbe23] rounded-full flex items-center justify-center mb-6">
                <img src={`/assets/about/${item.icon}`} alt="" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-[#111827] text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#4b5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-10">
            <div className="w-20 h-20 bg-[#6bbe23] rounded-full flex items-center justify-center mb-8 shadow-sm">
              <img src="/assets/about/frame7.svg" alt="" className="w-8 h-8" />
            </div>
            <h3 className="text-[#6bbe23] text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-[#374151] text-lg leading-relaxed">
              To provide safe, personalized, and natural healthcare solutions through certified naturopathy and homeopathy experts, making authentic healing accessible to every Indian family while preserving our traditional wellness wisdom.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#eff6ff] to-[#e0e7ff] rounded-3xl p-10">
            <div className="w-20 h-20 bg-[#6bbe23] rounded-full flex items-center justify-center mb-8 shadow-sm">
              <img src="/assets/about/frame8.svg" alt="" className="w-9 h-8" />
            </div>
            <h3 className="text-[#6bbe23] text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-[#374151] text-lg leading-relaxed">
              To become India's most trusted naturopathy & homeopathy platform, where millions of families choose natural healing as their first preference, creating a healthier nation through drug-free wellness solutions.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-[#f9fafb] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#0a1852] text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-[#374151] text-lg">We've built more than just a platform - we've created a trusted ecosystem for natural healing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified & Verified Doctors",
                desc: "Every practitioner is thoroughly verified for qualifications and experience in naturopathy & homeopathy.",
                icon: "frame9.svg",
                bg: "bg-[#dcfce7]"
              },
              {
                title: "1:1 Personalized Care",
                desc: "Individual consultations tailored to your unique constitution, lifestyle, and health goals.",
                icon: "frame10.svg",
                bg: "bg-[#dbeafe]"
              },
              {
                title: "Holistic Mind-Body Approach",
                desc: "Addressing root causes by treating the whole person - physical, mental, and emotional well-being.",
                icon: "frame11.svg",
                bg: "bg-[#f3e8ff]"
              },
              {
                title: "Technology-Driven Platform",
                desc: "Modern technology meets ancient wisdom for seamless, patient-first healthcare experience.",
                icon: "frame12.svg",
                bg: "bg-[#ffedd5]"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <img src={`/assets/about/${item.icon}`} alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-[#111827] font-bold text-xl text-center mb-4">{item.title}</h3>
                <p className="text-[#4b5563] text-center text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust & Quality */}
      <div className="bg-white py-20 px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#0a1852] text-3xl md:text-4xl font-bold mb-4">Our Commitment to Trust & Quality</h2>
            <p className="text-[#374151] text-lg">Building India's most trusted natural healthcare platform through unwavering standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Doctor Verification",
                desc: "Rigorous background checks, qualification verification, and ongoing performance monitoring ensure you connect with only the best practitioners.",
                icon: "group0.svg",
                bg: "bg-[#dcfce7]"
              },
              {
                title: "Ethical Practices",
                desc: "We follow strict ethical guidelines in natural healing, ensuring treatments are safe, evidence-based, and aligned with traditional wisdom.",
                icon: "frame14.svg",
                bg: "bg-[#dbeafe]"
              },
              {
                title: "Complete Transparency",
                desc: "Clear communication about treatments, expected outcomes, and practitioner credentials. Your safety and informed consent are our priorities.",
                icon: "frame15.svg",
                bg: "bg-[#f3e8ff]"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 ${item.bg} rounded-full flex items-center justify-center mb-8`}>
                  <img src={`/assets/about/${item.icon}`} alt="" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-[#111827] font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-[#4b5563] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
