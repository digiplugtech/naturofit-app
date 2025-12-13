import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdffec] pt-20 pb-10 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand Section */}
        <div className="md:w-1/4">
             {/* Logo in footer might be different or same. HTML shows image-432 src=image-431.png */}
             <img src="/assets/landing/image-431.png" alt="NaturoFit" className="h-16 object-contain mb-4" />
          <p className="text-[#111827] text-base leading-relaxed">
            India's trusted platform for natural healing and wellness through certified naturopathy professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/5">
          <h3 className="text-white font-semibold text-lg mb-4 hidden">Quick Links</h3> {/* HTML has text-white but bg is light? Let's check styling. 
          Actually css says .quick-links color: #ffffff but background is #fdffec (light yellow). White text on light yellow is unreadable.
          Wait, looking at image "footer" part. 
          The landing page image has a light background footer.
          The text "Quick Links" in `style.css` says color: #ffffff. 
          Maybe there is a dark background container I missed?
          `footer` background is `#fdffec`.
          Let's look at the image. The footer seems to have a green background?
          In the first image `naturo fit.png`, the footer background is light yellow/beige `#fdffec`.
          The "Quick Links" title seems to be dark.
          Ah, in `style.css`:
          .quick-links { color: #ffffff; ... }
          This might be a mistake in the provided CSS or I am misinterpreting. 
          However, looking at the image (bottom of Landing Page), the footer background is indeed light (beige). The text is dark.
          "Quick Links", "For Professionals", "Contact" headers seem to be missing or dark in the image.
          Wait, looking closer at the bottom of the first image.
          There are columns.
          The text color in CSS might be wrong or for a dark mode not shown.
          I will use dark text for visibility on light background.
          */}
          <h3 className="text-heading font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-[#111827] hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="text-[#111827] hover:text-primary">About us</Link></li>
            {/* <li><Link to="/shop" className="text-[#111827] hover:text-primary">Shop</Link></li>
            <li><Link to="/yoga" className="text-[#111827] hover:text-primary">yoga & exercise</Link></li> */}
          </ul>
        </div>

        {/* For Professionals */}
        <div className="md:w-1/5">
          <h3 className="text-heading font-semibold text-lg mb-4">For Professionals</h3>
           <ul className="space-y-2">
            <li><Link to="/join" className="text-[#111827] hover:text-primary">Register as Doctor</Link></li>
            {/* <li><Link to="/resources" className="text-[#111827] hover:text-primary">Resources</Link></li>
            <li><Link to="/support" className="text-[#111827] hover:text-primary">Support</Link></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/4">
          <h3 className="text-heading font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <img src="/assets/landing/frame22.svg" alt="Phone" className="w-4 h-5 mt-1" />
              <span className="text-[#111827]">91 91088 95638</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/assets/landing/frame23.svg" alt="Email" className="w-4 h-4 mt-1" />
              <span className="text-[#111827]">connect@naturo.fit</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/assets/landing/frame24.svg" alt="Location" className="w-3 h-5 mt-1" />
              <span className="text-[#111827]">Bangalore, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-300">
        <p className="text-center text-[#111827]">© 2025 NaturoFit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



