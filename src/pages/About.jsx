import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">ABOUT CAREERPATH</span>

          <h1>
            Building Skills,
            <span> Creating Careers</span>
          </h1>

          <p>
            We help students discover their potential, develop industry-ready
            skills, and prepare for exciting career opportunities. Our goal is
            to guide every student toward a brighter professional future.
          </p>

          <a href="#our-mission" className="about-button">
            Discover Our Purpose →
          </a>
        </div>

        <div className="about-hero-image">
          <img
            src="/student1.png"
            alt="Student preparing for a successful career"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-intro">
        <div className="about-section-heading">
          <span>WHO WE ARE</span>
          <h2>Your Career, Our Priority</h2>
        </div>

        <p>
          CareerPath is focused on helping students move from education toward
          employment. We encourage continuous learning, practical skill
          development, interview preparation, and career guidance so candidates
          can approach job opportunities with confidence.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision" id="our-mission">
        <div className="about-info-card">
          <div className="about-card-icon">🎯</div>

          <h3>Our Mission</h3>

          <p>
            To help students build confidence, strengthen their skills, and
            prepare for employment through career guidance and placement
            preparation.
          </p>
        </div>

        <div className="about-info-card">
          <div className="about-card-icon">🚀</div>

          <h3>Our Vision</h3>

          <p>
            To support students in achieving their career goals and becoming
            skilled professionals who are ready for future opportunities.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="about-section-heading">
          <span>WHY ASC InfoVision?</span>
          <h2>Helping You Move Forward</h2>
          <p>
            We focus on the essential steps that help candidates prepare for
            their professional journey.
          </p>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <span>📘</span>
            <h3>Skill Development</h3>
            <p>
              Improve your knowledge and develop practical skills for the
              workplace.
            </p>
          </div>

          <div className="about-feature">
            <span>💼</span>
            <h3>Interview Preparation</h3>
            <p>
              Prepare for interviews and learn to present your abilities with
              confidence.
            </p>
          </div>

          <div className="about-feature">
            <span>🤝</span>
            <h3>Career Guidance</h3>
            <p>
              Get guidance to understand career options and prepare for suitable
              job opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to Take the Next Step?</h2>

        <p>
          Start your career journey with us. Connect with our team to learn more
          about placement preparation.
        </p>

        <a href="tel:+918423905926" className="about-button">
          Contact Us Today →
        </a>
      </section>
    </div>
  );
}

export default About;
