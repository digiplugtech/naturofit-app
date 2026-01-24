import React, { useEffect } from 'react';
import { logPageView } from '../utils/analytics';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    logPageView();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fbf9f6] py-12 px-4 sm:px-8 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Introduction */}
        <div className="p-8 md:p-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/privacy/frame1.svg" alt="" className="w-full h-full" />
            </div>
            Introduction
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              At Naturo Fit, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you use our digital platform for naturopathy and homeopathy consultations.
            </p>
            <p>
              By using Naturo Fit's services, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our platform.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="p-8 md:p-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
             <div className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/privacy/frame3.svg" alt="" className="w-full h-full" />
            </div>
            Information We Collect
          </h2>
          <div className="grid gap-6">
            {/* Card 1 */}
            <div className="bg-[#f0fdf4] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-heading mb-2">Personal Information</h3>
              <p className="text-gray-600">Name, phone number, email address, age, gender, and address details.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f0fdf4] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-heading mb-2">Health Information</h3>
              <p className="text-gray-600">Medical history, symptoms, consultation notes, and treatment records shared during consultations.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f0fdf4] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-heading mb-2">Payment Information</h3>
              <p className="text-gray-600">Transaction details, payment method information, and billing addresses.</p>
            </div>
             {/* Card 4 */}
             <div className="bg-[#f0fdf4] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-heading mb-2">Device & Usage Data</h3>
              <p className="text-gray-600">IP address, browser type, device information, and how you interact with our platform.</p>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="p-8 md:p-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <img src="/assets/privacy/frame5.svg" alt="" className="w-full h-full" />
            </div>
            How We Use Your Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                 <img src="/assets/privacy/frame6.svg" alt="" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">Provide Consultations</h3>
                <p className="text-gray-600 text-sm">Connect you with certified doctors and facilitate medical consultations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                 <img src="/assets/privacy/frame7.svg" alt="" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">Improve Services</h3>
                <p className="text-gray-600 text-sm">Enhance platform functionality and user experience based on usage patterns.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                 <img src="/assets/privacy/frame8.svg" alt="" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">Communication</h3>
                <p className="text-gray-600 text-sm">Send appointment reminders, health tips, and customer support messages.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                 <img src="/assets/privacy/frame9.svg" alt="" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">Legal Compliance</h3>
                <p className="text-gray-600 text-sm">Comply with legal obligations and protect against fraudulent activities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing & Disclosure */}
        <div className="p-8 md:p-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
             <div className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/privacy/frame11.svg" alt="" className="w-full h-full" />
            </div>
            Data Sharing & Disclosure
          </h2>
          
          <div className="bg-[#fefce8] border border-[#fef08a] rounded-lg p-6 mb-8 flex gap-4">
             <div className="w-5 h-5 flex-shrink-0 mt-1">
                <img src="/assets/privacy/frame12.svg" alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-[#854d0e] font-semibold mb-1">Important Notice</h3>
              <p className="text-[#a16207]">We never sell your personal information to third parties.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
               <div className="w-4 h-4 flex-shrink-0 mt-1.5">
                <img src="/assets/privacy/frame13.svg" alt="" className="w-full h-full" />
              </div>
              <p className="text-gray-600">Your health information is shared only with verified doctors for consultation purposes</p>
            </div>
            <div className="flex gap-3">
               <div className="w-4 h-4 flex-shrink-0 mt-1.5">
                <img src="/assets/privacy/frame14.svg" alt="" className="w-full h-full" />
              </div>
              <p className="text-gray-600">Payment information is processed securely through trusted payment gateways</p>
            </div>
            <div className="flex gap-3">
               <div className="w-4 h-4 flex-shrink-0 mt-1.5">
                <img src="/assets/privacy/frame15.svg" alt="" className="w-full h-full" />
              </div>
              <p className="text-gray-600">Information may be disclosed when required by law or to protect our users' safety</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="p-8 md:p-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
             <div className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/privacy/frame17.svg" alt="" className="w-full h-full" />
            </div>
            Data Security
          </h2>
          <p className="text-gray-600 mb-8">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f9fafb] p-6 rounded-lg text-center shadow-sm">
               <div className="w-8 h-8 mx-auto mb-4">
                <img src="/assets/privacy/frame18.svg" alt="" className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Encryption</h3>
              <p className="text-gray-600 text-sm">Data encrypted in transit and at rest</p>
            </div>
            <div className="bg-[#f9fafb] p-6 rounded-lg text-center shadow-sm">
               <div className="w-8 h-8 mx-auto mb-4">
                <img src="/assets/privacy/frame19.svg" alt="" className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Secure Servers</h3>
              <p className="text-gray-600 text-sm">Protected hosting infrastructure</p>
            </div>
            <div className="bg-[#f9fafb] p-6 rounded-lg text-center shadow-sm">
               <div className="w-8 h-8 mx-auto mb-4">
                <img src="/assets/privacy/frame20.svg" alt="" className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Access Control</h3>
              <p className="text-gray-600 text-sm">Limited access to authorized personnel</p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="p-8 md:p-12 border-b border-gray-100">
           <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <img src="/assets/privacy/frame22.svg" alt="" className="w-full h-full" />
            </div>
            Your Rights
          </h2>
          
          <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-8">
            <p className="text-[#1e40af] mb-6">You have the following rights regarding your personal information:</p>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                 <div className="w-5 h-5 flex-shrink-0">
                  <img src="/assets/privacy/frame23.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-[#1d4ed8]">Access and view your personal data</span>
              </div>
              <div className="flex gap-3 items-center">
                 <div className="w-5 h-5 flex-shrink-0">
                  <img src="/assets/privacy/frame24.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-[#1d4ed8]">Update or correct your information</span>
              </div>
              <div className="flex gap-3 items-center">
                 <div className="w-5 h-5 flex-shrink-0">
                  <img src="/assets/privacy/frame25.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-[#1d4ed8]">Request deletion of your data</span>
              </div>
              <div className="flex gap-3 items-center">
                 <div className="w-5 h-5 flex-shrink-0">
                  <img src="/assets/privacy/frame26.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-[#1d4ed8]">Withdraw consent for data processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="p-8 md:p-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
             <div className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/privacy/frame28.svg" alt="" className="w-full h-full" />
            </div>
            Contact Us
          </h2>
          
          <div className="bg-[#f9fafb] rounded-lg p-8">
            <p className="text-gray-600 mb-6">If you have any questions about this Privacy Policy or need assistance with your data rights, please contact us:</p>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                 <div className="w-4 h-4 flex-shrink-0">
                  <img src="/assets/privacy/frame29.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-gray-600">Naturo Fit Healthcare Platform</span>
              </div>
              <div className="flex gap-3 items-center">
                 <div className="w-4 h-4 flex-shrink-0">
                  <img src="/assets/privacy/frame30.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-gray-600">privacy@naturofit.com</span>
              </div>
              <div className="flex gap-3 items-center">
                 <div className="w-4 h-4 flex-shrink-0">
                  <img src="/assets/privacy/frame31.svg" alt="" className="w-full h-full" />
                </div>
                <span className="text-gray-600">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Changes to This Policy */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
             <div className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/privacy/frame33.svg" alt="" className="w-full h-full" />
            </div>
            Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our platform and updating the "Last updated" date. Your continued use of Naturo Fit after any changes constitutes acceptance of the updated policy.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;
