import { ChevronUp, ChevronRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="scroll-section" id="contact">
      <div className="main-container grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative h-full">
        
        {/* Left Side 3D Globe */}
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="w-[120%] max-w-[800px] absolute right-[-5%] lg:right-[0%]">
            <img 
              src="./assets/dvlpr_globe_light.png" 
              alt="3D Earth Globe" 
              className="w-full h-auto object-contain animate-[spin_100s_linear_infinite] mix-blend-darken filter contrast-125"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="z-10 animate-fade-in-up space-y-6 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-tight">
            What would you do if a software expert was just a click away?
          </h2>
          <p className="text-body pb-0">
            Whether you want to start a new project or just say hello, I'd love to hear from you.
            <br /><br />
            You can also follow me on <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-arrow mt-2 font-bold inline-flex items-center text-accent-purple">LinkedIn <ChevronRight size={18} /></a>
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-normal tracking-tight text-black hover:text-accent-purple transition-colors">
              <a href="mailto:devwork.kunalp@gmail.com">devwork.kunalp@gmail.com</a>
            </h3>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={() => {
            const container = document.getElementById('main-scroll-container');
            if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="absolute bottom-10 right-10 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase origin-right -rotate-90 flex items-center gap-2 text-black/50 hover:text-black transition-colors pb-8 z-50 cursor-pointer"
      >
        <ChevronUp size={16} className="rotate-90" />
        Back To Top
      </button>

    </section>
  );
}
