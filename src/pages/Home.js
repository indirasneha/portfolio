import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div className="home">
<div className="container">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="left">

          <h1>
            Hi, I'm <span>Indira Sneha</span>
          </h1>

          <h2>AI/ML Engineer | Java Full Stack Developer</h2>

          <p className="highlight">
            Incoming Quantum Computing Intern @ Tech Mahindra
          </p>

          <p className="desc">
            I build machine learning models and full stack applications
            that solve real-world problems.
          </p>

          <p className="achievement">
            Built ML models with up to 98.5% accuracy
          </p>

          <div className="buttons">
            <a
              href="https://github.com/indirasneha"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/indira-sneha-padala-15475328a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="right">
          <img src={profile} alt="profile" />
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="home-bottom">

        <div className="info-card">
          <h3>Research Interests</h3>
          <p>
            Machine Learning, Java Full Stack, Quantum Computing,
            and building intelligent real-world applications.
          </p>
        </div>

        <div className="info-card">
          <h3>Personal Details</h3>
          <p><b>Name:</b> Indira Sneha Padala</p>
          <p><b>Phone:</b> +91-9505836974</p>
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:indirasnehapadala2005@gmail.com">
              indirasnehapadala2005@gmail.com
            </a>
          </p>
          <p>
            <b>College Email:</b>{" "}
            <a href="mailto:se23ucse133@mahindrauniversity.edu.in">
              se23ucse133@mahindrauniversity.edu.in
            </a>
          </p>
        </div>

      </div>

    </div>
    </div>
  );
}

export default Home;