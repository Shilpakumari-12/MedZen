import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  BookOpen, 
  ClipboardList, 
  Search, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'journal-publication',
      icon: FileText,
      title: 'Journal Publication',
      description: 'Expert manuscript preparation and journal submission support for maximum publication success.',
      features: ['Manuscript writing', 'Journal selection', 'Submission support', 'Peer review response'],
      link: '/services/journal-publication'
    },
    {
      id: 'thesis',
      icon: BookOpen,
      title: 'Thesis Writing',
      description: 'Comprehensive thesis and dissertation writing support for graduate and doctoral students.',
      features: ['Research proposal', 'Literature review', 'Methodology', 'Data analysis'],
      link: '/services/thesis'
    },
    {
      id: 'case-report',
      icon: ClipboardList,
      title: 'Case Reports',
      description: 'Professional case report writing that meets journal standards and guidelines.',
      features: ['Clinical documentation', 'Literature review', 'Discussion analysis', 'Journal formatting'],
      link: '/services/case-report'
    },
    {
      id: 'review-article',
      icon: Search,
      title: 'Review Articles',
      description: 'Systematic and narrative review articles with comprehensive literature analysis.',
      features: ['Systematic reviews', 'Meta-analysis', 'Narrative reviews', 'PRISMA guidelines'],
      link: '/services/review-article'
    },
    {
      id: 'protocol',
      icon: Award,
      title: 'Research Protocols',
      description: 'Detailed research protocol development for clinical trials and studies.',
      features: ['Study design', 'Methodology', 'Statistical planning', 'Regulatory compliance'],
      link: '/services/protocol'
    }
  ];

  const benefits = [
    'Expert medical writers with advanced degrees',
    'Adherence to international writing guidelines',
    'Plagiarism-free original content',
    'Unlimited revisions within scope',
    'Fast turnaround times',
    'Confidentiality guaranteed'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive medical writing services to support your research and publication goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-secondary-900/20 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-600 dark:text-secondary-400 hover:text-primary-700 dark:hover:text-secondary-300 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose MedZen?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We combine medical expertise with exceptional writing skills to deliver content that meets the highest academic and professional standards.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary-600 dark:text-secondary-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Process
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-secondary-900/20 rounded-full mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-600 dark:text-secondary-400">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Consultation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">We discuss your requirements and project scope</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-secondary-900/20 rounded-full mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-600 dark:text-secondary-400">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Research & Writing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Our experts conduct thorough research and create your content</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-secondary-900/20 rounded-full mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-600 dark:text-secondary-400">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Review & Revision</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Multiple quality checks and revisions ensure perfection</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-secondary-900/20 rounded-full mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-600 dark:text-secondary-400">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Delivery</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Final document delivered with ongoing support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 dark:text-secondary-100 mb-8 max-w-3xl mx-auto">
              Let us help you achieve your publication goals with our expert medical writing services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 dark:bg-gray-900 dark:text-secondary-400 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Us Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;