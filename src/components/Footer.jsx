import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>
            <span className="asc-text">ASC</span>
            <span className="infovision-text">Infovision</span>
          </h2>
          <p>Learn Today, Lead Tomorrow</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#location">Location</a>
          <a href="#achievers">Our Achievers</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ASC InfoVison. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
