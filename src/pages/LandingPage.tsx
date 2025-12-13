import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans text-body">
      {/* Hero Section */}
      <section className="bg-[#fdffec] px-4 sm:px-8 md:px-20 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2 space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight font-montserrat text-heading">
            India's #1 <span className="text-primary">Naturopathy & Homeopathy Platform</span> 
          </h1>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[30px] leading-tight font-montserrat text-heading">
            Connect 1:1 with Trusted Professionals for Natural Healing, Wellness and Healing Lifestyle Diseases.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Experience the power of nature through personalized guidance from certified naturopaths & homeopaths — helping you restore <span className="text-primary font-semibold">balance, energy</span>, and <span className="text-primary font-semibold">inner peace.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking" className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all text-center">
              Book Your 1:1 Session
            </Link>
            <button className="border-2 border-primary text-primary-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative w-full mt-8 md:mt-0 flex justify-center">
           {/* Image container with rounded corners */}
           <div className="rounded-[24px] overflow-hidden shadow-2xl max-w-md lg:max-w-lg w-full">
             <img src="/assets/landing/img0.png" alt="Yoga" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
           </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4 sm:px-8 md:px-20 bg-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-heading mb-4 font-montserrat">How It Works</h2>
          <p className="text-gray-600 text-base md:text-lg">Simple steps to start your natural healing journey</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mb-6 relative">
               {/* Icon */}
               <img src="/assets/landing/frame0.svg" alt="Connect" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Connect</h3>
            <p className="text-gray-600 text-sm md:text-base">Browse and select from our verified naturopathy experts based on your specific needs and preferences.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mb-6 relative">
               <img src="/assets/landing/frame1.svg" alt="Consult" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Consult</h3>
            <p className="text-gray-600 text-sm md:text-base">Schedule a personalized 1:1 consultation online or in-person with your chosen naturopathy professional.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mb-6 relative">
               <img src="/assets/landing/frame2.svg" alt="Heal" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Heal</h3>
            <p className="text-gray-600 text-sm md:text-base">Follow your customized natural healing plan and experience holistic wellness transformation.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-16 md:py-20 px-4 sm:px-8 md:px-20 bg-[#f9fafb]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-heading mb-4 font-montserrat">Meet Our Experts</h2>
          <p className="text-gray-600 text-base md:text-lg">Certified naturopathy professionals ready to guide your healing journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { img: 'img1.png', name: 'Dr. Priya Sharma', qual: 'BNYS, 8+ Years', spec: 'Specializes in Diet Therapy & Yoga' },
            { img: 'img2.png', name: 'Dr. Rajesh Kumar', qual: 'BAMS, 12+ Years', spec: 'Expert in Acupuncture & Herbal Medicine' },
            { img: 'img3.png', name: 'Dr. Meera Patel', qual: 'BHMS, 10+ Years', spec: 'Holistic Healing & Wellness Coach' },
            { img: 'img4.png', name: 'Dr. Arjun Singh', qual: 'MD, 15+ Years', spec: 'Stress Management & Meditation' },
          ].map((expert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 md:mb-6 border-4 border-gray-100">
                <img src={`/assets/landing/${expert.img}`} alt={expert.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{expert.name}</h3>
              <p className="text-primary-dark font-medium mb-1 text-sm md:text-base">{expert.qual}</p>
              <p className="text-gray-600 text-xs md:text-sm">{expert.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose NaturoFit */}
      <section className="py-16 md:py-20 px-4 sm:px-8 md:px-20 bg-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-heading mb-4 font-montserrat">Why Choose NaturoFit</h2>
          <p className="text-gray-600 text-base md:text-lg">Your trusted partner in natural healing and wellness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
           {[
             { icon: 'frame3.svg', title: 'Certified Experts', desc: 'All our naturopathy professionals are verified and certified with proven track records.' },
             { icon: 'frame4.svg', title: 'Personalized Care', desc: 'Receive customized treatment plans tailored to your unique health needs and lifestyle.' },
             { icon: 'frame5.svg', title: 'Holistic Healing', desc: 'Experience comprehensive natural healing that addresses mind, body, and spirit.' },
             { icon: 'frame6.svg', title: 'Trusted Platform', desc: 'Secure, reliable, and user-friendly platform with thousands of satisfied patients.' },
           ].map((item, index) => (
             <div key={index} className="flex gap-4 md:gap-6 items-start p-4 md:p-6 rounded-xl hover:bg-gray-50 transition-colors">
               <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                 <img src={`/assets/landing/${item.icon}`} alt={item.title} className="w-4 h-4 md:w-5 md:h-5" />
               </div>
               <div>
                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                 <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* What Our Patients Say */}
      <section className="py-16 md:py-20 px-4 sm:px-8 md:px-20 bg-[#f9fafb]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-heading mb-4 font-montserrat">What Our Patients Say</h2>
          <p className="text-gray-600 text-base md:text-lg">Real stories of transformation and healing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {[
             { 
               img: 'img5.png', 
               name: 'Sarah M.', 
               text: '"Dr. Priya\'s holistic approach helped me overcome chronic fatigue. I feel more energetic and balanced than ever before!"' 
             },
             { 
               img: 'img6.png', 
               name: 'Ravi K.', 
               text: '"The personalized diet plan and yoga sessions transformed my digestive health completely. Highly recommended!"' 
             },
             { 
               img: 'img7.png', 
               name: 'Anita D.', 
               text: '"Natural healing at its best! The stress management techniques have changed my life for the better."' 
             }
           ].map((testimonial, index) => (
             <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col h-full hover:shadow-xl transition-shadow">
               <div className="flex items-center gap-4 mb-6">
                 <img src={`/assets/landing/${testimonial.img}`} alt={testimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                   <div className="flex gap-1">
                     {[1,2,3,4,5].map(star => (
                       <img key={star} src="/assets/landing/frame7.svg" alt="star" className="w-3 h-3 md:w-4 md:h-4" /> // Assuming frame7 is a star
                     ))}
                   </div>
                 </div>
               </div>
               <p className="text-gray-600 italic leading-relaxed flex-grow text-sm md:text-base">{testimonial.text}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
