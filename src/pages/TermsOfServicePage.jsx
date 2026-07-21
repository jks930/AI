import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TermsOfServicePage = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
      <SEO title="Terms of Service | ITMC Digital" description="Terms of Service for ITMC Digital AI services and applications." />
      <Header />
      
      {/* Top Banner */}
      <div className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#080014] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
          <p className="lead text-xl text-gray-800 font-medium mb-8">
            These Terms of Service constitute a legally binding agreement made between you and ITMC Digital, Inc. concerning your access to and use of our website and services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-8">By accessing our website and utilizing our services, you agree to be bound by these Terms. If you do not agree with any part of these terms, you are prohibited from using the site and our services.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">Unless otherwise indicated, the Site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. User Representations</h2>
          <p className="mb-4">By using the Site, you represent and warrant that:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Prohibited Activities</h2>
          <p className="mb-8">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Disclaimer</h2>
          <p className="mb-8">THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Contact Information</h2>
          <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-900">ITMC Digital, Inc.</p>
            <p>Parsippany, New Jersey, US</p>
            <p>Email: <a href="mailto:info@itmcsystems.com" className="text-blue-600 hover:underline">info@itmcsystems.com</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
