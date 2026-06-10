import React from 'react';

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "Jun 3, 2026",
    readTime: "12 min read",
    title: "Top AI Agent Use Cases for Enterprises: Expert Guide 2026",
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    date: "May 29, 2026",
    readTime: "14 min read",
    title: "Top AI Trends in 2026: 10 Trends Transforming Businesses Worldwide",
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1684369175836-70e9ce324866?q=80&w=800&auto=format&fit=crop",
    date: "May 27, 2026",
    readTime: "11 min read",
    title: "AI Agent Development Cost: Comprehensive Guide 2026",
    link: "#"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-12 lg:py-16 bg-gray-50/30 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center text-gray-900 mb-16 tracking-tight">
          Internal Blog Section
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full border border-gray-100 group"
            >
              {/* Image Container */}
              <div className="h-[220px] overflow-hidden bg-blue-50 relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center justify-center gap-3 text-[13px] text-gray-500 font-medium mb-5">
                  <span>{blog.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <span>{blog.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-[20px] font-bold text-gray-900 mb-8 text-center leading-snug line-clamp-3">
                  {blog.title}
                </h3>
                
                {/* Read More Link */}
                <div className="mt-auto text-center">
                  <a 
                    href={blog.link} 
                    className="inline-flex items-center justify-center text-[#0b5cff] font-semibold hover:text-blue-800 transition-colors text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
