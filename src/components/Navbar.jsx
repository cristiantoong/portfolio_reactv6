import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoImage from '../images/ct-logo-full-white.svg'
import { menuData } from '../data/menuData'

function Navbar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setClick(!click); //toggle
  };

  const closeMobileMenu = () => {
    setClick(false)
  }

  const hideNavbarMobileMenu = () => {
    var newWidth = window.innerWidth;
    if (newWidth >= "700"){
      setClick(false);
    }
  }

  const NavColorOnScroll = () => {
    let scrollPos = window.scrollY;
    if (scrollPos >= 100){
        setActive(true);
    }
    else {
      setActive(false);
    }
  }
  
  useEffect(() => {
    hideNavbarMobileMenu();
  }, [])

  window.addEventListener('resize', hideNavbarMobileMenu)
  window.addEventListener('scroll', NavColorOnScroll)
  
  return (
    <>
      <Nav style={{backgroundColor: active?"#0d0d0b":null, opacity:0.8,transition:"background 0.3s ease"}}>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={LogoImage} alt="logo" />
          </NavLogo>
          <NavMenu>
            
      
          {menuData.map((item, index) => {
              const border = index === menuData.length-1 ? '1px solid #fff':'none';
              const padding = index === menuData.length-1 ? '0 24px':'0';
        
              return (
                <NavItem key={index}>
                  <NavLinks to={item.link} style={{border, padding}}>
                    {item.title}
                  </NavLinks>
                </NavItem>
              )
            })}

          </NavMenu>
        </NavbarContainer>
      </Nav>
      <MobileButton onClick={handleClick} click={click}>
        <span></span>
        <span></span>
      </MobileButton>
      <NavbarMobile click={click}>
        <MobileMenu>
          <Menus>
          {menuData.map((item, index) => {
              return (
                <MobileLinks to={item.link} onClick={closeMobileMenu} key={index}>
                  {item.title}
                </MobileLinks>
              )
            })}

          </Menus>
        </MobileMenu>
      </NavbarMobile>
    </>
  )
}

export default Navbar


const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: all 0.3s ease;
`;
const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 4rem;
    
`;

const NavLogo = styled(Link)`
  width: 42px;
    height: 42px;
    align-self: center;
    font-size: 2rem;

    img {
      width: 100%;
      height: 100%;
    }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 40px;
  cursor: pointer;
  
 
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
  text-decoration: none;
  height: 100%;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
      color: #ccc;
    }
`;

const NavbarMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({click}) => (click ? 'rgba(0,0,0,0.9)': '#0d0d0b')};
  overflow: hidden;
  width: ${({click}) => (click ? '100%':0 )};
  position: fixed;
  height: ${({click}) => (click ? '100%':0)};
  opacity: ${({click}) => (click ? 1: 0)};
  transition: opacity 1s ease-in-out;
  z-index: ${({click}) => (click ? 99: 'auto')};
`;

const MobileButton = styled.div`
  padding-top: 2rem;
  width: 32px;
  z-index: 99999;
  position: fixed;
  right: 50px;
  display: none;

  &:hover {
    cursor: pointer;
  }
  span {
    display: block;
    background: #fff;
    width: 100%;
    height: 2px;
    transition: all 0.3s ease;

    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menus = styled.div`
    display: flex;
    flex-direction: column;
`;
const MobileLinks = styled(Link)`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
`;