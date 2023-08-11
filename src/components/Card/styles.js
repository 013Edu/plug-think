import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
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

  @media(max-width:760px) {
    width: 280px;
    height: 340px;
  }

  @media(max-width:590px) {
    min-width: 280px;
    min-height: 340px;
  }
`;

export const ContentImage = styled.div`
  background-color: #000;
 

  img {
    background-color: #000;
  }
`;

export const ContentTitle2 = styled.div`
    background-color:#000;
    text-align: center;
    max-width: 300px;

    h3 {
        color: #fff;
        background-color:#000;
        font-size: 36px;

        @media (max-width: 670px) {
        font-size: 18px;
    }
    }
`;

export const ContentText = styled.div`
  background-color:#000;
  max-width: 300px;

  p {
    color: #fff;
    font-size: 18px;
    background-color:#000;
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
  background-color:#fff;
  padding: 0.5rem 1rem;
  color: #000;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s;
    background-color: #FF0066;
    color: #fff;
  }
`;



