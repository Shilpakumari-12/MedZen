import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Globe, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every solution we develop is centered around improving patient comfort and outcomes.'
    },
    {
      icon: Shield,
      title: 'Medical Excellence',
      description: 'We maintain the highest standards of medical practice and technological innovation.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with healthcare professionals to deliver integrated medical solutions.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Our commitment to quality ensures reliable, safe, and effective medical solutions.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and continuous innovation drive our medical breakthroughs.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Advanced diagnostic tools and precise treatment methods for optimal patient outcomes.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Leading cardiologist with 20+ years of experience in advanced medical technologies and patient care.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Director of Innovation',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Pioneering medical technology specialist focused on developing next-generation healthcare solutions.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Patient Care',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Experienced pediatrician dedicated to improving patient experiences and healthcare accessibility.'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/6129020/pexels-photo-6129020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Technology visionary with expertise in AI-driven medical diagnostics and digital health platforms.'
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a team of dedicated medical professionals, innovators, and technology experts committed to transforming healthcare through advanced medical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To revolutionize healthcare by providing innovative medical solutions that enhance patient outcomes, support healthcare professionals, and make quality healthcare accessible to everyone. We believe that advanced technology combined with compassionate care is the key to a healthier future.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Through our cutting-edge medical technologies and patient-centered approach, we strive to create a healthcare ecosystem where innovation, quality, and compassion work together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A world where advanced medical technology is seamlessly integrated into healthcare, where every patient receives personalized, high-quality care, and where healthcare professionals are empowered with the best tools and resources. We envision a future where healthcare is predictive, preventive, and accessible to all.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We aim to be the leading force in healthcare transformation, connecting medical professionals, patients, and technology to create better health outcomes worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide our work and define our commitment to excellence in healthcare innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the medical experts and innovators who are transforming healthcare with MedZen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-white dark:border-gray-700"
                  />
                  <div className="absolute inset-0 w-40 h-40 rounded-full mx-auto bg-gradient-to-br from-emerald-400 to-blue-400 opacity-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;