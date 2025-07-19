import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, Shield, Users, ArrowRight, Clock, Award, Target, FileText, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Thesis = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Share Your Protocol & Data',
      description: 'We begin with your approved protocol and master chart. These form the base for both writing and statistical work.'
    },
    {
      step: '02',
      title: 'Chapter-by-Chapter Writing',
      description: 'We write and deliver your thesis in parts Introduction, Literature Review, Methods, Results, Statistics, Discussion, Conclusion, and Summary — so you stay involved throughout.'
    },
    {
      step: '03',
      title: 'Plagiarism Under Control',
      description: 'Your thesis is checked for plagiarism (kept under 10%) and comes with a certificate for your records.'
    },
    {
      step: '04',
      title: 'Final Formatting & PDF',
      description: 'Once you\'re happy with the content, we format everything and deliver a clean, print-ready PDF.'
    },
    {
      step: '05',
      title: 'Unlimited Revisions',
      description: 'We revise as needed  structure, flow, formatting — until you\'re completely satisfied. No hidden fees.'
    }
  ];

  const whyChooseUs = [
    'End-to-end thesis support — from data to final formatting',
    'Chapter-wise delivery with progress tracking',
    'Plagiarism kept under 10% (certificate included)',
    'Unlimited revisions at no extra cost',
    'Final submission in print-ready PDF format',
    'Transparent pricing with no hidden charges'
  ];

  const chapters = [
    { name: 'Introduction', icon: Target },
    { name: 'Literature Review', icon: FileText },
    { name: 'Methods', icon: Award },
    { name: 'Results', icon: BarChart },
    { name: 'Statistics', icon: BarChart },
    { name: 'Discussion', icon: Users },
    { name: 'Conclusion', icon: CheckCircle },
    { name: 'Summary', icon: FileText }
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
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-primary-600 dark:text-secondary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Thesis Writing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From Protocol to Perfection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              From Start to Submission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our comprehensive approach to thesis writing ensures quality and academic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Step {step.step.replace('0', '')}: {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Chapter-by-Chapter Delivery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver your thesis in organized chapters, keeping you involved throughout the process
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-full mx-auto mb-4">
                  <chapter.icon className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {chapter.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
              <Clock className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Important Note
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                If your entire dataset or results section is changed after the writing process is completed, additional charges will apply only because it requires rewriting major sections.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quality Assurance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Plagiarism Control',
                description: 'All content is checked and kept under 10% plagiarism with certificate provided',
                color: 'emerald'
              },
              {
                icon: FileText,
                title: 'Print-Ready Format',
                description: 'Final delivery in clean, professionally formatted PDF ready for submission',
                color: 'blue'
              },
              {
                icon: CheckCircle,
                title: 'Unlimited Revisions',
                description: 'We revise structure, flow, and formatting until you\'re completely satisfied',
                color: 'purple'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-secondary-900/20 rounded-xl mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Why Choose MedZen Writes?
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Thesis?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us help you create a comprehensive thesis that meets the highest academic standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
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

export default Thesis;