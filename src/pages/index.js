import React from "react"
import { FaGithub } from "react-icons/fa"

export default () => (
  <div className='container'>
    <h1>Heart Driven</h1>
    <p>
      Maybe you know the feeling: building your personal website is a difficult experience.
      I'm building a site to showcase my work, and hope to launch it somewhere this spring!
    </p>
    <p>
      Should you feel the need to contact me, see my details below:
    </p>
    <dl>
      <dt>Phone:</dt>
      <dd>+32 (0) 499 21 49 58</dd>
      <dt>E-mail:</dt>
      <dd><a href="mailto:info@heartdriven.com">info@heartdriven.com</a></dd>
    </dl>
    <footer>
      <a href="https://github.com/heartdriven/heartdriven" target="_blank" rel="noopener noreferrer"><FaGithub size="1.5em" /></a>
    </footer>
  </div>)
