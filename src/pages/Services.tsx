import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Globe, Zap, ArrowRight, Stethoscope, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Patient Care Excellence',
      description: 'Comprehensive patient care programs focused on improving health outcomes and patient satisfaction.',
      features: ['24/7 Patient Support', 'Personalized Treatment Plans', 'Remote Monitoring', 'Care Coordination'],
      status: 'Active',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Medical Safety Standards',
      description: 'Advanced safety protocols and quality assurance measures to ensure the highest standards of medical care.',
      features: ['Safety Protocols', 'Quality Assurance', 'Risk Management', 'Compliance Monitoring'],
      status: 'Active',
      color: 'blue'
    },
    {
      icon: Stethoscope,
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art diagnostic technologies and AI-powered analysis for accurate and rapid diagnosis.',
      features: ['AI Diagnostics', 'Imaging Technology', 'Lab Integration', 'Real-time Results'],
      status: 'Active',
      color: 'purple'
    },
    {
      icon: Brain,
      title: 'Digital Health Platform',
      description: 'Integrated digital health solutions connecting patients, providers, and medical data seamlessly.',
      features: ['Electronic Health Records', 'Telemedicine', 'Health Analytics', 'Mobile Apps'],
      status: 'In Development',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Medical Innovation Hub',
      description: 'Cutting-edge research and development of next-generation medical technologies and treatments.',
      features: ['R&D Programs', 'Clinical Trials', 'Technology Incubator', 'Innovation Partnerships'],
      status: 'Planned',
      color: 'teal'
    },
    {
      icon: Globe,
      title: 'Global Health Outreach',
      description: 'Expanding access to quality healthcare services in underserved communities worldwide.',
      features: ['Mobile Clinics', 'Telemedicine Access', 'Health Education', 'Community Programs'],
      status: 'Active',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      teal: 'bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Planned':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
              Discover our comprehensive medical programs and innovative healthcare solutions that are transforming patient care worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-2"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${getColorClasses(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-7 w-7" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 py-2.5 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience MedZen Solutions
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust MedZen for innovative medical solutions and exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;