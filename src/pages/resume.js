import React from "react"

import "./base.css"
import "./resume.css"

const ResumePage = () => (
  <div>

    <div className="wrapper">
      <div className="section intro">
        <h2>Alpha Olomi</h2>
        <div className="item">
          <i className="fas fa-user-ninja"></i>
          <p>student, self-taught programmer</p>
        </div>

        <div className="item">
          <i className="fas fa-globe-africa"></i>
          <p>dar es salaam, tanzania</p>
          <i className="fab fa-github"></i>
          <a href="https://github.com/alphaolomi" className="item-link">
            <p>github</p>
          </a>
        </div>

        <div className="item">
          <i className="fas fa-phone"></i>
          <a href="tel:255-769-110-930" className="item-link">
            <p>(+255) 769 110 930</p>
          </a>

          <i className="fas fa-envelope"></i>
          <a href="mailto:hello@alphaolomi.com" className="item-link">
            <p>hello@alphaolomi.com</p>
          </a>
        </div>

        <div className="item tags">
          <p className="tag">javascript</p>
          <p className="tag">python</p>
          <p className="tag">node.js</p>
          <p className="tag">go</p>
          <p className="tag">php</p>
        </div>
      </div>

      <div className="section">
        <div className="headlines">
          <h2>Education/Online Courses</h2>
          <div className="line"></div>
        </div>
        <div className="list">
          <div className="list-item">
            <div className="list-item-header">
              <a className="section-item" href="https://www.udsm.ac.tz">Universty of Dar es salaam</a>
              <p className="list-item-header-date">Current</p>
            </div>
            <ul className="list-item-details">
              <li>Bachelor of Science in Computer Engineering and IT</li>
              <li>UDSM AI Community</li>
            </ul>
          </div>

          <div className="list-item">
            <div className="list-item-header">
              <a className="section-item" href={'/'}>Scholatica High School</a>
              <p className="list-item-header-date">2015-2017</p>
            </div>
            <ul className="list-item-details">
              <li>Physics, Chemisrty and Advanced Mathematics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="headlines">
          <h2>Personal Projects</h2>
          <div className="line"></div>
        </div>
        <div className="list">
          <div className="list-item" style={{ marginBottom: 15 + 'px' }}>
            <div className="list-item-header">
              <a className="section-item" href="https://ihicms.com">Grants Management Portal</a>
            </div>

            <div className="list-item-description">
              An information managemnt system.
                    </div>

            <div className="list-item-tags tags">
              <p className="tag">php</p>
              <p className="tag">mysql</p>
            </div>
          </div>


          <div className="list-item" style={{ marginBottom: 15 + 'px' }}>
            <div className="list-item-header">
              <a className="section-item" href="http://expectinafricasafari.com/">Expect In Africa Safari</a>
            </div>

            <div className="list-item-description">
              A tour company based in northern of Tanzania best-known and most widely trusted tour operator
                    </div>

            <div className="list-item-tags tags">
              <p className="tag">landing page</p>
              <p className="tag">safari portal</p>
            </div>
          </div>




          <div className="list-item" style={{ marginBottom: 15 + 'px' }}>
            <div className="list-item-header">
              <a className="section-item" href="https://optimaxmotorstz.com/">Optimax Motors tz</a>
            </div>

            <div className="list-item-description">
              Optimax Motors
                    </div>

            <div className="list-item-tags tags">
              <p className="tag">e commerce</p>
              <p className="tag">landing page</p>
            </div>
          </div>


          <div className="list-item" style={{ marginBottom: 15 + 'px' }}>
            <div className="list-item-header">
              <a className="section-item" href="https://idea.alphaolomi.com">Idea Initiative</a>
            </div>

            <div className="list-item-description">
              A capacity build application to mentor an idea.
                    </div>

            <div className="list-item-tags tags">
              <p className="tag">javascript</p>
              <p className="tag">express</p>
              <p className="tag">react</p>
            </div>
          </div>

          <div className="list-item" style={{ marginBottom: 15 + 'px' }}>
            <div className="list-item-header">
              <a className="section-item" href="https://github.com/alphaolomi/">More projects on github</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="headlines">
          <h2>Skills</h2>
          <div className="line"></div>
        </div>
        <div className="list">
          <div className="list-item">
            <div className="list-item-header">
              <p className="section-item" style={{ borderBottom: +'none' }}>Javascript</p>
            </div>

            <ul className="list-item-details">
              <li><a href="https://nodejs.org/en/">Node.js</a></li>

              <li><a href="https://threejs.org/">Electron</a></li>
              <li>
                <p>
                  <a href="https://reactjs.org/">React</a> (<a
                    href="https://github.com/ReactTraining/react-router">React
                                    Router</a>, <a href="https://redux.js.org/">Redux</a>, etc.)
                            </p>
              </li>
              <li>
                <p>
                  GraphQL related (<a href="https://github.com/prisma/graphql-yoga">graphql-yoga</a>, <a
                    href="https://www.apollographql.com/">apollo</a>, etc.)
                            </p>
              </li>
            </ul>
          </div>



          <div className="list-item">
            <div className="list-item-header">
              <p className="section-item" style={{ borderBottom: 'none' }}>Php</p>
            </div>

            <ul className="list-item-details">
              <li><a href="https://laravel.com">Laravel</a></li>
              <li><a href="https://codeigniter.com/">CodeIgniter</a></li>
            </ul>
          </div>

          <div className="list-item">
            <div className="list-item-header">
              <p className="section-item" style={{ borderBottom: 'none' }}>Python</p>
            </div>

            <ul className="list-item-details">
              <li><a href="https://www.djangoproject.com/">Django</a></li>
              <li><a href="http://flask.pocoo.org/">Flask</a></li>
              <li><a href="https://www.tensorflow.org/">Tensorflow</a></li>
              <li><a href="https://github.com/graphql-python/graphene-sqlalchemy">sqlalchemy</a>, etc.)</li>
            </ul>
          </div>

          <div className="list-item">
            <div className="list-item-header">
              <p className="section-item" style={{ borderBottom: 'none' }}>Other</p>
            </div>

            <ul className="list-item-details">
              <li>
                <a href="https://www.docker.com/">Docker (incl. docker-compose &amp; docker swarm)</a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a>
              </li>
              <li>
                <a href="https://jestjs.io/">Jest (JS Testing)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ResumePage
