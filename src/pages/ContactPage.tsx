import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Boledi Management Consultancy Group - Contact Us';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              Contact Us
            </h1>
            <p 
              className="text-xl text-gray-300 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get in touch with our team to discuss your business needs and how we can help you achieve continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-20">
            <div 
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Phone size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+1 (234) 567-8900</p>
                <p className="text-gray-600">+1 (234) 567-8901</p>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Mail size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">info@boledimcg.com</p>
                <p className="text-gray-600">support@boledimcg.com</p>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <MapPin size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Business Avenue, Suite 500<br />
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Clock size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <SectionTitle 
                subtitle="Get In Touch"
                title="Send Us a Message"
                description="Have a question or ready to start a project? Fill out the form, and our team will get back to you shortly."
                align="left"
                className="mb-8"
              />
              <ContactForm />
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-left">
              {/* Google Map Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114149.97036153417!2d27.86245994573479!3d-26.171614356011784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1663947231052!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Boledi Management Consultancy Group Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Frequently Asked Questions"
            title="Common Questions About Our Services"
            description="Find answers to some of the most common questions about our services and how we work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What areas do you service?</h3>
              <p className="text-gray-600">
                We primarily serve Johannesburg and surrounding areas, but we also work with clients across South Africa and select international projects depending on scope and requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I request a quote for your services?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling our office, or sending us an email. We'll gather the necessary information about your project and provide a detailed quote.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on the scope and complexity of the work. During our initial consultation, we'll provide an estimated timeline based on your specific requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer ongoing maintenance services?</h3>
              <p className="text-gray-600">
                Yes, we offer ongoing maintenance services for businesses that require regular support. We can create customized maintenance plans based on your specific needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                We work with clients across various industries including construction, real estate, healthcare, finance, retail, manufacturing, and government sectors. Our team has diverse expertise to serve different industry needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide emergency services?</h3>
              <p className="text-gray-600">
                Yes, we understand that urgent situations may arise. We offer expedited services for time-sensitive projects. Please contact us directly to discuss your emergency needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;