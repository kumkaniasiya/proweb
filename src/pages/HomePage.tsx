import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clipboard, BarChart, ClipboardCheck, ArrowRight, Building, Users, Award, ThumbsUp } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PortfolioCard from '../components/PortfolioCard';


const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Boledi Management Consultancy Group - Home';
  }, []);

  const services = [
    {
      title: 'Post-Construction Cleaning',
      description: 'Professional cleaning services for newly built or renovated properties, ensuring they\'re ready for occupancy.',
      icon: <Building size={32} />,
      link: '/services/post-construction-cleaning'
    },
    {
      title: 'Project Management',
      description: 'Expert project management to ensure your projects are completed on time, within budget, and to specification.',
      icon: <ClipboardCheck size={32} />,
      link: '/services/project-management'
    },
    {
      title: 'Business Analysis',
      description: 'Comprehensive analysis to identify business needs and determine solutions to business problems.',
      icon: <BarChart size={32} />,
      link: '/services/business-analysis'
    },
    {
      title: 'Consultancy Services',
      description: 'Strategic consultancy to help your business improve processes, efficiency, and overall performance.',
      icon: <Clipboard size={32} />,
      link: '/services/consultancy'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' }
  ];

  const testimonials = [
    {
      quote: 'Boledi Management Consultancy Group\'s post-construction cleaning service was exceptional. They transformed our newly built office space into a pristine, ready-to-use environment.',
      author: 'Sarah Johnson',
      position: 'Operations Director',
      company: 'Nexus Properties'
    },
    {
      quote: 'The project management expertise provided by Boledi Management was instrumental in the successful completion of our expansion project. Professional, timely, and highly competent.',
      author: 'Michael Chen',
      position: 'CEO',
      company: 'Global Innovations'
    },
    {
      quote: 'Their business analysis transformed our operations. We\'ve seen a 30% increase in efficiency since implementing their recommendations.',
      author: 'Thabo Mokoena',
      position: 'Managing Director',
      company: 'Elevate Solutions'
    }
  ];

  const featuredProjects = [
    {
      id: '1',
      title: 'Corporate HQ Renovation',
      category: 'Post-Construction Cleaning',
      imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      title: 'Retail Mall Development',
      category: 'Project Management',
      imageUrl: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      title: 'Banking System Optimization',
      category: 'Business Analysis',
      imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div>
      <Hero 
        title="Continuous Business Improvement Solutions"
        subtitle="Transforming businesses through expert consultancy, project management, and specialized services."
        buttonText="Explore Our Services"
        buttonLink="/services"
        backgroundImage="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="What We Offer"
            title="Our Professional Services"
            description="We provide comprehensive solutions to help your business thrive through expert consultancy, management, and specialized services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-orange-500 font-semibold mb-2">About Boledi Management</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We Are Committed To Excellence</h2>
              <p className="text-gray-600 mb-6">
                Boledi Management Consultancy Group is a premier service provider specializing in post-construction cleaning, project management, and business analysis. With a focus on continuous business improvement, we deliver exceptional results that help our clients achieve their goals.
              </p>
              <p className="text-gray-600 mb-8">
                Our experienced team of professionals brings expertise, dedication, and innovation to every project, ensuring client satisfaction and business success.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="mr-2 text-orange-500">
                    <Award size={18} />
                  </div>
                  <span className="text-gray-800 font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-orange-500">
                    <Users size={18} />
                  </div>
                  <span className="text-gray-800 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-orange-500">
                    <ThumbsUp size={18} />
                  </div>
                  <span className="text-gray-800 font-medium">Client Satisfaction</span>
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors mt-8"
              >
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Boledi Management Team" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-6 hidden md:block">
                  <p className="text-gray-800 font-bold text-lg mb-1">15+ Years</p>
                  <p className="text-gray-600">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-orange-500 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-white text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-orange-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Recent Work"
            title="Featured Projects"
            description="Explore some of our recent projects that showcase our expertise and commitment to excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((project, index) => (
              <PortfolioCard 
                key={index}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/portfolio"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              View All Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Client Feedback"
            title="What Our Clients Say"
            description="Hear from some of our satisfied clients about their experience working with Boledi Management Consultancy Group."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our professional services can help your business thrive and achieve continuous improvement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/services"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;