import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
      <Header />
      
      {/* Top Banner */}
      <div className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#080014] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
          <p className="lead text-xl text-gray-800 font-medium mb-8">
            At ITMC Systems, Inc., we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.itmcsystems.com) or engage with our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number that you voluntarily give to us when you choose to participate in various activities related to our services.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access our website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing our website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Use of Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Create and manage your account.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding our services to you.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the services.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Disclosure of Your Information</h2>
          <p className="mb-8">We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers, Marketing Communications, and Business Transfers.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Security of Your Information</h2>
          <p className="mb-8">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Contact Us</h2>
          <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-900">ITMC Systems, Inc.</p>
            <p>Parsippany, New Jersey, US</p>
            <p>Email: <a href="mailto:info@itmcsystems.com" className="text-blue-600 hover:underline">info@itmcsystems.com</a></p>
            <p>Phone: +1 405 651 8989</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
