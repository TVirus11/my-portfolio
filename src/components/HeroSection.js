import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import Facebook from '../assets/images/fb.png';
import Twitter from '../assets/images/tw.png';
import Linkedin from '../assets/images/li.png';
import Instagram from '../assets/images/ig.png';

const HeroStyle = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-top: 8rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--gray-1);
      margin-bottom: 2.5rem;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: 2rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 50px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.4rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        width: 30px;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        margin-top: 3rem;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is </span>
            <span className="hero__name">Saurav Kumar</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance android developer for 3+ years. I love
              to design and develop android applications. I can design UI using
              figma also.
            </PText>
            <Button btnLink="/projects" btnText="See my Works" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/virus.1206/"
                    taget="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Ksaurav1206"
                    taget="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/saurav-kumar-768b5419a/"
                    taget="_blank"
                    rel="noreferrer"
                  >
                    <img src={Linkedin} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kauravvv/"
                    taget="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
