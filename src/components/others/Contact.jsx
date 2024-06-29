import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div 
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6">
          <motion.h1 
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.div 
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p><strong>Mail:</strong> info@rhyno.in</p>
            <p><strong>Mobile no.:</strong> +91-9023987528</p>
            <p><strong>Location:</strong> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
