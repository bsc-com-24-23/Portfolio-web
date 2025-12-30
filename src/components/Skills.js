import "../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
    
      <h2 className="section-title">
      <span>Skills</span>
      </h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Tailwind CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill">Node.js</div>
          <div className="skill">Express</div>
          <div className="skill">MySQL</div>
          <div className="skill">PostgreSQL</div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill">Git</div>
          <div className="skill">GitHub</div>
          <div className="skill">Figma</div>
          <div className="skill">Vercel</div>
          <div className="skill">Netlify</div>
        </div>

        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill">Java</div>
          <div className="skill">C++</div>
          <div className="skill">Python</div>
          <div className="skill">JavaScript</div>
        </div>
      </div>
    </section>
  );
}
