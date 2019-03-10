import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => (
<footer class="footer">
  <div class="tabs is-centered">
    <ul>
      <li>
        <a href="https://github.com/heartdriven/heartdriven" target="_blank" rel="noopener noreferrer">
          <span class="icon">
            <FaGithub />
          </span>
          <span class="is-small">Found a bug?</span>
        </a>
      </li>
      <li class="is-small">
        <a href="https://www.linkedin.com/in/heartdriven/" target="_blank" rel="noopener noreferrer">
          <span class="icon">
            <FaLinkedin />
          </span>
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>
  </div>
</footer>
)

export default Footer