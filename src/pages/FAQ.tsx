import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is MedZen?',
      answer: 'MedZen is a leading healthcare technology company dedicated to transforming medical care through innovative solutions. We provide advanced medical technologies, patient care systems, and digital health platforms that enhance healthcare delivery and improve patient outcomes across various medical specialties.'
    },
    {
      question: 'How can healthcare providers integrate MedZen solutions?',
      answer: 'Healthcare providers can integrate MedZen solutions through our comprehensive onboarding process. We offer training programs, technical support, and customized implementation plans. Our team works closely with medical professionals to ensure seamless integration with existing systems and workflows.'
    },
    {
      question: 'What medical specialties does MedZen serve?',
      answer: 'MedZen serves a wide range of medical specialties including cardiology, pediatrics, emergency medicine, radiology, oncology, and primary care. Our solutions are designed to be adaptable across different medical disciplines while maintaining specialty-specific features and compliance requirements.'
    },
    {
      question: 'What support and training do you provide?',
      answer: 'We provide comprehensive support including initial training programs, ongoing technical support, regular system updates, and access to our knowledge base. Our support team is available 24/7 for critical issues, and we offer both remote and on-site training options for healthcare teams.'
    },
    {
      question: 'How does MedZen ensure patient data security?',
      answer: 'Patient data security is our top priority. We implement enterprise-grade encryption, comply with HIPAA and other healthcare regulations, conduct regular security audits, and maintain strict access controls. Our systems are designed with privacy-by-design principles and undergo continuous security monitoring.'
    },
    {
      question: 'Can MedZen solutions integrate with existing hospital systems?',
      answer: 'Yes, our solutions are designed for seamless integration with existing Electronic Health Records (EHR), Hospital Information Systems (HIS), and other medical software. We support standard healthcare data formats and protocols, ensuring smooth data flow and minimal disruption to current workflows.'
    },
    {
      question: 'What are the costs associated with MedZen solutions?',
      answer: 'Our pricing is tailored to each healthcare organization\'s specific needs and scale. We offer flexible pricing models including subscription-based, per-user, and enterprise licensing options. Contact our sales team for a customized quote based on your requirements and to learn about available financing options.'
    },
    {
      question: 'How do you measure the impact of your solutions?',
      answer: 'We measure impact through various metrics including patient outcome improvements, healthcare efficiency gains, cost reductions, user satisfaction scores, and clinical performance indicators. We provide detailed analytics and reporting tools to help healthcare organizations track and demonstrate the value of our solutions.'
    },
    {
      question: 'How can I stay updated on MedZen developments?',
      answer: 'You can stay updated by subscribing to our newsletter, following us on social media, joining our healthcare professional network, and visiting our website regularly. We also host webinars, medical conferences, and training sessions where you can learn about our latest innovations and connect with other healthcare professionals.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our mission, initiatives, and how you can get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out to us for more information about our initiatives, partnerships, or how to get involved.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;