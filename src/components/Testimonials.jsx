import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Karim Ahkami",
    role: "Founder & CEO, connectai",
    text: "Driven by a deep passion for innovation in the digital landscape, we perfectly combine our technical expertise with cutting-edge technologies to deliver impactful solutions that perfectly align with clients' business goals and vision.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    text: "Their team's dedication to quality and seamless communication made our project a resounding success. We couldn't have asked for a better technical partner.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Director of Product, InnovateCorp",
    text: "Outstanding technical capabilities combined with a deep understanding of our business needs. They delivered beyond our expectations.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "VP Engineering, DataSync",
    text: "The architectural decisions and code quality were exceptional. They truly acted as an extension of our own engineering team.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "David Smith",
    role: "Founder, StartupX",
    text: "From concept to deployment, their expertise shone through. Highly recommended for any complex AI or software development needs.",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      data-header-theme="dark"
      data-header-bg="bg-[#0b1024]/95 backdrop-blur-md"
      className="bg-[#0b1024] text-white py-12 lg:py-16 relative overflow-hidden"
    >
      {/* Background geometric pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      ></div>
      {/* Decorative Network Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%]" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 500 L1000 500 M500 0 L500 1000 M250 0 L750 1000 M750 0 L250 1000 M0 250 L1000 750 M0 750 L1000 250" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M200 200 L800 800 M200 800 L800 200" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">Our Clients Speak</h2>
          <p className="text-blue-100/70 text-lg">
            We take pride in long-term relationships with our clients and appreciate their kind words for our on-time deliverables.
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          
          {/* Previous Card Preview (Visual Only) */}
          <div className="hidden lg:block absolute top-1/2 -left-[15%] transform -translate-y-1/2 w-1/3 h-[400px] bg-gray-800 rounded-2xl opacity-30 scale-90 blur-[2px] transition-all duration-500 z-0"></div>
          
          {/* Next Card Preview (Visual Only) */}
          <div className="hidden lg:block absolute top-1/2 -right-[15%] transform -translate-y-1/2 w-1/3 h-[400px] bg-gray-800 rounded-2xl opacity-30 scale-90 blur-[2px] transition-all duration-500 z-0"></div>

          {/* Active Card */}
          <div className="bg-white text-gray-900 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative z-10 transition-all duration-500 min-h-[400px]">
            {/* Left Image / Video area */}
            <div className="md:w-[45%] relative bg-gray-100 group overflow-hidden">
              <img 
                src={testimonials[activeIndex].image} 
                alt="Client Video Thumbnail" 
                className="w-full h-full object-cover min-h-[300px] md:min-h-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4l12 6-12 6z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right Content area */}
            <div className="md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-blue-500/10 hidden md:block">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-10 relative z-10">
                {testimonials[activeIndex].text}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avatars Pagination */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-16">
          {testimonials.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-full overflow-hidden transition-all duration-300 ease-out focus:outline-none ${
                activeIndex === idx 
                  ? 'w-16 h-16 ring-2 ring-blue-500 ring-offset-4 ring-offset-[#0b1024] shadow-lg shadow-blue-500/20' 
                  : 'w-12 h-12 opacity-40 hover:opacity-100 hover:scale-110'
              }`}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover" 
              />
              {activeIndex === idx && (
                <div className="absolute inset-0 bg-blue-500/10 pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
