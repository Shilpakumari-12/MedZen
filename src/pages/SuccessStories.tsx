import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Heart, CheckCircle, ArrowRight, Calendar, MapPin } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Revolutionizing Emergency Care at Metro General Hospital',
      category: 'Emergency Medicine',
      location: 'New York, NY',
      date: 'March 2024',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      summary: 'Reduced patient wait times by 60% and improved diagnostic accuracy through AI-powered triage systems.',
      metrics: [
        { label: 'Wait Time Reduction', value: '60%', icon: TrendingUp },
        { label: 'Patients Served Daily', value: '500+', icon: Users },
        { label: 'Diagnostic Accuracy', value: '95%', icon: Award }
      ],
      challenge: 'Metro General Hospital was facing critical overcrowding in their emergency department, with average wait times exceeding 4 hours and diagnostic errors occurring due to rushed assessments.',
      solution: 'MedZen implemented an AI-powered triage system that automatically prioritizes patients based on symptoms, vital signs, and medical history. The system integrates with existing hospital infrastructure and provides real-time recommendations to medical staff.',
      results: [
        'Average wait time reduced from 4 hours to 1.5 hours',
        'Diagnostic accuracy improved from 78% to 95%',
        'Patient satisfaction scores increased by 40%',
        'Staff efficiency improved by 35%',
        'Emergency department capacity increased by 25%'
      ],
      testimonial: {
        quote: "MedZen's solution has transformed our emergency department. We're now able to provide faster, more accurate care to our patients while reducing stress on our medical staff.",
        author: 'Dr. Sarah Mitchell',
        role: 'Chief of Emergency Medicine'
      }
    },
    {
      id: 2,
      title: 'Transforming Pediatric Care with Digital Health Solutions',
      category: 'Pediatrics',
      location: 'Los Angeles, CA',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      summary: 'Enhanced patient engagement and treatment adherence in pediatric patients through gamified health apps.',
      metrics: [
        { label: 'Treatment Adherence', value: '85%', icon: Heart },
        { label: 'Patient Engagement', value: '92%', icon: Users },
        { label: 'Parent Satisfaction', value: '98%', icon: Award }
      ],
      challenge: 'Children\'s Hospital of LA struggled with low treatment adherence rates among pediatric patients, particularly for chronic conditions requiring long-term medication and lifestyle changes.',
      solution: 'MedZen developed a gamified mobile health platform specifically designed for children, featuring interactive medication reminders, health tracking games, and reward systems that encourage healthy behaviors.',
      results: [
        'Treatment adherence increased from 45% to 85%',
        'Reduced hospital readmissions by 30%',
        'Improved medication compliance by 70%',
        'Enhanced parent-child communication about health',
        'Decreased anxiety levels in pediatric patients by 50%'
      ],
      testimonial: {
        quote: "The gamified approach has made managing my daughter's diabetes actually fun. She looks forward to tracking her blood sugar and earning rewards for healthy choices.",
        author: 'Maria Rodriguez',
        role: 'Parent of Patient'
      }
    },
    {
      id: 3,
      title: 'Advancing Cardiac Surgery with AI-Assisted Diagnostics',
      category: 'Cardiology',
      location: 'Boston, MA',
      date: 'November 2023',
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      summary: 'Improved surgical outcomes and reduced complications through AI-powered cardiac imaging analysis.',
      metrics: [
        { label: 'Surgical Success Rate', value: '99.2%', icon: Award },
        { label: 'Complication Reduction', value: '45%', icon: TrendingUp },
        { label: 'Recovery Time', value: '-30%', icon: Heart }
      ],
      challenge: 'Boston Heart Institute needed to improve pre-surgical planning accuracy and reduce post-operative complications in complex cardiac procedures.',
      solution: 'MedZen\'s AI-powered cardiac imaging system provides detailed 3D reconstructions of patient hearts, predicts surgical risks, and recommends optimal surgical approaches based on thousands of similar cases.',
      results: [
        'Surgical success rate improved to 99.2%',
        'Post-operative complications reduced by 45%',
        'Average recovery time decreased by 30%',
        'Pre-surgical planning time reduced by 60%',
        'Patient confidence in procedures increased significantly'
      ],
      testimonial: {
        quote: "The AI-assisted diagnostics have given us unprecedented insight into each patient's unique cardiac anatomy. This technology has elevated our surgical precision to new heights.",
        author: 'Dr. Michael Chen',
        role: 'Chief Cardiac Surgeon'
      }
    },
    {
      id: 4,
      title: 'Remote Patient Monitoring in Rural Communities',
      category: 'Telemedicine',
      location: 'Rural Montana',
      date: 'September 2023',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      summary: 'Brought advanced healthcare to underserved rural areas through comprehensive telemedicine solutions.',
      metrics: [
        { label: 'Communities Served', value: '50+', icon: MapPin },
        { label: 'Travel Time Saved', value: '80%', icon: TrendingUp },
        { label: 'Healthcare Access', value: '300%', icon: Users }
      ],
      challenge: 'Rural communities in Montana faced significant barriers to healthcare access, with patients traveling up to 200 miles for specialist consultations and routine check-ups.',
      solution: 'MedZen deployed a comprehensive telemedicine network with portable diagnostic equipment, high-speed connectivity, and trained local health workers to facilitate remote consultations with specialists.',
      results: [
        'Reduced average travel time from 4 hours to 45 minutes',
        'Increased healthcare access by 300% in participating communities',
        'Enabled 24/7 emergency consultations',
        'Reduced healthcare costs for patients by 60%',
        'Improved chronic disease management in rural areas'
      ],
      testimonial: {
        quote: "MedZen has brought world-class healthcare to our doorstep. Our community members no longer have to choose between their health and the burden of long-distance travel.",
        author: 'Dr. James Wilson',
        role: 'Rural Health Coordinator'
      }
    }
  ];

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
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how MedZen is transforming healthcare outcomes across medical institutions worldwide through innovative technology and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Story Header */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {story.category}
                      </span>
                      <div className="flex items-center text-white text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.date}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {story.title}
                    </h2>
                    <p className="text-gray-200 text-lg">
                      {story.summary}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {story.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl"
                      >
                        <metric.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          The Challenge
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {story.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Our Solution
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {story.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Results Achieved
                        </h3>
                        <ul className="space-y-3">
                          {story.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 dark:text-gray-300">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                          "{story.testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {story.testimonial.author}
                          </div>
                          <div className="text-emerald-600 dark:text-emerald-400 text-sm">
                            {story.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare institutions that have transformed their patient care with MedZen's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;