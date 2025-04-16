import { motion } from 'framer-motion';

export default function TriangleDivider() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-32 bg-[#2f4f97] [clip-path:polygon(0_0,100%_0,100%_30%,0_100%)]"
    />
  );
} 