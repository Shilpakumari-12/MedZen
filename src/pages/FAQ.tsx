import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can use your services?',
      answer: 'Our services are designed for PG medical students (MD, MS, DNB), clinicians, researchers, and healthcare professionals from MBBS, BDS, Pharmacy, Nursing, and Life Sciences backgrounds.'
    },
    {
      question: 'Is my research data kept confidential?',
      answer: 'Yes, we follow strict data protection policies. Your documents and personal details are kept fully confidential and are never shared without your permission.'
    },
    {
      question: 'Do you provide plagiarism-free content?',
      answer: 'Absolutely. All our documents are checked with industry-standard plagiarism tools and come with a plagiarism report upon request.'
    },
    {
      question: 'Can I request changes after delivery?',
      answer: 'Yes, we offer unlimited post-delivery revisions until your document meets institutional or journal requirements.'
    },
    {
      question: 'Do you support journal submissions?',
      answer: 'Yes, we help format and submit your manuscript to reputed journals indexed in PubMed, Scopus, UGC-CARE, and more.'
    },
    {
      question: 'Do you guarantee publication in Journals?',
      answer: 'No. We don\'t provide a guaranteed publication in the journal, but we give strive hard to improve the quality of the manuscript and try upto 4 journals if the articles are rejected with the same cost.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment options based on the type of service you choose. Depending on the project, payment may be collected either in full upfront or in predefined stages (milestone-based). Each service—such as thesis writing, manuscript preparation, or statistical analysis—may follow a customized payment structure tailored to its scope and timeline.'
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
              Our team is here to help. Reach out to us for more information about our services, partnerships, or how to get involved.
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