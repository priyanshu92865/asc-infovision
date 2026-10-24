import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToRegistration) {
      const timer = setTimeout(() => {
        document.getElementById("registration")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        navigate("/", {
          replace: true,
          state: null,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.state, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    passingYear: "",
    age: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Candidate Registration*

Name: ${formData.name}
Higher Qualification: ${formData.qualification}
Passing Year: ${formData.passingYear}
Age: ${formData.age}
Phone: ${formData.phone}
Location: ${formData.location}
    `;

    const whatsappNumber = "918423905926";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🎓 Your Career, Our Priority</span>

          <h1>
            Get Placed with
            <span> the Right Guidance</span>
          </h1>

          <p className="hero-description">
            We help students build their skills, improve their confidence, and
            connect with opportunities for a brighter future.
          </p>

          <div className="benefits">
            <span>✓ Skill Development</span>
            <span>✓ Interview Preparation</span>
            <span>✓ Placement Support</span>
          </div>

          <div className="hero-contact">
            <a href="tel:+918423905926" className="contact-button call-button">
              ☎
              <span>
                <strong>Call Us</strong>
                <small>+91 84239 05926</small>
              </span>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              🚩
              <span>
                <strong>Our Location</strong>
                <small>View on Map</small>
              </span>
            </a>

            <a href="mailto:ascinfovision@gmail.com" className="contact-button">
              ✉
              <span>
                <strong>Email Us</strong>
                <small>Send an Email</small>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/student1.png"
            alt="Student preparing for a successful career"
          />

          <div className="image-message">
            <h3>Dream. Learn. Achieve.</h3>
            <p>Your future starts here!</p>
          </div>
        </div>
      </section>

      {/* Candidate Registration Form */}
      <section className="registration-section" id="registration">
        <div className="registration-heading">
          <span>START YOUR JOURNEY</span>
          <h2>Candidate Registration</h2>
          <p>
            Fill in your details and connect with us for placement assistance.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="qualification">Higher Qualification</label>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">Select qualification</option>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
              <option value="ITI">ITI</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="passingYear">Passing Year</label>
            <select
              id="passingYear"
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              required
            >
              <option value="">Select passing year</option>
              {Array.from(
                { length: 30 },
                (_, i) => new Date().getFullYear() + 5 - i,
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Enter your age"
              min="16"
              max="100"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter 10-digit mobile number"
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Current Location</label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="Enter city or district"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="whatsapp-submit">
            Send Details on WhatsApp →
          </button>

          <p className="form-note">
            Your details will open in WhatsApp for you to review and send.
          </p>
        </form>
      </section>

      {/* Contact Information */}
      <section className="contact-section" id="location">
        <div className="contact-card">
          <div className="contact-card-icon">☎</div>
          <h3>Call Us</h3>
          <p>Have questions? We are here to help.</p>
          <a href="tel:+918423905926">+91 84239 05926</a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">📍</div>
          <h3>Visit Us</h3>
          <p>Visit our institute for more information.</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            Get Directions →
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">✉</div>
          <h3>Email Us</h3>
          <p>We are happy to answer your questions.</p>
          <a href="mailto:ascinfovision@gmail.com">ascinfovision@gmail.com</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
