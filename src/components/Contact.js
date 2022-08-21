import React from 'react'
import styled from 'styled-components';
import { Heading } from '../globalStyles';


const Contact = () => {
  return (
    <>
      <ContactContainer>
        <Heading>Contact</Heading>

        <ContactMain>
          <ContactLeft>
            <p>Right Now I am actively seeking for a position as a Web Designer/Front End Developer</p>
            <p>Feel free to reach me out at</p>
            <a href="mailto:cristiantoong@gmail.com" class="email-address">email: cristiantoong@gmail.com</a>
          </ContactLeft>
          <ContactRight>
            <ContactForm>
            <form action="POST" class="contact__form-main" method="POST"data-netlify="true" id="form">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name"/>
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email"/>
            <label for="message">Your Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">Submit</button>
            </form>
            </ContactForm>
          </ContactRight>
        </ContactMain>
      </ContactContainer>
    </>
  )
}



export default Contact

//container
const ContactContainer= styled.div`
  padding: 0 50px;
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  max-width: 1600px;

`;



const ContactMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1160px) {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContactLeft = styled.div`
  width: 40%;
  margin-top: 2rem;
  & > *{
    margin-bottom: 2rem;
    font-weight: 300;
  }

  a {
    color: #329345;
    font-weight: 500;
  }
  @media screen and (max-width: 1160px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactEmailAddress = styled.div`
  font-weight: 400;
`;


const ContactRight = styled.div`
  width: 40%;
  @media screen and (max-width: 1160px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.div`
  form {
    input {
      width: 100%;
      display: block;
      margin-bottom: 40px;
      border: none;
      outline: none;
      padding: 14px;
      border: 1px solid $white;
      color: $white;
      font-size: 1rem;
      margin-top: 10px;
      background-color: $black;
    }
    label {
      width: 100%;
      font-weight: 300;
    }
    textarea {
      width: 100%;
      resize: none;
      display: block;
      margin-bottom: 30px;
      border: none;
      outline: none;
      padding: 14px;
      border: 1px solid $white;
      color: $white;
      font-size: 1rem;
      margin-top: 10px;
      background-color: $black;
    }
    button {
      width: 100%;
      display: block;
      border: none;
      outline: none;
      padding: 16px;
      background: #329345;
      border: 1px solid $white;
      color: $white;
      font-size: $font-med;
      font-weight: 600;
      cursor: pointer;
      background-color: $black;
      font-weight: 300;
    }
  }
`;