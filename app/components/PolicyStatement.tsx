import { motion } from 'framer-motion';

export default function PolicyStatement() {
  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#2f4f97] leading-relaxed">
          Canada has the potential to work better for everyone, but broken policies stand in the way. <br/>  <br/> It’s time to fix them together.

          </h2>
        </motion.div>
      </div>
    </section>
  );
} 