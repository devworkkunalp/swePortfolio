import { Github } from 'lucide-react';

export default function Header() {
  return (
    <div className="fixed-header">
      {/* Top Left Logo */}
      <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
        <span className="bg-black text-white px-1 py-0.5 rounded-sm">
          {'>_'}
        </span>
        KUNAL
      </div>

      {/* Top Right Buttons */}
      <div className="flex items-center gap-4">
        <a 
          href="./Dev-KunalPatil-4years.pdf" 
          download="Kunal_Patil_Resume.pdf"
          className="btn-bubbly !px-6 !py-2 !text-sm"
        >
          Download CV
        </a>
        <button 
          onClick={() => {
              const container = document.getElementById('main-scroll-container');
              const contactSection = document.getElementById('contact');
              if (container && contactSection) {
                container.scrollTo({ 
                   top: contactSection.offsetTop, 
                   behavior: 'smooth' 
                });
              }
          }}
          className="btn-bubbly !px-6 !py-2 !text-sm"
        >
          Contact
        </button>
      </div>

      {/* Bottom Left Icon */}
      <div className="fixed-bottom flex justify-between w-full pr-16 pl-8">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-black hover:text-accent-purple transition-colors">
          <Github size={28} />
        </a>
        
        {/* Scroll Down Indicator */}
        <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase origin-right -rotate-90 flex items-center gap-2 text-black/50 pb-8 absolute right-10 bottom-10">
          {'<'} Scroll Down
        </div>
      </div>
    </div>
  );
}
