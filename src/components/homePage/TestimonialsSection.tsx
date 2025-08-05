import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Ziptie's API is incredibly fast and reliable. We've processed millions of URLs without a single issue.",
      author: "Sarah Chen",
      role: "Lead Developer at TechCorp",
      avatar: "SC"
    },
    {
      quote: "The analytics are game-changing. We can track user engagement like never before.",
      author: "Mike Rodriguez", 
      role: "CTO at StartupXYZ",
      avatar: "MR"
    },
    {
      quote: "Best URL shortening API we've used. The documentation is perfect and support is amazing.",
      author: "Alex Kim",
      role: "Full Stack Developer",
      avatar: "AK"
    }
  ];

  return (
    <section className="px-6 py-20 bg-gray-900/30 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-orange-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Loved by Developers
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;