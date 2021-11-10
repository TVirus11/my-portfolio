import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Saurav Kumar</h1>
          <PText>
            I am working as a freelance android developer for 3+ years. I love
            to design and develop android applications. I can design UI using
            figma also.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: 'Home', path: '/', type: 'Links' },
              { title: 'About', path: '/about', type: 'Links' },
              { title: 'Projects', path: '/projects', type: 'Links' },
              { title: 'Contact', path: '/contact', type: 'Links' },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '9709729308',
                path: 'tel: 9709729308',
              },
              {
                title: 'work.saurav.05@gmail.com',
                path: 'mailto: work.saurav.05@gmail.com',
              },
              {
                title: 'Tamando, Bhubaneswar, Odisha',
                path: 'https://www.google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Handles"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/virus.1206/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/Ksaurav1206',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/kauravvv/',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/saurav-kumar-768b5419a/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>All Rights Reserved | © 2021 - Saurav Kumar</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
