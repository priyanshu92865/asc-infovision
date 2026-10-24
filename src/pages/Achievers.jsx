import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Achievers.css";

const achieversData = [
  {
    id: 1,
    name: "Rahul Sharma",
    qualification: "B.Tech",
    company: "ABC Technologies",
    location: "Noida, Uttar Pradesh",
    package: "Placement Achieved",
    image: "/achievers/student1.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    qualification: "BCA",
    company: "XYZ Solutions",
    location: "Bengaluru, Karnataka",
    package: "Placement Achieved",
    image: "/achievers/student2.jpg",
  },
  {
    id: 3,
    name: "Aman Kumar",
    qualification: "MCA",
    company: "Tech Solutions",
    location: "Gurugram, Haryana",
    package: "Placement Achieved",
    image: "/achievers/student3.jpg",
  },
  {
    id: 4,
    name: "Sneha Singh",
    qualification: "B.Tech",
    company: "Digital Innovations",
    location: "Pune, Maharashtra",
    package: "Placement Achieved",
    image: "/achievers/student4.jpg",
  },
];

function Achievers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (previousIndex) => (previousIndex + 1) % achieversData.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentStudent = achieversData[currentIndex];

  const showPrevious = () => {
    setCurrentIndex(
      (previousIndex) =>
        (previousIndex - 1 + achieversData.length) % achieversData.length,
    );
  };

  const showNext = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex + 1) % achieversData.length,
    );
  };

  return (
    <main className="achievers-page">
      {/* Page Heading */}
      <section className="achievers-heading">
        <span className="achievers-badge">OUR SUCCESS STORIES</span>

        <h1>
          Meet Our <span>Achievers</span>
        </h1>

        <p>
          Every success story inspires another. Discover the students who are
          moving forward in their careers.
        </p>
      </section>

      {/* Automatic Student Slider */}
      <section className="achiever-slider">
        <button
          type="button"
          className="slider-arrow"
          onClick={showPrevious}
          aria-label="Previous achiever"
        >
          &#10094;
        </button>

        <div className="achiever-card" key={currentStudent.id}>
          {/* Student Photo */}
          <div className="achiever-photo">
            <img src={currentStudent.image} alt={currentStudent.name} />

            <span className="success-label">✓ {currentStudent.package}</span>
          </div>

          {/* Student Information */}
          <div className="achiever-details">
            <span className="student-tag">PLACEMENT SUCCESS</span>

            <h2>{currentStudent.name}</h2>

            <p className="student-qualification">
              {currentStudent.qualification}
            </p>

            <div className="student-info">
              <span className="info-icon">💼</span>

              <div>
                <small>Placed At</small>
                <h3>{currentStudent.company}</h3>
              </div>
            </div>

            <div className="student-info">
              <span className="info-icon">📍</span>

              <div>
                <small>Job Location</small>
                <h3>{currentStudent.location}</h3>
              </div>
            </div>

            <p className="achiever-message">
              Hard work, dedication, and the right guidance can open doors to
              new career opportunities.
            </p>

            <Link to="/" className="achiever-button">
              Start Your Journey →
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="slider-arrow"
          onClick={showNext}
          aria-label="Next achiever"
        >
          &#10095;
        </button>
      </section>

      {/* Slider Indicators */}
      <div className="slider-dots">
        {achieversData.map((student, index) => (
          <button
            key={student.id}
            type="button"
            className={`slider-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show ${student.name}`}
            aria-current={currentIndex === index ? "true" : undefined}
          />
        ))}
      </div>

      {/* Bottom Message */}
      <section className="achievers-bottom">
        <h2>Your Success Story Could Be Next!</h2>

        <p>
          Take the first step towards your career. Let us help you prepare for
          your next opportunity.
        </p>

        <Link to="/" className="achiever-button">
          Explore Career Opportunities →
        </Link>
      </section>
    </main>
  );
}

export default Achievers;
