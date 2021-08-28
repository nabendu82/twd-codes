import PropTypes from 'prop-types'
import React from 'react'
import pic03 from '../images/pic03.png'
import pic02 from '../images/pic02.jpg'
import pic01 from '../images/pic01.jpg'
import pic04 from '../images/pic04.jpg'
import transition01 from '../images/web-dev-transition.png'
import transition02 from '../images/CSS-flexbox-and-Grid.png'
import transition03 from '../images/CSS-projects.png'
import transition04 from '../images/JavaScript-projects.png'
import transition05 from '../images/Async-js-and-es6.png'
import transition06 from '../images/ReactJS-course.png'
import transition07 from '../images/ReactJS-bootcamp.png'
import transition08 from '../images/Web-dev_Projects.png'
import transition09 from '../images/Web-dev_bootcamp.png'
import hascodereview from '../images/myHashCode.png'
import trustpilotreview1 from '../images/trustpilotreview1.png'
import trustpilotreview2 from '../images/trustpilotreview2.png'
import transition10 from '../images/transition-main.png'

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
            <img src={pic01} alt="learn_pic" />
          </span>
          <p>
            Web-development is one of the highly paid job and fulfilling career in the world. With the rise of  the startup ecosystem, anyone can be a developer. You don't need to be from a computer science background. 
          </p>
          <p>
            But people from non-computer background or people stuck in other non-coding jobs find it difficult to get into web-app development. There is a information overload, where people get confused on what technologies to learn and how to get inside. I have created a course specially designed for Production Support, Testing or even non-computer background to get into development. Learn more about all courses <a href="https://school.twd.codes" target="_blank">here</a>.
          </p>
          <h3 className="major">Web-dev Transition System Bundle</h3>
          <div className="image_grid">
            <div class="grid_item">
              <img class="item" src={transition01} alt="transition01" />
              <h4>Web-dev Transition System</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition02} alt="transition02" />
              <h4>CSS Flexbox & Grid</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition03} alt="transition03" />
              <h4>CSS Projects</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition04} alt="transition04" />
              <h4>JavaScript Projects</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition05} alt="transition05" />
              <h4>Async JavaScript & ES6</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition06} alt="transition06" />
              <h4>The ReactJS Course</h4>
            </div>
          </div>
          <div className="center-btn">
            <a className="contact-btn" href="https://bit.ly/3gy4trO" target="_blank">Buy at ₹999</a>
          </div>
          <h3 className="major">ReactJS Bootcamp</h3>
          <div className="image_grid">
            <div class="grid_item">
              <img class="item" src={transition07} alt="transition07" />
              <h4>ReactJS Bootcamp</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition08} alt="transition08" />
              <h4>Web-dev Projects</h4>
            </div>
          </div>
          <div className="center-btn">
            <a className="contact-btn" href="https://bit.ly/3kwsNvi" target="_blank">Buy at ₹9,999</a>
          </div>
          <h3 className="major">Web-dev Bootcamp</h3>
          <div className="image_grid">
            <div class="grid_item">
              <img class="item" src={transition09} alt="transition09" />
              <h4>Web-dev Bootcamp</h4>
            </div>
            <div class="grid_item">
              <img class="item" src={transition08} alt="transition08" />
              <h4>Web-dev Projects</h4>
            </div>
          </div>
          <div className="center-btn">
            <a className="contact-btn" href="https://bit.ly/3kwJCGm" target="_blank">Buy at ₹14,999</a>
          </div>
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
            <img src={pic04} alt="meet" />
          </span>
          <p>
            I do weekly live free webinar in which i will take you through the whole process to become a web-app developer.
          </p>
          <p>
            Whether you work in Sales, Production support, testing or are a student, youcan be a web-developer. It seems hard, but i will tell you a 6 month process to become a web-app developer and get that dream job.
          </p>
          <div className="center-btn">
              <a className="contact-btn" href="https://bit.ly/3BcqSTi" target="_blank">Register Here</a>
            </div>
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
            <img src={pic03} alt="self_pic" />
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
          <a href="https://open.spotify.com/show/1ZHMluBRqUEJ0qjbZXc0xE" target="_blank">Podcast</a>
          <br /> 
          <a href="https://www.facebook.com/groups/thewebdev4u" target="_blank">Exclusive Facebook Group</a>
          <br />
          <a href="https://t.me/joinchat/H6llKYR0a05hNmI1">Exclusive Telegram Group</a>
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
          <h2 className="major">Connect</h2>
          <span className="image main">
            <img src={pic02} alt="self_pic" />
          </span>
          <p>
          I know that you must be receiving tons of emails from a lot of marketers, and don't want to connect. But this one is from a developer.
          </p>
          <p>
          I know that you might have seen my content on YouTube or LinkedIn. And then you found something valuable, which got us connected.
          </p>
          <p>
          I will promise you one thing...
          </p>
          <p>
          Every single email I send you, whether it's a webinar reminder or a content piece or, my only intention is to help you succeed in our life and career.
          </p>
          <a className="contact-btn" href="https://twd-codes.ck.page/5ac21f764b" target="_blank">Connect</a>
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
        <article
          id="reviews"
          className={`${this.props.article === 'reviews' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Reviews</h2>
          <span className="image main">
            <img src={transition10} alt="transition10" />
          </span>
          <h3 className="major">MyHashCode Review</h3>
          <p>
          I have taught JavaScript and ReactJS to around 70 students in a edtech startup MyHashCode in the Month of June and July, 2021 and really happy to see all of them created awesome Reactjs projects and learnt a lot from it.
          </p>
          <p>
          Most of these students knew basic HTML, CSS and JavaScript when came for the #internship and i taught them Advanced JavaScript and ReactJS.
          </p>
          <p>
          It feels so great to get positive feedback from them and knowing that they have learnt from me. Below is the LinkedIn link for the reviews.
          </p>
          <div class="image_flex">
            <img src={hascodereview} alt="hascodereview" />
          </div>
          <div style={{ marginTop: '15px'}}>
            <a className="contact-btn" href="https://www.linkedin.com/feed/update/urn:li:activity:6835641954345226240" target="_blank">MyHashCode Review</a>
          </div>
          <hr />
          <h3 className="major">Trustpilot Reviews</h3>
          <p>
            Got some awesome reviews for my course <a href="https://school.twd.codes" target="_blank">Web-dev Transition System</a> on TrustPilot.
          </p>
          <div class="image_flex">
            <img src={trustpilotreview1} alt="trustpilotreview1" />
            <img src={trustpilotreview2} alt="trustpilotreview2" />
          </div>
          <div style={{ marginTop: '15px'}}>
            <a className="contact-btn" href="https://www.trustpilot.com/review/twd.codes" target="_blank">Trustpilot Review</a>
          </div>
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
