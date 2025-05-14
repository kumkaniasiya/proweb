import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, title, category, imageUrl }) => {
  return (
    <Link 
      to={`/portfolio/${id}`}
      className="group relative overflow-hidden rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <div className="aspect-w-4 aspect-h-3">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-orange-400 font-medium">{category}</p>
      </div>
    </Link>
  );
};

export default PortfolioCard;