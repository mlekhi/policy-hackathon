export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#2f4f97] mb-6">
              beyond advocacy,<br />into action
            </h2>
            <div className="h-1 w-24 bg-[#2f4f97] mb-8" />
          </div>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              The Ontario Policy Hackathon brings together people from all walks of life to address <span className="italic underline decoration-[#2f4f97] decoration-2">real policy challenges</span>.
            </p>
            <p>
              Using census surveys, lived experiences, or community insights, each team explores the <span className="italic text-[#2f4f97]">root of a specific challenge</span> and builds a solution. That could be a new data collection tool, a community program, or a pilot initiative backed by a clear <span className="font-bold underline decoration-[#2f4f97] decoration-2"> <a href="https://marcushumanities12.weebly.com/uploads/3/7/9/0/37903231/economic_policy_-_how_do_i_do_this.pdf" target="_blank" rel="noopener noreferrer">policy proposal</a></span> that could be presented and adopted by governments, institutions, or local organizations.
            </p>
            <p>
              It's a <span className="italic text-[#2f4f97] hover:text-[#1a365d] transition-colors">low-stakes, collaborative</span> way for anyone to learn how policy works. You don't need to have a specific background or skill set, just <span className="font-bold text-[#2f4f97] hover:text-[#1a365d] transition-colors">curiosity, creativity, and a passion for solving problems</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 