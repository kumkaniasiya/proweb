import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Boledi Management Consultancy Group - Portfolio';
  }, []);

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: '1',
      title: 'Corporate HQ Renovation',
      category: 'post-construction-cleaning',
      categoryLabel: 'Post-Construction Cleaning',
      imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      title: 'Retail Mall Development',
      category: 'project-management',
      categoryLabel: 'Project Management',
      imageUrl: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      title: 'Banking System Optimization',
      category: 'business-analysis',
      categoryLabel: 'Business Analysis',
      imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '4',
      title: 'Hotel Chain Expansion Strategy',
      category: 'consultancy',
      categoryLabel: 'Consultancy Services',
      imageUrl: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '5',
      title: 'New Hospital Wing Cleaning',
      category: 'post-construction-cleaning',
      categoryLabel: 'Post-Construction Cleaning',
      imageUrl: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '6',
      title: 'Government Office Relocation',
      category: 'project-management',
      categoryLabel: 'Project Management',
      imageUrl: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '7',
      title: 'Manufacturing Process Improvement',
      category: 'business-analysis',
      categoryLabel: 'Business Analysis',
      imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '8',
      title: 'Logistics Company Restructuring',
      category: 'consultancy',
      categoryLabel: 'Consultancy Services',
      imageUrl: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '9',
      title: 'Luxury Apartment Complex Cleaning',
      category: 'post-construction-cleaning',
      categoryLabel: 'Post-Construction Cleaning',
      imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Our Portfolio" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              Our Portfolio
            </h1>
            <p 
              className="text-xl text-gray-300 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Explore our projects and see how we've helped businesses achieve their goals through our professional services.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Work"
            title="Featured Projects"
            description="Browse through our diverse portfolio of projects across various industries and service categories."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12" data-aos="fade-up">
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                filter === 'post-construction-cleaning' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('post-construction-cleaning')}
            >
              Post-Construction Cleaning
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                filter === 'project-management' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('project-management')}
            >
              Project Management
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                filter === 'business-analysis' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('business-analysis')}
            >
              Business Analysis
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                filter === 'consultancy' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('consultancy')}
            >
              Consultancy
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredProjects.map((project) => (
              <PortfolioCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.categoryLabel}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Start Your Project?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Contact us today to discuss how we can help you achieve your business goals through our professional services.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;