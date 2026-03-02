export default function Navigation({ activeSection, totalSections = 5 }) {
  return (
    <div className="fixed-side-nav">
      {Array.from({ length: totalSections }).map((_, idx) => (
        <div key={idx} className="flex items-center gap-4 group">
          <span 
            className={`text-xs font-semibold tracking-wider transition-colors duration-300 ${
              activeSection === idx ? 'text-black' : 'text-zinc-400'
            }`}
          >
            0{idx}
          </span>
          <div 
            className={`w-[2px] h-4 transition-all duration-300 ${
              activeSection === idx ? 'bg-black h-8' : 'bg-zinc-400'
            }`}
          />
        </div>
      ))}
    </div>
  );
}
