import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Indira Sneha</p>

      <div className="footer-links">
        <a href="mailto:indirasnehapadala2005@gmail.com">
          indirasnehapadala2005@gmail.com
        </a>

        <a href="mailto:se23ucse133@mahindrauniversity.edu.in">
          se23ucse133@mahindrauniversity.edu.in
        </a>
      </div>

      <div className="footer-buttons">
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
    </footer>
  );
}

export default Footer;