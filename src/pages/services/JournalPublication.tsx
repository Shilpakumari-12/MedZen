import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Shield,
  Award,
  Target,
  BookOpen,
  Search,
  Edit
} from 'lucide-react';

const JournalPublication = () => {
  const processSteps = [
    {
      step: '01',
      title: 'You Send the Thesis, We Do the Rest',
      description: 'Share your completed thesis — we\'ll convert it into a polished, journal-ready manuscript and suggest suitable indexed journals in your field.'
    },
    {
      step: '02',
      title: 'We Write It Fresh & Original',
      description: 'Our editors rewrite key sections (especially the Introduction) to meet journal standards, ensuring it\'s 100% human-written and follows the IMRaD format.'
    },
    {
      step: '03',
      title: 'Your Data, Clearly Presented',
      description: 'We review and refine your tables, stats, and graphs for clarity, accuracy, and visual appeal.'
    },
    {
      step: '04',
      title: 'We Work With You to Finalize',
      description: 'You review the draft, suggest edits, and we revise until the manuscript perfectly reflects your research.'
    }
  ];

  const whyChooseUs = [
    'Department-wise journal recommendations',
    '100% human-written, AI-free manuscripts',
    'Data verification & elegant table/graph restructuring',
    'Unlimited revisions before submission',
    'End-to-end support through peer review',
    'Submission assistance to up to 4 journals'
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
              Journal Publication
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From Thesis to Published Manuscript — How It Works
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
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

      {/* Promise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-700 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 max-w-4xl mx-auto">
              <Shield className="h-16 w-16 text-primary-600 dark:text-secondary-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🛡️ What We Promise – And What We Don't
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 text-left">
                <p>
                  We believe in transparency and trust. While we cannot guarantee journal acceptance (as it depends on editorial and peer review discretion), we stand by you every step of the way.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p>If your article is rejected, we continue to support you for up to 4 journal resubmissions—no extra charges.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p>We also help address editorial comments, peer reviewer suggestions, and improve the manuscript accordingly—all included in your package.</p>
                  </div>
                </div>
                <p className="font-semibold text-primary-600 dark:text-secondary-400 text-center">
                  There are no hidden costs. No extra fees. Just complete support.
                </p>
              </div>
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
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us help you transform your thesis into a published manuscript.
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

export default JournalPublication;