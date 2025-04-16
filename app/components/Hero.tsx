import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[#2f4f97] clip-diagonal z-0" 
      />
      
      {/* Subtle diagonal lines pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </motion.div>

      {/* Subtle wave overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <svg className="w-full h-full" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 0 50 Q 25 40, 50 50 T 100 50 T 150 50"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
            <Image src="/logo.png" alt="Ontario Policy Hackathon" width={600} height={600} className='py-10'/>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/80 max-w-2xl"
          >
            A weekend to solve policy issues with real data.
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
    </section>
  );
} 