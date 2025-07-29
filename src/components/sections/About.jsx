import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML",
    "TailwindCSS",
  ];

  const backendSkills = ["Java","Spring Boot","Node.js", "Python", "MySQL", "Docker"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Passionate developer with expertise in <b>Java development, Software Development, AI/ML</b>, dedicated to building <b>scalable and innovative solutions</b>. 🚀
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="text-gray-300 space-y-4">
                <li>
                  <strong>B.Tech. in Computer Science and Engineering</strong>
                  <br /> Future Institute of Engineering and Management (Under
                  MAKAUT)
                  <br />{" "}
                  <span className="text-gray-400">July 2021 – July 2025</span>
                  <br /> <span className="font-semibold">CGPA:</span> 8.47
                </li>

                <li>
                  <strong>Higher Secondary (WBCHSE)</strong>
                  <br /> Naktala High School (2021)
                  <br /> <span className="font-semibold">Percentage:</span>{" "}
                  75.4%
                </li>

                <li>
                  <strong>Secondary (WBBSE)</strong>
                  <br /> Gandhi Colony Madhyamik Vidyalaya (H.S) (2019)
                  <br /> <span className="font-semibold">Percentage:</span>{" "}
                  72.42%
                </li>

                <li>
                  <strong>Subjects of Interest:</strong>
                  <br /> Data Structures and Algorithms, Object-Oriented
                  Programming, Database Management Systems, Deep Learning , System Design
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                🏆 Achievements & Extra-Curricular Activities{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    📌 Member of ACM Student Chapter
                  </h4>
                  <p>
                    Association of Computing Machinery (ACM) Student Chapter at
                    Future Institute of Engineering and Management (Dec 2023 –
                    Dec 2024).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">📌 Event Management</h4>
                  <p>
                    Organized and managed technical and non-technical events.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    📌 CTS Student Enrichment Program
                  </h4>
                  <p>
                    Active group member in the Cognizant Student Enrichment
                    Program 2023.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">🏆 SIH 2023 Finalist</h4>
                  <p>
                    Grand Finalist in Smart India Hackathon 2023, developing an
                    innovative mental health self-identification app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
