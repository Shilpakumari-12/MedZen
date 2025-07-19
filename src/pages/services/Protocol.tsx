import React from 'react';
import { motion } from 'framer-motion';
import { Clipboard, CheckCircle, Shield, Users, ArrowRight, Clock, Award, Target, FileText, BarChart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Protocol = () => {
  const requirements = [
    'Your research title',
    'Aims and objectives'
  ];

  const providedItems = [
    { name: 'Introduction', icon: Target },
    { name: 'Review of Literature', icon: BookOpen },
    { name: 'Materials and Methods', icon: Award },
    { name: 'Sample Size Calculation', icon: BarChart },
    { name: 'Case Proforma', icon: FileText },
    { name: 'Annexures', icon: Clipboard },
    { name: 'Informed Consent Form', icon: Shield },
    { name: 'Excel Dataset Template', icon: BarChart }
  ];

  const supportFeatures = [
    'Unlimited Revisions – We revise until you\'re fully satisfied, with no extra cost.',
    'University-specific Format – Every protocol is aligned to the format your institution follows.',
    'Change of Topic? – If the entire topic and structure need to be changed after drafting, only then will a small additional charge apply.'
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
              <Clipboard className="h-16 w-16 text-primary-600 dark:text-secondary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🧾 Protocol / Synopsis Writing
            </h1>
          </motion.div>
        </div>
      </section>

      {/* What We Need Section */}
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
              🧭 What We Need to Begin
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              To get started, we'll need:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-secondary-900/20 rounded-xl mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  • {requirement}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-800 p-6 rounded-xl max-w-2xl mx-auto">
              <Target className="h-12 w-12 text-secondary-600 dark:text-secondary-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                🔹 Don't have a topic yet?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No problem. We guide you through topic selection based on the PICO format, ensuring relevance, clarity, and research feasibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Provide Section */}
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
              ✍️ What We Provide in Your Protocol
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every protocol we draft includes:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {providedItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-full mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  • ✅ {item.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We structure everything according to your university's specific template and formatting guidelines—with accuracy and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Revisions & Support Section */}
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
              🔄 Revisions & Support
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">• {feature}</p>
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
              Ready to Start Your Research Protocol?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us help you create a comprehensive protocol that meets your university's standards.
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

export default Protocol;