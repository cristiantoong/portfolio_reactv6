import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Logo from '../images/ct-logo-full-white.svg'
import { heroData } from '../data/heroData'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterLogo>
          <Link to="/">
              <img src={Logo} alt="logo"/>
          </Link>
        </FooterLogo>
        <FooterCopyright>
        © <span id="current-year">{new Date().getFullYear()}</span>, Cristian To-ong
        </FooterCopyright>
      
          {heroData.map((item,i) => {
            return (
              <FooterSocials key={i}>
                {item.heroSocials.map((item,i)=> {
                return (
                  <a href={item.href} key={i} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt="social"/>
                  </a>
                )
              })}
              </FooterSocials> 
            )
          })}
      

      </FooterMain>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  padding: 3rem 4rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;

const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;
const FooterLogo = styled.div`
  width: 42px;
  height: 42px;
  align-self: center;
  font-size: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const FooterCopyright = styled.div`
  font-size: 1rem;
`;

const FooterSocials = styled.div`
  position: relative;
  /* margin-top: 4rem; */
  a{
    margin-right: 1rem;

    img {
      width: 25px;
      height: 25px;
    }
    @media screen and (max-width: 580px){
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  @media screen and (max-width: 580px){
    margin-top: 0;
  }
`;
