import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      color: red;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Saurav Kumar</span>
            </p>
            <h2 className="about__heading">A Freelance Android Developer</h2>
            <div className="about__info">
              <PText>
                I am from Jhankhand, India. A place known for its mineral
                resources.
                <br />
                <br />
                When I was in School, the android apps got my attention, I
                always wonder that how the apps work in the mobile phones,
                always trying to know the technology behind it, how to build
                them.
                <br />
                <br />
                So after finishing my 12th, I joined a B. Tech college and in
                2nd year started learning android development and now after 3
                years, I can develop different types of android application.
                <br />
                <br />I love to develop android apps as much as I Love to Eat,
                period.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Saurav Kumar" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="College"
              items={['Gandhi Institute For Technology (GIFT), Bhubaneswar']}
            />
            <AboutInfoItem
              title="School"
              items={['Lala Lajpat Rai Sr. Sec. School, Ranchi, Jharkhand']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem title="FrontEnd" items={['XML']} />
            <AboutInfoItem title="Languages" items={['Python', 'Java']} />
            <AboutInfoItem title="Design" items={['Photoshop', 'Adobe XD']} />
            <AboutInfoItem title="Database" items={['SQL', 'Firebase']} />
            <AboutInfoItem
              title="Other Skills"
              items={['OpenCV', 'TKinter', 'Adobe Premiere Pro']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2021 - "
              items={['Android Developer at House - E - Maggie']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
