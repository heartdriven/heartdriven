import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaEnvelope,
  FaLocationArrow,
  FaSuitcase,
} from "react-icons/fa"

const Footer = () => (
  <>
    <footer className="footer">
      <div className="tabs is-centered">
        <ul>
          <li>
            <a
              href="https://github.com/heartdriven/heartdriven"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaGithub />
              </span>
              <span className="is-small">Report a bug?</span>
            </a>
          </li>
          <li className="is-small">
            <a
              href="https://www.linkedin.com/in/heartdriven/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaLinkedin />
              </span>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <footer className="footer-alternative">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <span className="icon">
              <FaMobileAlt />
            </span>{" "}
            +32 (0) 499 21 49 58 <br />
            <span className="icon">
              <FaEnvelope />
            </span>{" "}
            <a href="mailto:info@heartdriven.com">info@heartdriven.com</a>
          </div>
          <div className="column is-one-third has-text-centered">
            <span className="icon">
              <FaLocationArrow />
            </span>{" "}
            <span style={{ display: "inline-block" }}>
              Dokter Vannestestraat 4b
              <br />
              8510 MARKE
            </span>
          </div>
          <div className="column is-one-third has-text-centered">
            <span className="icon">
              <FaSuitcase />
            </span>{" "}
            <span style={{ display: "inline-block" }}>
              <strong>Heart Driven</strong> bvba
              <br />
              BE0838083859
            </span>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
