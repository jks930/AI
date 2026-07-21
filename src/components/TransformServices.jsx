import { Link } from 'react-router-dom';
import { transformData as transformServices } from '../data/servicesData';

export default function TransformServices() {
  return (
    <section 
      data-header-theme="dark"
      data-header-bg="bg-gradient-to-br from-[#1d4ed8]/95 via-[#2563eb]/95 to-[#3b82f6]/95 backdrop-blur-md"
      className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] overflow-hidden"
    >
      
      {/* Background ambient light effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Centered) */}
        <div className="text-center max-w-4xl mx-auto mb-20 px-4 lg:px-0">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-400/20 text-white font-semibold text-[14px] mb-6 border border-blue-400/30">
            Enterprise AI
          </div>
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-white leading-[1.2] tracking-tight mb-6">
            AI Engineering & <br className="hidden lg:block"/> Enterprise Transformation
          </h2>
          <p className="text-[17px] lg:text-[19px] text-blue-50/90 leading-relaxed font-light">
            We engineer intelligent systems that go beyond basic automation to fundamentally reshape how enterprises function. By developing adaptive and scalable AI infrastructures, we enable companies to make data-driven decisions and drive sustainable global expansion.
          </p>
        </div>

        {/* Services Grid (Horizontal Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {transformServices.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`}
              key={index} 
              className="bg-white rounded-none sm:rounded-[24px] overflow-hidden flex flex-col sm:flex-row group hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] cursor-pointer border-y sm:border border-transparent hover:border-blue-200"
            >
              {/* Image Container */}
              <div className="sm:w-2/5 h-[220px] sm:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Container */}
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center bg-white relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100%] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[20px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
