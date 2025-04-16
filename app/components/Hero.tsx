export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[#2f4f97] clip-diagonal z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            ONTARIO<br />
            POLICY<br />
            HACKATHON
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl">
            A 48-hour hands-on event where innovators come together to solve policy issues with real data.
          </p>
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