import React, { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';


const archiveProjects = [
  { year: "2026", title: "Fake News Detection System", category: "NLP / Machine Learning", tech: ["Python", "FastAPI", "Machine Learning", "NLP", "SQLite"], repo: "https://github.com/YOUR_GITHUB_USERNAME/fake-news-detection", live: "" },
  { year: "2026", title: "Hand Gesture Emotion Recognition", category: "Computer Vision", tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"], repo: "https://github.com/YOUR_GITHUB_USERNAME/hand-gesture-emotion-recognition", live: "" }
];

const Archive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#0a0a0a] min-h-screen py-32 px-8 lg:px-16 text-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link 
            to="/#archive-link" 
            className="inline-flex items-center gap-2 text-[#f4f4f5]/50 hover:text-[#00E0C7] transition-colors font-sans text-sm tracking-widest uppercase"
          >
            <span>← Back to Main Portfolio</span>
          </Link>
        </div>
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-4 text-[#f4f4f5]">
            Project Archive
          </h1>
          <p className="text-[#f4f4f5]/60 font-sans text-lg">
            A comprehensive index of things I've built, deployed, or experimented with.
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[#f4f4f5]/50 text-xs tracking-widest uppercase font-sans">
                <th className="py-4 pr-4 font-normal">Year</th>
                <th className="py-4 pr-4 font-normal">Project</th>
                <th className="py-4 pr-4 font-normal hidden md:table-cell">Category</th>
                <th className="py-4 pr-4 font-normal hidden lg:table-cell">Built With</th>
                <th className="py-4 font-normal text-right">Link</th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((project, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-6 pr-4 text-[#f4f4f5]/50 font-sans text-sm">{project.year}</td>
                  <td className="py-6 pr-4 font-semibold text-[#f4f4f5] group-hover:text-[#00E0C7] transition-colors">
                    {project.title}
                  </td>
                  <td className="py-6 pr-4 text-[#f4f4f5]/60 text-sm hidden md:table-cell">{project.category}</td>
                  <td className="py-6 pr-4 text-[#f4f4f5]/40 font-sans text-xs hidden lg:table-cell">
                    {project.tech.join(" · ")}
                  </td>
                  <td className="py-6 text-right">
                    <div className="flex justify-end gap-4">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="text-[#f4f4f5]/50 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-[#f4f4f5]/50 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Archive;
