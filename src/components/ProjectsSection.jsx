import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Update dots when scrolling horizontally
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveSlide(index);
  };

  const scrollToSlide = (index) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: 'smooth'
    });
  };

  // Intercept vertical wheel events to scroll horizontally first
  const handleWheel = (e) => {
    if (window.innerWidth < 1024) return; // Disable horizontal capturing on mobile
    if (!scrollRef.current) return;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;

    // Slide logic
    if (isScrollingDown && activeSlide < 2) {
      e.preventDefault(); // Stop vertical scroll down
      e.stopPropagation();
      scrollToSlide(activeSlide + 1);
    } else if (isScrollingUp && activeSlide > 0) {
      e.preventDefault(); // Stop vertical scroll up 
      e.stopPropagation();
      scrollToSlide(activeSlide - 1);
    }
    // If at index 2 and scrolling down, or index 0 and scrolling up, we let the default behavior happen (scroll to next/prev section)
  };

  return (
    <section 
      className="scroll-section p-0 m-0 !overflow-y-auto lg:!overflow-hidden !items-start lg:!items-center !pt-24 lg:!pt-0" 
      id="projects" 
      style={{ position: 'relative' }}
      onWheel={handleWheel}
    >
      {/* Background Floating Spheres/Planets applied to the main container so they persist */}
      <img src="./assets/dvlpr_bubble.png" alt="Floating Glass Bubble" className="absolute top-[15%] left-[5%] w-[400px] h-auto object-contain pointer-events-none animate-[float_8s_ease-in-out_infinite] mix-blend-multiply opacity-80 z-0" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 70%)', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 70%)' }} />
      <img src="./assets/dvlpr_bubble.png" alt="Floating Glass Bubble" className="absolute top-[30%] right-[10%] w-[350px] h-auto object-contain pointer-events-none animate-[float_7s_ease-in-out_infinite_reverse] mix-blend-multiply opacity-70 z-0" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 70%)', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 70%)' }} />

      {/* Horizontal Scroll Container (Vertical on Mobile) */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-col lg:flex-row w-full h-full lg:overflow-x-auto lg:snap-x lg:snap-mandatory gap-16 lg:gap-0 pb-16 lg:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Slide 1: Intro */}
        <div className="w-full lg:min-w-[100vw] h-auto lg:h-full lg:snap-start flex items-center justify-center relative flex-shrink-0 py-4 lg:py-0">
          <div className="main-container text-center relative z-10 w-full px-4 md:px-0">
            <h2 className="heading-xl mb-6 tracking-tight">
              Portfolio & Previous<br />Projects
            </h2>
            <p className="text-body max-w-2xl mx-auto mb-10 leading-relaxed text-zinc-800 font-medium">
              I've built a variety of projects tailored to different aspects of each client's business.
              If you'd like to see more examples beyond what's showcased here, feel free to{' '}
              <span className="text-accent-purple font-bold">get in touch</span> — I'd be happy to share.
            </p>
            <button onClick={() => scrollToSlide(1)} className="btn-bubbly mt-2">
              See Projects <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide 2: Crown Clothing */}
        <div className="w-full lg:min-w-[100vw] h-auto lg:h-full lg:snap-start flex items-center justify-center relative flex-shrink-0 py-4 lg:py-0 lg:pt-20 bg-black/5 lg:bg-transparent rounded-2xl mx-4 lg:mx-0 p-6 lg:p-0">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-24">
            
            {/* Left side text */}
            <div className="z-10 order-2 lg:order-1 lg:pr-12 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2">
                Agentic AI & Developer Tools
              </p>
              <h2 className="heading-xl mb-8 leading-none">
                AI Developer Agent
              </h2>
              
              <div className="text-body space-y-6 text-zinc-700">
                <p>
                  A niche AI developer agent designed to onboard and assist junior developers.
                </p>
                <p>
                  <strong className="text-black">Highlights:</strong> Trained on specific project codebases and structural data. It understands architectural patterns and generates context-aware code, accelerating development by 60-70% while preserving design standards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center lg:justify-start w-full">
                {/* Removed proprietary link as requested */}
              </div>
            </div>

            {/* Right side image */}
            <div className="hidden lg:flex relative w-full aspect-video items-center justify-center order-1 lg:order-2">
              <img 
                src="./assets/dvlpr_crown_iso.png" 
                alt="Crown Clothing Laptop Mockup" 
                className="w-[120%] max-w-[800px] h-auto object-contain drop-shadow-2xl animate-[float_5s_ease-in-out_infinite] mix-blend-multiply"
                style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 75%)', maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 75%)' }}
              />
            </div>
            
          </div>
        </div>

        {/* Slide 3: Fit & Healthy */}
        <div className="w-full lg:min-w-[100vw] h-auto lg:h-full lg:snap-start flex items-center justify-center relative flex-shrink-0 py-4 lg:py-0 lg:pt-20 bg-black/5 lg:bg-transparent rounded-2xl mx-4 lg:mx-0 p-6 lg:p-0">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-24">
            
            {/* Left side image */}
            <div className="hidden lg:flex relative w-full aspect-[3/4] items-center justify-center lg:justify-end">
              <img 
                src="./assets/dvlpr_fit_iso.png" 
                alt="Fit & Healthy Mobile Mockup" 
                className="w-[90%] max-w-[500px] h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite_reverse] mix-blend-multiply filter contrast-125"
                style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 75%)', maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 75%)' }}
              />
            </div>

            {/* Right side text */}
            <div className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2">
                Enterprise Workforce Management
              </p>
              <h2 className="heading-xl mb-8 leading-none max-w-[400px]">
                Resource & Routing Planner
              </h2>
              
              <div className="text-body space-y-6 text-zinc-700">
                <p>
                  A comprehensive planning platform designed for managing employee schedules, routing, and maintenance operations based on complex business rules.
                </p>
                <p>
                  <strong className="text-black">Scale & Impact:</strong> Effectively managed and scheduled approximately 50,000 work orders. Built with .NET, SQL Server, and utilized Highcharts for advanced data visualization and dashboarding.
                </p>
              </div>

              <div className="mt-6 flex justify-center lg:justify-start w-full">
                {/* Removed enterprise link as requested */}
              </div>
            </div>
            
          </div>
        </div>

      </div>

      {/* Horizontal Nav Dots (Middle Bottom) - Hidden on Mobile */}
      <div className="hidden lg:flex absolute bottom-20 left-1/2 -translate-x-1/2 gap-4 z-50">
        {[0, 1, 2].map(idx => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-black scale-125' : 'bg-zinc-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
