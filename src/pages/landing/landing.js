import React, { Component } from 'react';
import Hamburger from '../../components/hamburger/Hamburger'
import {Link} from 'react-router-dom';
import FeaturedProjects from './faeturesProjects';
import Title from '../../components/typography/title';
import Button from '../../components/button/button'
import './landing.scss'

class Landing extends Component {
  render() {
    return (
      <div className="landing-layout">
        <Hamburger />
        <div className="landing__header">
          <div className="header__whiteTriangle"></div>
          <div className="header__content">
            <p className="header__title">da<br />niel</p>
            <div className="header__description">
              <Title className="descr__title">Front End Web Developer</Title>
              <p className="descr__subtitle">I’m a developer at <strong>Bread Creative</strong>, a digital minimalist, an avid book worm, a quick learner & passionate about technology. <strong>Feuled by black coffee and a drive to be better than I was yesterday</strong>.</p>
              <div className="social-media">
                <div className="instagram social">
                  <div className="insta-icon icon"></div>
                  <div className="insta-num num">37.5k</div>
                </div>
                <div className="githab social">
                  <div className="git-icon icon"></div>
                  <div className="git-num num">1.2k</div>
                </div>
                <div className="google-plus social">
                  <div className="google-icon icon"></div>
                  <div className="google-num num">300k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing__about">
          <div className="about__content">
            <div className="about__img">
              <div className="content-img"></div>
            </div>
            <div className="about__descr">
              <Title>About Me</Title>
              <p>Born and Raised in Moldova, and currently <strong>working in London as a Front End Web Development</strong>, learn all about my skills and interests here</p>
              <Link to='/about'>
                <Button title="Read About Me" />
              </Link>
            </div>
          </div>
        </div>
        <div className="landing__works">
          <div className="whiteTriangle-right"></div>
          <div className="works__content">
            <div className="works__descr">
              <Title>What I've been working on</Title>
              <p>I spend lots of my free exploring new technologies and picking up new development projects. <br /> Take a look at what I've been working on recently.</p>
              <Link to='/work'>
                <Button title="See My Works" />
              </Link>
            </div>
            <div className="works__featured">
              <FeaturedProjects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;