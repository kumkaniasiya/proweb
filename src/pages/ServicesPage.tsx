import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  ClipboardCheck, 
  BarChart, 
  Clipboard, 
  Check, 
  ArrowRight
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Boledi Management Consultancy Group - Services';
  }, []);

  const services = [
    {
      id: 'post-construction-cleaning',
      title: 'Post-Construction Cleaning',
      icon: <Building size={48} className="text-orange-500" />,
      description: 'Professional cleaning services for newly built or renovated properties, ensuring they\'re ready for occupancy.',
      benefits: [
        'Thorough removal of construction debris and dust',
        'Deep cleaning of all surfaces and fixtures',
        'Specialized equipment for efficient cleaning',
        'Trained professionals with attention to detail',
        'Eco-friendly cleaning products available'
      ],
      process: [
        'Initial site assessment',
        'Customized cleaning plan',
        'Debris removal and rough cleaning',
        'Detailed cleaning of all areas',
        'Final inspection and quality check'
      ],
      image: 'https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: <ClipboardCheck size={48} className="text-orange-500" />,
      description: 'Expert project management to ensure your projects are completed on time, within budget, and to specification.',
      benefits: [
        'Skilled project managers with industry expertise',
        'Comprehensive project planning and execution',
        'Risk management and mitigation strategies',
        'Regular progress reporting and updates',
        'Resource optimization and allocation'
      ],
      process: [
        'Project initiation and scope definition',
        'Detailed planning and scheduling',
        'Resource allocation and team coordination',
        'Implementation and progress monitoring',
        'Project closure and evaluation'
      ],
      image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis',
      icon: <BarChart size={48} className="text-orange-500" />,
      description: 'Comprehensive analysis to identify business needs and determine solutions to business problems.',
      benefits: [
        'Identification of operational inefficiencies',
        'Data-driven insights for decision making',
        'Optimized business processes',
        'Cost reduction opportunities',
        'Strategy alignment with business goals'
      ],
      process: [
        'Current state assessment',
        'Data collection and analysis',
        'Gap identification',
        'Solution recommendation',
        'Implementation support and follow-up'
      ],
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'consultancy',
      title: 'Consultancy Services',
      icon: <Clipboard size={48} className="text-orange-500" />,
      description: 'Strategic consultancy to help your business improve processes, efficiency, and overall performance.',
      benefits: [
        'Expert advice from industry professionals',
        'Customized solutions for your specific challenges',
        'Implementation support and guidance',
        'Knowledge transfer to your team',
        'Long-term partnership for continuous improvement'
      ],
      process: [
        'Initial consultation and needs assessment',
        'Strategy development',
        'Solution design and planning',
        'Implementation guidance',
        'Evaluation and continuous improvement'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Our Services" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              Our Professional Services
            </h1>
            <p 
              className="text-xl text-gray-300 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Comprehensive solutions to drive continuous business improvement and help your organization thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="What We Offer"
            title="Specialized Services for Your Business Needs"
            description="We provide a range of professional services designed to enhance your business operations and drive continuous improvement."
          />

          <div className="space-y-24 mt-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={20} className="text-orange-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                  <ol className="space-y-3 mb-8">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
                  >
                    Inquire About This Service <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Need a Customized Solution?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            We understand that every business is unique. Contact us to discuss your specific needs and how our services can be tailored to address your challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link 
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/portfolio"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;