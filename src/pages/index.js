import React from "react"
import { Link } from 'gatsby';
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <div>
    <SEO title="Alpha" />
    <h1>
      <div className="text">
        <div className="animate glitch-effect" data-text="Alpha">
          <span>Alpha</span>
        </div>
      </div>
      <div className="text">
        <div className="animate delay glitch-effect" data-text="Olomi">
          <span>Olomi</span>
        </div>
      </div>
    </h1>

    <div className="about">
      <h2>
        Hello World, <br />I am a software developer, and freelancer passioned
        to simplify life with code.
        <Link to='conrct'/>
      </h2>

      <p>
        My journey in software development started while a go when attending
        secondary School. I was always interested in coding activities and all
        kinds of computer hacks. This has helped me to widen my range of
        knowledge and gather experiences through various disciplines, such as
        back-end development, dev-ops and many more. Fast forward few years, I’m
        now focusing on product development, research, advising, coaching and
        entrepreneurship.
      </p>

      <p>
        My passion is something I developed with long and had lot of honesty,
        appetite and commitment. Over the past years I had the opportunity to
        drive and do hands-on work for some amazing brands.
      </p>

      <p>
        I’m currently studying Computer Engineering at University of Dar es
        Salaam and working as a Software Developer at Astatine Inc. In my spare
        time you’ll find me exploring and learning new things. I love
        technology, reading and mostly swimming.
      </p>

      <p>
        Feel free to reach out at{" "}
        <b>
          <a href="mailto:hello@alphaolomi.com">hello [at] alphaolomi.com</a>
        </b>{" "}
        or follow me on
      </p>
      <p>
        <b>
          <a
            href="https://wa.me/255769110930"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsup
          </a>
        </b>
        ,
        <b>
          <a
            href="https://facebook.com/AlphaOlomi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </b>
        ,
        <b>
          <a
            href="https://twitter.com/AlphaOlomi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </b>
        ,
        <b>
          <a
            href="https://www.linkedin.com/in/alphaolomi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </b>
        ,
        <b>
          <a
            href="https://www.instagram.com/_albertking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </b>{" "}
        or
        <b>
          <a
            href=" https://www.snapchat.com/add/albertcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snapchat
          </a>
        </b>
        .
      </p>
    </div>
  </div>
)

export default IndexPage
