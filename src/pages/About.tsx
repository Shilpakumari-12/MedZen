import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Globe, Shield, Zap, TrendingUp, BookOpen, FileText, Stethoscope } from 'lucide-react';

const About = () => {
  const impactStats = [
    {
      icon: BookOpen,
      number: '50+',
      label: 'Theses and Dissertations Completed'
    },
    {
      icon: FileText,
      number: '10+',
      label: 'Research Manuscripts Published'
    },
    {
      icon: Award,
      number: '10+',
      label: 'Case Reports Published'
    }
  ];

  const whyItMatters = [
    'Securing research fellowships',
    'Strengthening USMLE, PLAB, or foreign postgraduate applications',
    'Gaining clinical research roles and global recognition'
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
            <div className="text-6xl mb-6">🩺</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About MedZen Writes
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-secondary-400 mb-8">
              Because Your Research Deserves to Be Heard — Not Held Back
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <p>
              Juggling clinical duties, academic writing, and publication deadlines can feel impossible — especially when the expectations are high, but time and support are limited.
            </p>
            <p>
              We've seen brilliant research, unique cases, and important data go unpublished — not for lack of value, but for lack of writing resources and guidance.
            </p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              That's where MedZen Writes steps in.
            </p>
            <p>
              We support medical professionals across all levels — from PG students to seasoned doctors and health science researchers — by turning your work into journal-ready content without compromising your clinical responsibilities or peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">🎯</div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To create a world where clinical brilliance is never held back by academic writing challenges — and where every resident can publish, progress, and pursue a career they're proud of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objective Section */}
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
              <div className="text-4xl mr-4">💡</div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Objective</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To provide seamless support in completing your academic responsibilities — thesis, manuscript, case report, or synopsis — with precision, ethics, and ease. We handle the writing, formatting, revisions, and journal navigation, so you can focus on what matters: learning, healing, and growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">📈</div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Impact</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl mb-6 mx-auto">
                  <stat.icon className="h-8 w-8 text-primary-600 dark:text-secondary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
              <div className="text-4xl mr-4">🌍</div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Why It Matters</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              For many medical graduates, research publications are more than an academic checkbox. They're often essential for:
            </p>
            
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4 text-left">
                {whyItMatters.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-lg text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-12 max-w-4xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                Your research career shouldn't be delayed because of time constraints — and it won't be. With MedZen Writes by your side, you can continue caring for patients while we help you publish your potential.
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Because you deserve to rise — not just in rounds, but in research too.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why We Started MedZen Writes
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
              <p>
                We founded MedZen Writes after witnessing a widespread challenge across the medical community — clinicians, researchers, and students with valuable insights and rich data, yet overwhelmed by clinical demands and academic pressure.
              </p>
              <p>
                Many were expected to produce flawless theses, manuscripts, and case reports on tight deadlines — without the time, writing expertise, or support needed to succeed. As a result, important research remained unpublished, and opportunities like fellowships, global applications, and academic advancement slipped away.
              </p>
              <p className="text-xl font-semibold text-primary-600 dark:text-secondary-400 text-center">
                We started MedZen Writes to change that.
              </p>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Mission is Simple:
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-8">
              To make ethical, high-quality academic writing accessible, affordable, and stress-free — so no research goes unheard, and no career progress is held back due to time constraints or lack of writing resources.
            </p>
            <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 text-center">
              Because you deserve both — a thriving clinical journey and a successful research career.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;