import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 5rem 20rem;

  .mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media(max-width:1130px) {
    padding: 0;
  }
`;

export const ContainerText = styled.div`
  background-color: #fff;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  background-color: #fff;
  color: #FF0066;
  text-align: center;
  font-size: 3rem;

  @media(max-width:590px) {
    font-size: 2rem;
  }
`;

export const ContainerCaroussel = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  padding: 3rem;
  position: relative;
  margin-left: -30px;


  div {
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    color: #fff;
  }

`;

export const Button = styled.button`
  background-color:#000;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  
  @media(max-width:590px) {
        font-size: 12px;
        width: 80px;
        margin-left: -20px;
    }


  &:hover {
    transition: background-color 0.3s;
    background-color: #FF0066;
    color: #fff;
  }
`;
