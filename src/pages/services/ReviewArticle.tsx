import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Shield, Users, ArrowRight, Clock, Award, Target, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewArticle = () => {
  const processSteps = [
    {
      step: '01',
      title: 'You Share the Topic',
      description: 'Have a topic or just an idea? We\'ll help shape it into a focused and relevant review based on your field.'
    },
    {
      step: '02',
      title: 'We Recommend Journals & Plan the Format',
      description: 'We suggest suitable journals and align the article format — including structure, word count, and referencing — as per their guidelines.'
    },
    {
      step: '03',
      title: 'Literature Search & Planning',
      description: 'Our team reviews the latest literature and organizes the content into clear, logical sections.'
    },
    {
      step: '04',
      title: 'We Draft the Review',
      description: 'Using SANRA standards, we write a well-balanced, ethically referenced narrative review with clarity and flow.'
    },
    {
      step: '05',
      title: 'You Review, We Refine',
      description: 'You can share your suggestions, and we\'ll revise the draft until it meets your expectations.'
    },
    {
      step: '06',
      title: 'We Handle Submission',
      description: 'Once finalized, we submit the article on your behalf using your journal login — including formatting and uploads.'
    },
    {
      step: '07',
      title: 'Full Post-Submission Support',
      description: 'We take care of revisions requested by reviewers. If the article is rejected, we resubmit to up to 4 other journals — at no extra cost.'
    }
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
              <BookOpen className="h-16 w-16 text-primary-600 dark:text-secondary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Review Article
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive Literature Reviews with Expert Analysis
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
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
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our comprehensive approach to creating high-quality review articles
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

      {/* Key Features Section */}
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
              Our Review Article Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Comprehensive Literature Search',
                description: 'Thorough review of the latest research and publications in your field'
              },
              {
                icon: Target,
                title: 'SANRA Standards',
                description: 'Written following Scale for the Assessment of Narrative Review Articles guidelines'
              },
              {
                icon: Shield,
                title: 'Ethical Referencing',
                description: 'Proper citation and ethical use of all referenced materials'
              },
              {
                icon: Award,
                title: 'Journal-Specific Formatting',
                description: 'Formatted according to your target journal\'s specific requirements'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-secondary-900/20 rounded-xl mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlights Section */}
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
              Why Our Review Articles Stand Out
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Expert Topic Development',
                description: 'We help transform your ideas into focused, relevant review topics that contribute meaningfully to your field.',
                color: 'emerald'
              },
              {
                icon: Target,
                title: 'Journal Alignment',
                description: 'Strategic journal selection and formatting to maximize your chances of acceptance.',
                color: 'blue'
              },
              {
                icon: Shield,
                title: 'Complete Support',
                description: 'From initial draft to final publication, including reviewer responses and resubmissions.',
                color: 'purple'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-secondary-900/20 rounded-xl mx-auto mb-6">
                  <highlight.icon className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Promise Section */}
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
                Our Commitment to Your Success
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  We don't just write your review article – we partner with you throughout the entire publication journey.
                </p>
                <p className="font-semibold text-primary-600 dark:text-secondary-400">
                  If your article is rejected, we'll help you resubmit to up to 4 other journals at no additional cost.
                </p>
                <p>
                  Our team handles all reviewer responses and revisions, ensuring your review article meets the highest academic standards.
                </p>
              </div>
            </div>
          </motion.div>
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
              Ready to Create Your Review Article?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us help you create a comprehensive review article that contributes to your field.
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

export default ReviewArticle;