import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="scroll-section">
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="z-10 animate-fade-in-up">
          <h1 className="heading-xl mb-6">Senior Software Engineer</h1>
          <p className="text-body max-w-lg mb-8">
            Building scalable, reliable, and secure back-end services and
            full-stack systems using .NET, React, and Angular. Passionate about
            system performance, clean architecture, and Agentic AI-driven
            workflows.
          </p>
          <a href="#about" className="btn-bubbly mt-2">
            More About Me <ChevronRight size={18} />
          </a>
        </div>

        {/* Right Content - 3D Mockup */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          {/* The 3D Monitor Render */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] max-w-[800px] object-cover pointer-events-none z-0">
            <img
              src="./assets/dvlpr_hero_iso.png"
              alt="High Quality 3D Isometric Developer Desk"
              className="w-full h-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] mix-blend-multiply"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 50%, transparent 75%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 50%, transparent 75%)",
              }}
            />
          </div>

          {/* Small floating purple diamond from original design */}
          <div className="absolute bottom-10 left-20 w-16 h-16 animate-[float_4s_ease-in-out_infinite_reverse]">
            <img
              src="./assets/dvlpr_purple_diamond_1772298452728.png"
              alt="floating diamond"
              className="w-full h-full object-contain blur-[1px] opacity-80 mix-blend-multiply grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
