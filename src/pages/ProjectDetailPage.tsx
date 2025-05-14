import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Building, ArrowLeft, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
  galleryImages: string[];
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // This would be replaced with an actual API call in a real app
    const fetchProject = () => {
      // Mock project data - in a real app, this would come from an API
      const projects: ProjectDetail[] = [
        {
          id: '1',
          title: 'Corporate HQ Renovation',
          category: 'Post-Construction Cleaning',
          client: 'Global Innovations Ltd',
          date: 'January 2023',
          location: 'Johannesburg, South Africa',
          description: 'A comprehensive post-construction cleaning project for a newly renovated corporate headquarters spanning 50,000 square feet. The project included cleaning of all interior spaces, windows, fixtures, and exterior areas.',
          challenge: 'The client needed the entire facility cleaned thoroughly and quickly to prepare for a grand reopening event that was scheduled just one week after construction completion. The large scale of the project and tight timeline presented significant challenges.',
          solution: 'We deployed a specialized team of 25 cleaning professionals working in coordinated shifts. Advanced cleaning equipment and eco-friendly products were used to ensure efficient and thorough cleaning while maintaining environmental standards. A detailed cleaning plan was developed with clearly assigned responsibilities and daily progress tracking.',
          results: [
            'Completed the entire cleaning operation in 5 days, 2 days ahead of schedule',
            'All areas passed quality inspection on the first review with no touch-ups needed',
            'Client reported receiving numerous compliments on the cleanliness of the facility during the reopening event',
            'Established an ongoing maintenance agreement for regular cleaning services'
          ],
          imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          galleryImages: [
            'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '2',
          title: 'Retail Mall Development',
          category: 'Project Management',
          client: 'Savannah Properties',
          date: 'March 2022 - November 2022',
          location: 'Cape Town, South Africa',
          description: 'Project management for the development of a 75,000 square foot retail mall with 45 individual shops, food court, and ample parking facilities. Our team oversaw the entire project from planning to completion.',
          challenge: 'The project faced multiple challenges including supply chain disruptions due to global events, coordination of numerous subcontractors, and strict municipal regulations that required careful navigation. The client also requested an accelerated timeline to open before the holiday shopping season.',
          solution: 'We implemented an agile project management approach with weekly sprints and daily stand-ups. Alternative supply sources were identified and secured early. We established strong relationships with local regulatory bodies to streamline approvals. A dedicated project management team was on-site daily to ensure quality control and maintain the schedule.',
          results: [
            'Project completed on time for pre-holiday opening despite supply chain challenges',
            'Final cost was 3% under the approved budget',
            'All regulatory inspections passed on first attempt',
            'Mall opened with 95% tenant occupancy, exceeding the 85% target'
          ],
          imageUrl: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          galleryImages: [
            'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/208575/pexels-photo-208575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '3',
          title: 'Banking System Optimization',
          category: 'Business Analysis',
          client: 'National Commercial Bank',
          date: 'April 2023 - July 2023',
          location: 'Pretoria, South Africa',
          description: 'A comprehensive analysis and optimization of the bank\'s customer service operations and digital banking platforms. The project aimed to reduce wait times, improve customer satisfaction, and enhance digital adoption rates.',
          challenge: 'The bank was experiencing high customer churn rates, long wait times at branches, and low adoption of their recently launched mobile banking platform. They needed to identify operational inefficiencies and develop solutions to improve service delivery across all channels.',
          solution: 'Our team conducted an in-depth analysis of all customer touchpoints, including mystery shopping exercises, process mapping, and data analysis of service metrics. We implemented customer journey mapping to identify pain points and opportunities. A comprehensive report with detailed recommendations was provided, followed by implementation support.',
          results: [
            'Average wait time at branches reduced by 42% within three months of implementation',
            'Mobile banking adoption increased by 35% following user experience improvements',
            'Customer satisfaction scores improved from 6.8/10 to 8.7/10',
            'Operational costs reduced by 15% through process optimization and resource reallocation'
          ],
          imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          galleryImages: [
            'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/5466803/pexels-photo-5466803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        }
      ];
      
      const foundProject = projects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
        document.title = `Boledi Management Consultancy Group - ${foundProject.title}`;
      }
    };
    
    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p 
              className="text-orange-400 font-semibold mb-2"
              data-aos="fade-up"
            >
              {project.category}
            </p>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              {project.title}
            </h1>
            <div 
              className="flex flex-wrap gap-4 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center">
                <User size={18} className="mr-2 text-orange-400" />
                <span className="text-gray-300">{project.client}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-orange-400" />
                <span className="text-gray-300">{project.date}</span>
              </div>
              <div className="flex items-center">
                <Building size={18} className="mr-2 text-orange-400" />
                <span className="text-gray-300">{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose lg:prose-lg max-w-none" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-600 mb-8">{project.description}</p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-8">{project.challenge}</p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 mb-8">{project.solution}</p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results</h3>
                <ul className="space-y-3 mb-8">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Service Category</p>
                  <p className="font-medium text-gray-900">{project.category}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Client</p>
                  <p className="font-medium text-gray-900">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Project Date</p>
                  <p className="font-medium text-gray-900">{project.date}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-medium text-gray-900">{project.location}</p>
                </div>
              </div>
              
              <hr className="my-6 border-gray-200" />
              
              <p className="text-gray-900 font-medium mb-4">Need a similar solution?</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-orange-500 text-white px-4 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
              >
                Contact Us About Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Project Gallery"
            title="Visual Highlights"
            description="Images from various stages of the project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {project.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-md h-64"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={image} 
                  alt={`${project.title} Gallery Image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link 
              to="/portfolio"
              className="inline-flex items-center text-gray-800 font-medium hover:text-orange-500 transition-colors mb-4 sm:mb-0"
            >
              <ArrowLeft size={18} className="mr-2" /> Back to Portfolio
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              Discuss Your Project <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;