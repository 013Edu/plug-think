import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  gap: 20rem;
`;

export const ContainerTexts = styled.div`
  background-color: #fff;
  max-width: 660px;
  margin: 0 auto;
  padding-left: 3rem;

  p {
    background-color: #fff;
    color: #5E646B;

    @media(max-width:1290px) {
      text-align: center;
    }

    @media(max-width:636px) {
      font-size: 16px;
  }

  @media(max-width:400px) {
      text-align: left;
  }
  }
`;

export const TitleContainerTexts = styled.h2`
  background-color: #fff;
  color: #FF0066;
  font-size: 3rem;
  margin: 2rem 0;

  @media(max-width:636px) {
      font-size: 2rem;
      text-align: center;
  }

  @media(max-width:636px) {
      font-size: 1.5rem;
  }
`;

export const ContainerImage = styled.div`
  background-color: #fff;

  
  @media(max-width:1600px) {
      display: none;
    }

  img {
    background-color: #fff;
    border-radius: 177px 114px 1802px 300px;
    -webkit-border-radius: 1797px 304px 180px 200px;
    -moz-border-radius: 770px 1010px 1802px 200px;
    min-width: 400px;
  }
`;

export const ContainerAcordion = styled.div`
  background-color: #fff;
  
  @media(max-width:1290px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

