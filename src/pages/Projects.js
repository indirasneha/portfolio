import "./Projects.css";

const projects = [
  {
    title: "Heart Disease Detection",
    desc: "Achieved 98.5% accuracy using ML models like Logistic Regression and Random Forest.",
    tech: "Python • Scikit-learn • Pandas",
    link: "https://github.com/indirasneha/Heart_Disease_Detection"
  },
  {
    title: "Fraud Transaction Detection",
    desc: "Built fraud detection system using XGBoost and handled imbalanced data with SMOTE.",
    tech: "Python • XGBoost • ML",
    link: "https://github.com/indirasneha/Fraud_Transaction_Detection"
  },
  {
    title: "ASL Detection",
    desc: "Developed CNN-based model for real-time sign language recognition.",
    tech: "TensorFlow • OpenCV",
    link: "https://github.com/indirasneha/ASL-Detection"
  },
  {
    title: "Spotify UI Clone",
    desc: "Designed responsive music UI replicating Spotify interface.",
    tech: "HTML • CSS",
    link: "https://github.com/indirasneha/Spotify-UI-Clone"
  }
];

function Projects() {
  return (
    <div className="page">
      <div className="container">

        <h1>Projects</h1>

        <div className="grid">
          {projects.map((p, i) => (
            <div className="card" key={i}>
             <h2>{p.title}</h2>
<p>{p.desc}</p>
<span className="tech">{p.tech}</span>
<a href={p.link} target="_blank" rel="noreferrer">View Project</a> 
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;