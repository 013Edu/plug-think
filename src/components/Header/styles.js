
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.75rem 15rem;
  position: fixed;
  width: 80%;
  left: 200px;
  top: 30px;
  z-index: 2;
  border: 2px solid #000;

  position: ${props => (props.isSticky ? "fixed" : "absolute")};
  transform: ${props => (props.isSticky ? "translateY(10)" : "translateY(10)")};

  border-color: ${props => (props.isSticky ? "#757575" : "#000")};

  border-radius: ${props => (props.isSticky ? "999px" : "2px")};

  transition: ${props => (props.isSticky ? "0.3s" : "0")};

  padding: ${props => (props.isSticky ? "1rem 1rem" : "3.75rem 15rem")};

  justify-content: ${props => (props.isSticky ? "space-around" : "space-between")};
  
  @media(max-width: 1290px) {
      left: 130px;
      justify-content: center;
  }

  @media(max-width: 980px) {
      justify-content: start;
  }

  @media(max-width: 640px) {
      justify-content: center;
  }

  @media(max-width: 640px) {
      width: 100%;
      left: 0;
  }

  -webkit-box-shadow: 0px 28px 22px -11px rgba(0,0,0,0.05);
  -moz-box-shadow: 0px 28px 22px -11px rgba(0,0,0,0.05);
  box-shadow: 0px 28px 22px -11px rgba(0,0,0,0.05);

  img {
    min-width: 150px;

    @media(max-width: 500px) {
      width: 100px;
  }

    @media(max-width: 420px) {
      margin: 0 auto;
  }
  }

  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    right: 0 !important;
  }
  .menu__btn {
    position: fixed;
    top: 80px;
    right: 200px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
    display: none;
    background-color: transparent;

    @media (max-width: 1290px) {
      display: block;
    }

    @media(max-width: 980px) {
      right: 100px;
  }

  @media(max-width: 748px) {
      right: 50px;
      top: 70px;
  }
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #FF0066;
    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 30px;
    right: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #fff;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
  }
  .menu__item {
    display: block;
    padding: 12px 24px;
    color: #000;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
  }
  .menu__item:hover {
    background-color: #FF0066;
    color: #fff;
  }
`;

export const NavBar = styled.nav`
  
  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    list-style: none;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }

      li a {
        position: relative;
        transition: color 0.2s;
    }

    li a:hover {
        color: #FF0066;
    }

  li a::after {
        content: "";
        width: 0%;
        height: 2px;
        background-color: #FF0066;

        position: absolute;
        left: 0;
        bottom: -0.5rem;

        transition: width 0.2s;
    }

    li a:hover::after {
        width: 100%;
    }
  }

  @media(max-width:1290px) {
    & {
      display: none;
    }
  }
`;

export const SectionRegionsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 8rem;
  background-color: #000;
  gap: 1rem;
  position: fixed;
  width: 50%;
  left: 0px;
  z-index: 3;
  top: 20px;
  display: none;

  h3 {
    background-color: #000;
    color: #fff;
  }

  @media(max-width: 1290px) {
    display: none;
  }
`;

