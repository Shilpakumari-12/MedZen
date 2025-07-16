import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Award, Heart, Users } from 'lucide-react';

const TestimonialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'doctors', name: 'Medical Professionals' },
    { id: 'patients', name: 'Patients & Families' },
    { id: 'hospitals', name: 'Healthcare Institutions' }
  ];

  const testimonials = [
    {
      id: 1,
      category: 'doctors',
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      institution: 'Metropolitan Hospital',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'MedZen has revolutionized our patient care approach. The innovative solutions and seamless integration have improved our efficiency by 40% while enhancing patient satisfaction. The AI-powered diagnostics have been particularly impressive.',
      specialty: 'Internal Medicine',
      experience: '15 years',
      featured: true
    },
    {
      id: 2,
      category: 'doctors',
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      institution: 'Heart Care Center',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The precision and reliability of MedZen\'s medical solutions are unmatched. It has transformed how we diagnose and treat cardiovascular conditions, leading to better patient outcomes and reduced recovery times.',
      specialty: 'Cardiology',
      experience: '20 years',
      featured: false
    },
    {
      id: 3,
      category: 'patients',
      name: 'Maria Rodriguez',
      role: 'Patient',
      institution: 'Children\'s Hospital LA',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The gamified health app for my daughter\'s diabetes management has been life-changing. She actually looks forward to tracking her blood sugar and taking her medication. The support from the MedZen team has been incredible.',
      condition: 'Pediatric Diabetes',
      treatmentDuration: '2 years',
      featured: true
    },
    {
      id: 4,
      category: 'doctors',
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatrician',
      institution: 'Children\'s Medical Group',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Working with MedZen has been exceptional. Their child-friendly approach and advanced technology make pediatric care more effective and less stressful for both patients and families.',
      specialty: 'Pediatrics',
      experience: '12 years',
      featured: false
    },
    {
      id: 5,
      category: 'hospitals',
      name: 'Dr. James Wilson',
      role: 'Hospital Administrator',
      institution: 'City General Hospital',
      image: 'https://images.pexels.com/photos/6129020/pexels-photo-6129020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'MedZen\'s comprehensive healthcare solutions have streamlined our operations and improved patient care across all departments. The ROI has exceeded our expectations, and staff satisfaction has increased significantly.',
      department: 'Hospital Administration',
      hospitalSize: '500+ beds',
      featured: true
    },
    {
      id: 6,
      category: 'patients',
      name: 'Robert Thompson',
      role: 'Patient',
      institution: 'Metro General Hospital',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'After my heart surgery, the remote monitoring system gave me peace of mind during recovery. The medical team could track my progress in real-time, and I felt supported every step of the way.',
      condition: 'Cardiac Surgery Recovery',
      treatmentDuration: '6 months',
      featured: false
    },
    {
      id: 7,
      category: 'doctors',
      name: 'Dr. Lisa Park',
      role: 'Emergency Medicine Physician',
      institution: 'Regional Medical Center',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'In emergency situations, every second counts. MedZen\'s rapid diagnostic tools and streamlined processes have helped us save more lives and provide faster, more accurate treatment to our patients.',
      specialty: 'Emergency Medicine',
      experience: '10 years',
      featured: false
    },
    {
      id: 8,
      category: 'patients',
      name: 'Jennifer Adams',
      role: 'Patient Family Member',
      institution: 'University Hospital',
      image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'When my elderly father was diagnosed with Alzheimer\'s, MedZen\'s care coordination platform helped our family navigate the complex healthcare system. The communication tools kept everyone informed and involved.',
      condition: 'Alzheimer\'s Care',
      treatmentDuration: '3 years',
      featured: true
    }
  ];


  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
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
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from healthcare professionals, patients, and institutions who have experienced the transformative power of MedZen's innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '10,000+', label: 'Satisfied Patients' },
              { icon: Award, number: '500+', label: 'Medical Professionals' },
              { icon: Heart, number: '98%', label: 'Satisfaction Rate' },
              { icon: Star, number: '4.9/5', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <stat.icon className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
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


      {/* Category Filter */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Community Says
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 relative ${
                    testimonial.featured ? 'ring-2 ring-emerald-500' : ''
                  }`}
                >
                  {testimonial.featured && (
                    <div className="absolute -top-3 left-6 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 relative">
                    <Quote className="h-6 w-6 text-emerald-600 dark:text-emerald-400 absolute -top-2 -left-2" />
                    <p className="pl-4 italic">"{testimonial.content}"</p>
                  </blockquote>

                  {testimonial.specialty && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Specialty:</span> {testimonial.specialty}
                      {testimonial.experience && (
                        <span className="ml-4">
                          <span className="font-medium">Experience:</span> {testimonial.experience}
                        </span>
                      )}
                    </div>
                  )}

                  {testimonial.condition && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Condition:</span> {testimonial.condition}
                      {testimonial.treatmentDuration && (
                        <span className="ml-4">
                          <span className="font-medium">Duration:</span> {testimonial.treatmentDuration}
                        </span>
                      )}
                    </div>
                  )}

                  {testimonial.department && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Department:</span> {testimonial.department}
                      {testimonial.hospitalSize && (
                        <span className="ml-4">
                          <span className="font-medium">Hospital Size:</span> {testimonial.hospitalSize}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of the healthcare revolution. Experience the difference MedZen can make for your patients and practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Share Your Story
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Started Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust MedZen for innovative medical solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;