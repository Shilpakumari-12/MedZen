import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Users,
  Target,
  BookOpen,
  Search,
  Edit
} from 'lucide-react';

const JournalPublication = () => {
  const features = [
    {
      icon: Edit,
      title: 'Manuscript Writing',
      description: 'Expert writing of research manuscripts following international guidelines and journal requirements.'
    },
    {
      icon: Target,
      title: 'Journal Selection',
      description: 'Strategic journal selection based on your research scope, impact factor, and target audience.'
    },
    {
      icon: FileText,
      title: 'Submission Support',
      description: 'Complete submission assistance including formatting, cover letters, and response to reviewers.'
    },
    {
      icon: Search,
      title: 'Literature Review',
      description: 'Comprehensive literature review and citation management for strong theoretical foundation.'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your research, target journals, and specific requirements.'
    },
    {
      step: 2,
      title: 'Manuscript Development',
      description: 'Our experts craft your manuscript following best practices and journal guidelines.'
    },
    {
      step: 3,
      title: 'Quality Review',
      description: 'Multiple rounds of review ensure accuracy, clarity, and adherence to standards.'
    },
    {
      step: 4,
      title: 'Journal Submission',
      description: 'We assist with submission and provide ongoing support throughout the review process.'
    }
  ];

  const benefits = [
    'Increased publication success rate',
    'Faster manuscript preparation',
    'Expert knowledge of journal requirements',
    'Professional formatting and presentation',
    'Ongoing support during peer review',
    'Confidentiality and data security'
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
            <FileText className="h-16 w-16 text-primary-600 dark:text-secondary-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Journal Publication Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert manuscript preparation and publication support to maximize your research impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Publication Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From manuscript writing to journal submission, we provide end-to-end support for your publication journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-lg mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Publication Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure your research gets published in the right journal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-600 dark:bg-secondary-600 text-white rounded-full mx-auto mb-6">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Publication Services?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our expert team has helped hundreds of researchers successfully publish their work in top-tier journals.
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
              className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-lg mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">95%</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Success Rate</p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-lg mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2-4</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Weeks Average</p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-lg mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Published Papers</p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-lg mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Partner Journals</p>
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
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl text-primary-100 dark:text-secondary-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you prepare and submit your manuscript for maximum publication success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 dark:bg-gray-900 dark:text-secondary-400 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 dark:hover:bg-gray-900 dark:hover:text-secondary-400 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JournalPublication;