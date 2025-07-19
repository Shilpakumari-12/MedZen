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
      description: 'We write and deliver your thesis in parts — Introduction, Literature Review, Methods, Results, Statistics, Discussion, Conclusion, and Summary — so you stay involved throughout.'
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
      description: 'We revise as needed — structure, flow, formatting — until you\'re completely satisfied. No hidden fees.'
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
              📖 Thesis Writing
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
              📌 Thesis Writing — From Start to Submission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      📌 Step {step.step.replace('0', '')}: {step.title}
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

      {/* Important Note Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
                ⚠️ Important Note
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                If your entire dataset or results section is changed after the writing process is completed, additional charges will apply — only because it requires rewriting major sections.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              💡 Why Choose MedZen Writes?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600"
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