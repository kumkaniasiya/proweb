import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage
}) => {
  return (
    <section 
      className="relative flex items-center justify-center py-32" // Changed from h-screen
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
          url(${backgroundImage}) center/cover no-repeat
        `
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          {subtitle}
        </p>
        <Link 
          to={buttonLink}
          className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
        >
          {buttonText}
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};
export default Hero;