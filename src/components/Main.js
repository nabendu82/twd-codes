import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Learn</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Web-development is one of the highly paid job and fulfilling career in the world. With the rise of  the startup ecosystem, anyone can be a developer. You don't need to be from a computer science background. 
          </p>
          <p>
            But people from non-computer background or people stuck in other non-coding jobs find it difficult to get into web-app development. There is a information overload, where people get confused on what technologies to learn and how to get inside. You only require six steps. Learn about them in this free ebook <a href="https://bit.ly/2UDwQNy" target="_blank">Free ebook</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Meet</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I do weekly live free webinar in which i will take you through the whole process to become a web-app developer.
          </p>
          <p>
            Whether you work in Sales, Production support, testing or are a student, youcan be a web-developer. It seems hard, but i will tell you a 6 month process to become a web-app developer and get that dream job.
            Click here to Register
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            My name is Nabendu Biswas and i have 16 years of IT industry experience and a decade of experience in building professional websites and front-end applications. I have started my career with Government Research lab, then worked in startup and top Investment Bank and my last job was in an awesome mid-sized company as Associate Architect.
          </p>
          <p>My first love is programming and i love the JavaScript Ecosystem(Mainly into ReactJS), through which I have designed & developed multiple products in my career.</p>
          <p>I have worked in Research lab, Network Security, Product, E-Commerce, Investment Bank industries as a developer.I have hands-on experience in Javascript, React, Redux, React Native, Node, Express & GraphQL.</p>
          <p>
          In 2018 i discovered my passion for tech blogging and teaching the thing, which i learned through blogs. I had become a dev.to top blogger also, but later switched to my own platform. Blogging led to writing books on GatsbyJS, which is published by top tech publisher Apress.
          </p>
          <p>Blogging led to Youtube and youtube and it led me to do the thing, which i love the second most, which is teaching. Initially i taught web-development through boot-camp on my YouTube channel, but then i had joined hands with startup, through which i had taught around 100 students and made them employable. </p>
          <p><b>Now, i teach both freshers and experienced people web-development and help them to break into the industry.</b>
          </p>
          <p>I am on a mission to help 10,000 people to get into web-app development and fireproof their career.</p>
          <div>👨‍💻 𝐅𝐞𝐰 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 𝐥𝐢𝐧𝐤𝐬</div>
          <a href="https://www.amazon.in/s?i=digital-text&rh=p_27%3ANabendu+Biswas" target="_blank">GatsbyJS Books</a>
          <br />
          <a href="https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ" target="_blank">YouTube</a>
          <br /> 
          <a href="https://thewebdev.tech" target="_blank">Blog</a>
          <br />
          <a href="https://linktr.ee/nabendu.biswas">Linktree</a>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <a className="contact-btn" href="https://twd-codes.ck.page/5ac21f764b" target="_blank">Contact</a>
          <ul className="icons">
          <li>
              <a
                href="https://www.linkedin.com/in/nabendu-biswas/"
                className="icon fa-linkedin" target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ?sub_confirmation=1" className="icon fa-youtube" target="_blank">
                <span className="label">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/nabendu.biswas.77/" className="icon fa-facebook" target="_blank">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nabendu.codes/" className="icon fa-instagram" target="_blank">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nabendu82"
                className="icon fa-twitter" target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
