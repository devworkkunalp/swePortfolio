export default function AboutSection() {
  return (
    <section className="scroll-section" id="about">
      <div className="main-container grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        
        {/* Massive faded T background from target site */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 text-[#00000008] font-black text-[30rem] leading-none select-none">
          T
        </div>

        {/* Left Header */}
        <div className="z-10 animate-fade-in-up">
          <h2 className="heading-xl mb-4">
            Hi, I'm Kunal<br />Software Engineer
          </h2>
          <p className="text-body opacity-80 uppercase tracking-widest text-sm font-semibold">
            Full-Stack Developer / AI Enthusiast
          </p>
        </div>

        {/* Right Content */}
        <div className="z-10 animate-fade-in-up space-y-6 text-body max-w-lg">
          <p className="font-semibold text-black">
            Professionally connected to backend architecture and full-stack development.
          </p>
          <p>
            I'm a detail-oriented Sr. Software Engineer with 4+ years of experience building scalable, reliable, and secure back-end services and full-stack systems using .NET, React, and Angular.
          </p>
          <p>
            I place a strong emphasis on service design, system performance, and clean architecture in fast-paced Agile environments. I am particularly passionate about leveraging Generative AI and Agentic AI–driven workflows.
          </p>
          <p>
            Currently, I am delivering healthcare platforms handling sensitive patient data at scale, with proven ability to ship high-quality solutions across healthcare, financial, and insurance domains.
          </p>
        </div>
      </div>
    </section>
  );
}
