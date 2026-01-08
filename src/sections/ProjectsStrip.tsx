const ProjectsStrip = () => {
  return (
    <section className="projects-strip">
      <div className="projects-strip-inner">
        <div className="projects-strip-label">PROJECTS · HIGHLIGHTS</div>
        <div className="projects-strip-track">
          <article className="project-card">
            <div className="project-card-thumb project-card-thumb--one" />
            <h3 className="project-card-title">Generative Sketchpad</h3>
            <p className="project-card-meta">AI · Product · Frontend</p>
            <p className="project-card-desc">
              Real-time canvas for exploring model-assisted drawing and
              interaction patterns.
            </p>
          </article>

          <article className="project-card">
            <div className="project-card-thumb project-card-thumb--two" />
            <h3 className="project-card-title">Prompt Playground</h3>
            <p className="project-card-meta">LLM · Tools</p>
            <p className="project-card-desc">
              A tool for designing, testing and visualizing complex prompt flows
              for multi-agent systems.
            </p>
          </article>

          <article className="project-card">
            <div className="project-card-thumb project-card-thumb--three" />
            <h3 className="project-card-title">Neon Poster Engine</h3>
            <p className="project-card-meta">Design · Motion</p>
            <p className="project-card-desc">
              Procedural poster generator with GSAP-driven motion previews and
              exportable frames.
            </p>
          </article>

          <article className="project-card">
            <div className="project-card-thumb project-card-thumb--four" />
            <h3 className="project-card-title">Studio Dashboard</h3>
            <p className="project-card-meta">Web · Data</p>
            <p className="project-card-desc">
              A minimal control room interface for monitoring experiments and
              deployments.
            </p>
          </article>

          <article className="project-card">
            <div className="project-card-thumb project-card-thumb--five" />
            <h3 className="project-card-title">OMAUKOL Index</h3>
            <p className="project-card-meta">Personal · Archive</p>
            <p className="project-card-desc">
              Living index of works, notes and visual experiments across code,
              AI and design.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectsStrip;
