import React, {useState, useEffect, useRef} from 'react'
import ProfilePic from '../images/profilepic1.png';
import styled from 'styled-components';
import {accordionData} from '../data/accordionData'
import { Heading } from '../globalStyles';

function About() {
  const [selected, setSelected] = useState(null);
  const refs = useRef(accordionData.map(() => React.createRef()));

  const toggleAccordion = (index) => {
    let content = refs.current;
    setSelected(index)
  
      if(selected === index){
        content[index].current.nextElementSibling.style.maxHeight = null;
        //set selected to null to toggle open close of accordion
        setSelected(null)
        console.log(selected);
      } else {
        content[index].current.nextElementSibling.style.maxHeight = content[index].current.scrollHeight + "px";
        console.log(selected);
      }
  }
  return (
    <div>
      <AboutSection>
        <AboutContainer>
        <Heading>About</Heading>
        <AboutMain>
          <AboutImg>
            <img src={ProfilePic} alt="profile-pic" />
          </AboutImg>

          <AboutInfo>
            {accordionData.map((item, index) =>{
              return ( 
                <div key={index}>
                  <Accordion onClick={()=>toggleAccordion(index)} ref={refs.current[index]}>
                  {item.title}
                  </Accordion>
                  <AccordionContent>
                   <p>{item.content}</p>
                  </AccordionContent>
                </div>

              )
            })}
          </AboutInfo>
        </AboutMain>
        
        </AboutContainer>
      </AboutSection>
    </div>
  )
}

export default About

const AboutSection = styled.div`
  margin-bottom: 8rem;
  @media screen and (max-width: 1160px) {
    margin-bottom: 0;
    min-height: 60vh;
  }
  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
  
`;

const AboutContainer = styled.div`
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  max-width: 1600px;
  @media screen and (max-width: 1160px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AboutMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImg = styled.div`
  width: 400px;
  height: 400px;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media screen and (max-width: 1160px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
    margin-bottom: 80px;
  }
`;

const AboutInfo = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Accordion = styled.button`
  width: 100%;
  height: 50px;
  text-align: left;
  background: #0D0D0B;
  color: #fff;
  outline: none;
  border: none;
  font-size: 1.3rem;
  font-weight: 400;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  /* initially removes the padding of content  */
  margin: 20px 0;

  border-bottom: 2px solid #fff;
  margin-bottom: 2rem;
  /* initially removes the height of content  */
  max-height: 0;
  overflow: hidden;

  /* Animation when opening accordion */
  transition: max-height 0.2s ease-in-out;



  p:l {
    margin-bottom: 30px;
  }

  p {
    line-height: 1.6;
    font-weight: 300;
    a{
      font-weight: 700;
    }
  }
`;
