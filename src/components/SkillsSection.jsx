import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiDotnet, SiJenkins, SiJira } from 'react-icons/si';
import { TbBrandCSharp, TbBrandVisualStudio } from 'react-icons/tb';

const skillsLine1 = [
  { name: 'C#', icon: TbBrandCSharp },
  { name: '.NET Core', icon: SiDotnet },
  { name: 'SQL Server', icon: FaDatabase },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: FaReact },
  { name: 'Angular', icon: FaAngular },
];

const skillsLine2 = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Jenkins', icon: SiJenkins },
  { name: 'JIRA', icon: SiJira },
  { name: 'Visual Studio', icon: TbBrandVisualStudio }
];

export default function SkillsSection() {
  return (
    <section className="scroll-section" id="skills">
      <div className="main-container text-center">
        
        {/* Header Text */}
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">
          A problem is an opportunity to do your best.
        </p>
        <h2 className="heading-xl mb-8">
          Skills & Experience
        </h2>
        
        <div className="text-body max-w-3xl mx-auto space-y-4 mb-16">
          <p>
            I specialize in crafting robust and highly scalable enterprise applications.
          </p>
          <p>
            My experience includes building mission-critical back-end services using C# and .NET Core, optimizing databases with SQL Server and Entity Framework, and delivering responsive front-end solutions with React, Angular, and JavaScript. I also leverage AI-powered development tools to accelerate delivery while ensuring top-tier code quality.
          </p>
          <p>
            For a deeper look at my work and experience, visit my <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-accent-purple hover:underline">LinkedIn</a>
          </p>
        </div>

        {/* Skills Grid - Top Row */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 mb-12">
          {skillsLine1.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-4 text-zinc-600 hover:text-black transition-colors cursor-default">
                <Icon size={48} />
                <span className="text-sm font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Skills Grid - Bottom Row */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
          {skillsLine2.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-4 text-zinc-600 hover:text-black transition-colors cursor-default">
                <Icon size={48} />
                <span className="text-sm font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
