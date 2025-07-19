import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "Who can use your services?",
      answer: "Our services are designed for PG medical students (MD, MS, DNB), clinicians, researchers, and healthcare professionals from MBBS, BDS, Pharmacy, Nursing, and Life Sciences backgrounds."
    },
    {
      id: 2,
      question: "Is my research data kept confidential?",
      answer: "Yes, we follow strict data protection policies. Your documents and personal details are kept fully confidential and are never shared without your permission."
    },
    {
      id: 3,
      question: "Do you provide plagiarism-free content?",
      answer: "Absolutely. All our documents are checked with industry-standard plagiarism tools and come with a plagiarism report upon request."
    },
    {
      id: 4,
      question: "Can I request changes after delivery?",
      answer: "Yes, we offer unlimited post-delivery revisions until your document meets institutional or journal requirements."
    },
    {
      id: 5,
      question: "Do you support journal submissions?",
      answer: "Yes, we help format and submit your manuscript to reputed journals indexed in PubMed, Scopus, UGC-CARE, and more."
    },
    {
      id: 6,
      question: "Do you guarantee publication in Journals?",
      answer: "No. We don't provide a guaranteed publication in the journal, but we give strive hard to improve the quality of the manuscript and try upto 4 journals if the articles are rejected with the same cost."
    },
    {
      id: 7,
      question: "What are your payment terms?",
      answer: "We offer flexible payment options based on the type of service you choose. Depending on the project, payment may be collected either in full upfront or in predefined stages (milestone-based). Each service—such as thesis writing, manuscript preparation, or statistical analysis—may follow a customized payment structure tailored to its scope and timeline."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
            <HelpCircle className="h-16 w-16 text-primary-600 dark:text-secondary-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our medical writing services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
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

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;