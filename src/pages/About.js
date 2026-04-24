import "./About.css";

function About() {
  return (
    <div className="page">
      <div className="container about">

        <h1>About Me</h1>

        <p>
  I’m a third-year Computer Science student at Mahindra University who enjoys exploring how technology can solve real-world problems. My current interests lie in Java Full Stack Development and Quantum Computing, and I like learning by building projects and experimenting with new ideas.
</p>

<p>
  Through my coursework and hands-on projects, I’ve been developing a strong foundation in programming, data structures, and software development, while continuously improving my problem-solving skills.
</p>

<p>
  I enjoy working on practical applications, especially in machine learning and web development, where I can combine logic with creativity to build meaningful solutions.
</p>

<p>
  I have also been selected as an upcoming Quantum Computing Intern at Tech Mahindra, where I will be gaining exposure to emerging technologies and real-world applications in this domain.
</p>

<p>
  I’m always curious to learn, collaborate with others, and grow as a developer while exploring emerging technologies. I’m open to opportunities that help me improve both technically and personally.
</p>

        <h2>Skills</h2>

<div className="skills">

  <div className="skill-group">
    <h3>Languages</h3>
    <span>C</span>
    <span>C++</span>
    <span>Java</span>
    <span>Python</span>
    <span>JavaScript</span>
  </div>

  <div className="skill-group">
    <h3>Machine Learning</h3>
    <span>Pandas</span>
    <span>NumPy</span>
    <span>Scikit-learn</span>
    <span>Matplotlib</span>
    <span>Seaborn</span>
  </div>

  <div className="skill-group">
    <h3>Web Development</h3>
    <span>HTML</span>
    <span>CSS</span>
    <span>Bootstrap</span>
    <span>WordPress</span>
  </div>

  <div className="skill-group">
    <h3>Tools</h3>
    <span>Git</span>
    <span>GitHub</span>
    <span>VS Code</span>
    <span>Jupyter Notebook</span>
    <span>Google Colab</span>
  </div>

</div>

<h2>Experience</h2>

<div className="experience">

  <div className="exp-card">
    <h3>Full Stack Intern</h3>
    <p className="company">Electricon Wiz Pvt. Ltd. (IIT Hyderabad)</p>
    <p className="duration">March 2026 – Present</p>
    <ul>
      <li>Working on AI-powered application integrating machine learning with web technologies</li>
      <li>Developing frontend and backend for intelligent query-based system</li>
      <li>Collaborating with startup team on real-world product development</li>
    </ul>
  </div>

  <div className="exp-card">
    <h3>Machine Learning Intern</h3>
    <p className="company">Unified Mentor Pvt. Ltd.</p>
    <p className="duration">June 2025 – October 2025</p>
    <ul>
      <li>Built heart disease prediction model with 98.5% accuracy</li>
      <li>Developed models for fraud detection, mobile pricing, and ASL recognition</li>
      <li>Performed data preprocessing, EDA, and visualization</li>
    </ul>
  </div>

  <div className="exp-card">
    <h3>Web Developer</h3>
    <p className="company">Learning Space Foundation</p>
    <p className="duration">August 2025 – Present</p>
    <ul>
      <li>Developing and maintaining website using WordPress</li>
      <li>Improving UI, responsiveness, and user experience</li>
    </ul>
  </div>

</div>

      </div>
    </div>
  );
}

export default About;