import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[align]} mb-12 ${className}`} data-aos="fade-up">
      <p className="text-orange-500 font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
};

export default SectionTitle;