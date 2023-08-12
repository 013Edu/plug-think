import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 480px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);

  @media(max-width:1930px) {
    width: 380px;
    height: 440px;
    gap: 0;
  }

  @media(max-width:1130px) {
    width: 100%;
    height: 440px;
    gap: 0;
  }

  @media(max-width:590px) {
    min-width: 280px;
    min-height: 340px;
  }
`;

export const ContentImage = styled.div`
  background-color: #fff;
 

  img {
    background-color: #fff;

    @media(max-width:1930px) {
        width: 110px;
        margin-top: 30px;
    }

  }
`;

export const ContentTitle2 = styled.div`
    background-color:#fff;
    text-align: center;
    max-width: 300px;

    h3 {
        color: #000;
        background-color:#fff;
        font-size: 30px;

        @media (max-width: 670px) {
        font-size: 18px;
    }
    }
`;

export const ContentText = styled.div`
  background-color:#fff;
  max-width: 300px;

  p {
    color: #000;
    font-size: 18px;
    background-color:#fff;
    text-align: center;

    @media (max-width: 670px) {
        font-size: 14px;
    }
  }
`;

export const ContentButton = styled.div`
  background-color:transparent;
`;

export const Button = styled.div`
  background-color:#000;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 8px;

  @media(max-width:1930px) {
        margin-bottom: 300px;
    }
`;



