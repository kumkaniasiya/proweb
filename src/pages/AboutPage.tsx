import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, Award, Users, ArrowRight } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Boledi Management Consultancy Group - About Us';
  }, []);

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality results that exceed expectations.',
      icon: <Award size={40} className="text-orange-500" />
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical conduct in all our business dealings.',
      icon: <Check size={40} className="text-orange-500" />
    },
    {
      title: 'Client-Centric',
      description: 'Our clients are at the heart of our business. We prioritize their needs and work collaboratively to achieve their goals.',
      icon: <Users size={40} className="text-orange-500" />
    },
    {
      title: 'Efficiency',
      description: 'We optimize processes and resources to deliver timely, cost-effective solutions without compromising quality.',
      icon: <Clock size={40} className="text-orange-500" />
    }
  ];

  const team = [
    {
      name: 'Mahlogonolo Machika',
      position: 'Founder & CEO',
      bio: 'With over 10 years of experience in business consultancy and project management, Sarah leads our team with vision and expertise.',
      imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Kumkani Asiya',
      position: 'Head of Project Management',
      bio: 'David brings 15 years of experience in managing complex projects across various industries, ensuring on-time, on-budget delivery.',
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Lerato Mashaba',
      position: 'Business Analysis Director',
      bio: 'Lerato specializes in identifying business needs and implementing solutions that drive efficiency and growth.',
      imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Tshepo Brown',
      position: 'Operations Manager',
      bio: 'Thabo oversees our post-construction cleaning services, ensuring excellence in execution and client satisfaction.',
      imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="About Boledi Management" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              About Boledi Management
            </h1>
            <p 
              className="text-xl text-gray-300 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We are a premier consultancy group dedicated to continuous business improvement through expert services and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Story" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div data-aos="fade-left">
              <SectionTitle 
                subtitle="Our Story"
                title="Committed to Excellence Since 2005"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600 mb-6">
                Boledi Management Consultancy Group was founded in 2005 with a vision to provide exceptional services that drive continuous business improvement. What started as a small consultancy has grown into a comprehensive service provider offering post-construction cleaning, project management, and business analysis.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have established ourselves as a trusted partner for businesses across various sectors, delivering solutions that enhance efficiency, productivity, and overall performance. Our commitment to excellence and client satisfaction has been the cornerstone of our success and growth.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold our founding principles while embracing innovation and adapting to the evolving needs of the business landscape. Our experienced team of professionals brings expertise, dedication, and a client-centric approach to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Core Values"
            title="What Drives Our Business"
            description="Our values guide our decisions, shape our culture, and define how we work with our clients and each other."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              className="bg-orange-500 text-white rounded-lg shadow-md p-8"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-white text-lg mb-6">
                To deliver exceptional services that drive continuous business improvement, helping our clients achieve their goals through expert consultancy, efficient project management, and specialized solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={20} className="mr-3 flex-shrink-0 mt-1" />
                  <span>Provide high-quality services that exceed client expectations</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-3 flex-shrink-0 mt-1" />
                  <span>Implement innovative solutions that address business challenges</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-3 flex-shrink-0 mt-1" />
                  <span>Foster long-term relationships based on trust and mutual success</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-gray-900 text-white rounded-lg shadow-md p-8"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-white text-lg mb-6">
                To be the leading consultancy group in Africa, recognized for our excellence, innovation, and positive impact on businesses and communities through continuous improvement initiatives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Expand our services across Africa while maintaining the highest standards</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Drive innovation in business improvement methodologies</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Contribute to sustainable economic growth through our services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Leadership"
            title="Meet Our Team"
            description="Our experienced team brings expertise, passion, and dedication to every project we undertake."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Work With Us?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Let's collaborate to bring continuous improvement to your business through our expert services and solutions.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get in Touch <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;