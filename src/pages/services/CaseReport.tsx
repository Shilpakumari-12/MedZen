import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Shield, Users, ArrowRight, Clock, Award, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseReport = () => {
  const processSteps = [
    {
      step: '01',
      title: 'We Accept Any Format',
      description: 'Send us your case as a Word file or even a hospital case sheet — we\'ll take care of the rest. (Word documents help us move faster.)'
    },
    {
      step: '02',
      title: 'What We Need to Begin',
      description: 'Full case details, relevant clinical images, patient consent form, and any supporting reports or tests.'
    },
    {
      step: '03',
      title: 'We Draft with Care',
      description: 'Our writers create a clear, well-structured report using CARE guidelines, and format it as per your target journal\'s requirements.'
    }
  ];

  const afterDraftSteps = [
    {
      icon: CheckCircle,
      title: 'You Review, We Revise',
      description: 'We\'ll send you the draft for feedback. Edits are made until you\'re fully satisfied.'
    },
    {
      icon: Target,
      title: 'We Handle Journal Submission',
      description: 'With your login, we\'ll take care of uploading, formatting, and correspondence.'
    },
    {
      icon: Shield,
      title: 'We Support Peer Review',
      description: 'If revisions are requested by the journal, we make them. If rejected, we resubmit to up to 4 other journals — no extra cost.'
    }
  ];

  const whyChooseUs = [
    'Structured as per CARE guidelines',
    'Journal-specific formatting and compliance',
    'Assistance with ethics and consent requirements',
    'Unlimited pre-submission revisions',
    'Post-submission support, including reviewer response drafting',
    'No additional fees for editorial revisions or resubmissions'
  ];

  const requirements = [
    'Full case details',
    'Relevant clinical images',
    'Patient consent form',
    'Any supporting reports or tests'
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
              <Heart className="h-16 w-16 text-primary-600 dark:text-secondary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Case Report Writing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Simple, Structured, Supportive
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
              How We Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined process ensures your case report meets the highest academic standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6">
                  {step.step}
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

      {/* Requirements Section */}
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
              What We Need to Begin
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-secondary-900/20 rounded-full mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-600 dark:text-secondary-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{requirement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After Draft Section */}
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
              After the First Draft
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {afterDraftSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-secondary-900/20 rounded-xl mb-6">
                  <step.icon className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
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
                What We Promise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                We promise dedication, not publication.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                While we ensure your case report meets the highest academic standards, final decisions rest with the journal.
              </p>
              <p className="text-lg font-semibold text-primary-600 dark:text-secondary-400">
                That said, we remain by your side—supporting your manuscript through each round of feedback, at no additional cost.
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
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-primary-600 dark:text-secondary-400 mr-4" />
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
              Ready to Write Your Case Report?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us help you create a compelling case report that meets journal standards.
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

export default CaseReport;