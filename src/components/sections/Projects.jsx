import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Mental Health Self-Identification (SIH Finals 2023)",
      description: "Web-based application using NLP and Deep Learning to assess mental health status.",
      techStack: ["Python", "NLP", "Deep Learning", "Flask"],
      githubLink: "https://github.com/As377507/SelfIdentifying-MentalHealth",
    },
    {
      title: "Ensemble GAN-Enhanced Tumor Detection",
      description: "AI model for intelligent pancreatic tumor detection using deep learning techniques.It is research Based Project",
      techStack: ["GAN", "Python", "Deep Learning", "CNN"],
      githubLink: "https://github.com/As377507",
    },
    {
      title: "Binary Image Classifier (CNN)",
      description: "A convolutional neural network model to classify human face images based on emotions.",
      techStack: ["TensorFlow", "CNN", "Python", "Keras"],
      githubLink: "https://github.com/As377507/Binary-Image-Classifier-using-CNN",
    },
    {
      title: "AI Content Structure Analyzer",
      description: "Python-based analyzer that evaluates HTML/Markdown content structure and entity density to optimize readiness for Google AI-generated summaries.",
      techStack: ["Python", "Flask", "spaCy", "NLP", "AI Scoring"],
      githubLink: "https://github.com/As377507/serp-strategist-ai-summary-optimizer",
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
