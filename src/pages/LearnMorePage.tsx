import React from 'react';
import { Link } from 'react-router-dom';

const LearnMorePage: React.FC = () => {
  return (
    <div className="font-sans text-[#1f2937] bg-white">
      {/* Hero Section */}
      <section className="bg-[#fdffec] px-4 md:px-20 py-16 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-[#0a1852] leading-tight max-w-4xl">
            Learn More About Naturo Fit | <span className="text-[#6bbe23]">Naturopathy & Homeopathy in India</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#1f2937] max-w-4xl leading-relaxed">
            Discover the power of drug-free, natural, and personalized healing through naturopathy and homeopathy. We help you achieve lasting wellness by treating the root cause, not just symptoms.
          </p>
          
          <p className="text-base md:text-lg text-[#1f2937] max-w-3xl leading-relaxed">
            Join thousands of Indians who have transformed their health naturally with our certified experts and holistic approach to mind-body wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              to="/booking" 
              className="bg-[#6bbe23] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all text-center w-full sm:w-auto"
            >
              Book Your 1:1 Session
            </Link>
            <Link 
              to="/onboarding" 
              className="border-2 border-[#6bbe23] text-[#6bbe23] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6bbe23] hover:text-white transition-all text-center w-full sm:w-auto"
            >
              Register With Us
            </Link>
          </div>
        </div>
      </section>

      {/* What Is Naturopathy */}
      <section className="bg-white px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div className="w-[72px] h-[72px] bg-[#6bbe23] rounded-full flex items-center justify-center">
              <img src="/assets/learn-more/frame0.svg" alt="Icon" className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#6bbe23]">What Is Naturopathy?</h2>
            
            <div className="space-y-6 text-lg text-[#4b5563] leading-relaxed">
              <p>
                Naturopathy is a natural system of healing that focuses on treating the root cause of illness rather than just managing symptoms. It uses the body's inherent ability to heal itself through natural therapies.
              </p>
              <p>
                Our includes lifestyle <span className="font-bold">naturopathy treatment in India</span> correction, yoga therapy, nutrition counseling, and natural remedies that work in harmony with your body.
              </p>
              <p>
                Experience that addresses physical, mental, <span className="font-bold">holistic healing</span> and emotional well-being for long-lasting health transformation.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
              <img src="/assets/learn-more/img0.png" alt="Naturopathy" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Homeopathy */}
      <section className="bg-[#f9fafb] px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div className="w-[72px] h-[72px] bg-[#6bbe23] rounded-full flex items-center justify-center">
              <img src="/assets/learn-more/frame1.svg" alt="Icon" className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#6bbe23]">What Is Homeopathy?</h2>
            
            <div className="space-y-6 text-lg text-[#374151] leading-relaxed">
              <p>
                Homeopathy is a gentle, safe, and natural form of medicine that treats each person as unique. It uses highly diluted natural substances to stimulate your body's own healing response.
              </p>
              <p>
                Our provide personalized <span className="font-bold text-[#374151]">homeopathy doctors online</span> treatment plans based on your individual symptoms, constitution, and health history.
              </p>
              <p>
                Choose with minimal side effects, safe for <span className="font-bold text-[#374151]">natural medicine</span> long-term use, and suitable for all ages from infants to elderly.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
              <img src="/assets/learn-more/img1.png" alt="Homeopathy" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions We Treat */}
      <section className="bg-[#f9fafb] px-4 md:px-20 py-16 md:pb-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1852] mb-6">Health Conditions We Treat</h2>
          <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
            Our natural healing approach effectively addresses a wide range of chronic and lifestyle-related health conditions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left">
              <div className="w-16 h-16 bg-[#6bbe23] rounded-full flex items-center justify-center mb-6">
                <img src={item.icon} alt={item.title} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-3">{item.title}</h3>
              <p className="text-[#4b5563] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Natural Healing Process */}
      <section className="bg-[#f9fafb] px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1852] mb-6">Our Natural Healing Process</h2>
            <p className="text-xl text-[#1f2937] max-w-3xl mx-auto">
              A simple, personalized journey to lasting wellness with expert guidance every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#6bbe23] text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg z-10">
                  {step.number}
                </div>
                
                <div className="bg-white rounded-2xl p-8 pt-16 shadow-md h-full flex flex-col items-center text-center">
                  <div className="mb-6">
                    <img src={step.icon} alt={step.title} className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6bbe23] mb-4">{step.title}</h3>
                  <p className="text-[#4b5563] text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NaturoFit */}
      <section className="bg-white px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1852] mb-4">Why Choose NaturoFit</h2>
          <p className="text-xl text-[#4b5563]">Your trusted partner in natural healing and wellness</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6bbe23] rounded-full flex items-center justify-center">
                <img src={feature.icon} alt="" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1f2937] mb-2">{feature.title}</h3>
                <p className="text-[#4b5563] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#6bbe23] to-[#6bbe23] px-4 md:px-20 py-20 text-center relative overflow-hidden">
        {/* Decorative Leaf Icon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-20">
           <img src="/assets/learn-more/frame19.svg" alt="" className="w-24 h-24" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Begin Your Natural Healing Journey Today</h2>
          <p className="text-xl md:text-2xl font-light">
            Take the first step towards lasting wellness with personalized naturopathy and homeopathy treatment
          </p>
          <p className="text-lg opacity-90">
            Book your 1:1 consultation with our certified experts and discover the power of natural healing
          </p>
          
          <div className="pt-4">
            <Link 
              to="/booking"
              className="bg-white text-[#6bbe23] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all inline-block"
            >
              Book Your 1:1 Consultation
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm md:text-base opacity-90">
            <img src="/assets/learn-more/frame21.svg" alt="Phone" className="w-4 h-4" />
            <span>Or call us at +91 98765 43210 for immediate assistance</span>
          </div>
        </div>
      </section>
    </div>
  );
};

// Data Arrays for Clean Template
const conditions = [
  {
    title: 'Thyroid Disorders',
    description: 'Natural treatment for hypothyroidism and hyperthyroidism with lifestyle modifications',
    icon: '/assets/learn-more/frame2.svg'
  },
  {
    title: 'PCOS/PCOD',
    description: 'Holistic approach to hormonal balance and reproductive health for women',
    icon: '/assets/learn-more/frame3.svg'
  },
  {
    title: 'Stress & Anxiety',
    description: 'Mental wellness through natural therapies, meditation, and stress management',
    icon: '/assets/learn-more/frame4.svg'
  },
  {
    title: 'Joint Pain & Arthritis',
    description: 'Pain relief and mobility improvement through natural anti-inflammatory treatments',
    icon: '/assets/learn-more/frame5.svg'
  },
  {
    title: 'Migraine & Headaches',
    description: 'Root-cause treatment for chronic headaches and migraine relief',
    icon: '/assets/learn-more/frame6.svg'
  },
  {
    title: 'Digestive Issues',
    description: 'Natural solutions for IBS, acidity, constipation, and gut health',
    icon: '/assets/learn-more/group0.svg' // Note: Check this filename
  },
  {
    title: 'Weight Management',
    description: 'Sustainable weight loss through nutrition, lifestyle, and metabolic balance',
    icon: '/assets/learn-more/frame8.svg'
  },
  {
    title: 'Respiratory Health',
    description: 'Natural treatment for asthma, allergies, and chronic respiratory conditions',
    icon: '/assets/learn-more/frame9.svg'
  },
  {
    title: 'Diabetes Management',
    description: 'Blood sugar control through diet, lifestyle, and natural therapies',
    icon: '/assets/learn-more/frame10.svg'
  }
];

const processSteps = [
  {
    number: '1',
    title: 'Connect',
    description: 'Register online and share your health concerns. Our team will reach out within 24 hours to schedule your consultation.',
    icon: '/assets/learn-more/frame11.svg'
  },
  {
    number: '2',
    title: 'Consult',
    description: 'Meet your certified naturopathy or homeopathy expert for detailed health assessment and personalized treatment planning.',
    icon: '/assets/learn-more/frame12.svg'
  },
  {
    number: '3',
    title: 'Heal',
    description: 'Follow your customized treatment plan with natural remedies, lifestyle changes, and regular progress monitoring.',
    icon: '/assets/learn-more/frame13.svg'
  },
  {
    number: '4',
    title: 'Support',
    description: 'Receive ongoing support, follow-ups, and adjustments to ensure lasting health transformation and wellness maintenance.',
    icon: '/assets/learn-more/frame14.svg'
  }
];

const features = [
  {
    title: 'Certified Experts',
    description: 'All our naturopathy professionals are verified and certified with proven track records.',
    icon: '/assets/learn-more/frame15.svg'
  },
  {
    title: 'Personalized Care',
    description: 'Receive customized treatment plans tailored to your unique health needs and lifestyle.',
    icon: '/assets/learn-more/frame16.svg'
  },
  {
    title: 'Holistic Healing',
    description: 'Experience comprehensive natural healing that addresses mind, body, and spirit.',
    icon: '/assets/learn-more/frame17.svg'
  },
  {
    title: 'Trusted Platform',
    description: 'Secure, reliable, and user-friendly platform with thousands of satisfied patients.',
    icon: '/assets/learn-more/frame18.svg'
  }
];

export default LearnMorePage;