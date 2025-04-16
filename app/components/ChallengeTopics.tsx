import { motion } from 'framer-motion';
import { FaHome, FaLock, FaHospital, FaGraduationCap, FaLeaf, FaBus } from 'react-icons/fa';

export default function ChallengeTopics() {
  const topics = [
    { name: 'Housing', icon: FaHome },
    { name: 'AI & Cybersecurity', icon: FaLock },
    { name: 'Healthcare', icon: FaHospital },
    { name: 'Education', icon: FaGraduationCap },
    { name: 'Climate', icon: FaLeaf },
    { name: 'Transportation', icon: FaBus },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4f97] mb-4">
            challenge topics
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <motion.div 
                className="text-[#2f4f97] text-6xl mb-6"
                whileHover={{ 
                  rotate: [-5, 5, -5, 5, 0],
                  transition: { 
                    duration: 0.4,
                    ease: "easeInOut"
                  }
                }}
              >
                {<topic.icon />}
              </motion.div>
              <h3 className="text-xl font-normal text-[#2f4f97] text-center">
                {topic.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 