import React from 'react'
import styled from 'styled-components'
import HeroImage from '../images/hero.jpg'
import { Link } from 'react-router-dom'
import { heroData } from '../data/heroData'


function Hero() {
  return (
    <div>
      <HeroSection>
        <HeroContainer>
        
        {heroData.map((item,index) => {
          return (
            <div key={index}>
            <HeroMain >
            <h1>
              {item.primary}
            </h1>
            <h3>{item.secondary}</h3>
            <p>
              {item.tertiary}
            </p>
            <Link to={item.ctaBtnLink}>{item.ctaBtn}</Link>
            </HeroMain>
            <HeroSocials>
              {item.heroSocials.map((item, index)=> {
                return (
                  <HeroSocial key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
                    <img src={item.src} alt="social" />
                  </a>
                  </HeroSocial>

                )
              })}

            </HeroSocials>
            </div>
          )
        })}
        </HeroContainer>
      </HeroSection>
    </div>
  )
}

export default Hero

const HeroSection = styled.section`
  min-height: 100vh;
  background: url(${HeroImage}) center/cover no-repeat;

  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  //overlay transparent bg
  &::before {
    content: "";
    position: absolute;
    background: black;
    opacity: 0.2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
const HeroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8rem;
  max-width: 1600px;
`;
const HeroMain = styled.div`
  position: relative;
  width: 60%;
  padding-bottom: 6rem;
  padding-top: 10rem;
  h1{
    font-size: 4rem;
    margin-bottom: 20px;
    font-family: "Playfair Display", serif;
    font-weight: normal;
  }
  h3 {
    font-size: 2rem; //48px
    font-weight: 400;
    margin-bottom: 2rem;
  }
  p{
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 3rem;
  }
  a {
    font-family: "Playfair Display", serif;
    border: 1px solid #fff;
    padding: 1rem 4rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 850px){
    width: 100%;
  }
  @media screen and (max-width: 700px){
    position: relative;
    width: 100%;
  }
  @media screen and (max-width: 400px){
    padding-top: 2rem;
  }
`;

const HeroSocials = styled.div`
  position: relative;
  display: flex;
  margin-top: 4rem;
  a {
    margin-right: 1rem;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const HeroSocial = styled.div``