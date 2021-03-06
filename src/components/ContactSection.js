import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import PText from './PText';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  .text {
    background-color: var(--deep-dark);
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    font-size: small;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Want to Hire Me?" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="9709729308" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="official.skd.11@gmail.com"
            />
            <ContactInfoItem text="Bhubaneswar, Odisha, India" />
          </div>
          <div className="right">
            <PText>
              Please Provide Your Mobile Number and Email ID in the message box.
            </PText>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
