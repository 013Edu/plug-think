import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 20rem;

  @media(max-width:1054px) {
    padding: 3rem 10rem;
  }

`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: end;

    @media(max-width:1054px) {
        flex-direction: column;
        align-items: center;
  }

`;

export const Title = styled.h1`
  font-size: 3rem;

  @media(max-width:1054px) {
    font-size: 2rem;
  }

  span {
    color: #FF0066;
    font-weight: bold;
  }
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 90px;
    min-width: 30px;

    @media(max-width:1290px) {
        width: 75px;
        margin-top: 2rem;
    }

    @media(max-width:960px) {
        width: 35px;
    }
  }

`
export const ContentButton = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  gap: 5rem;

  @media(max-width:1054px) {
    flex-direction: column;

  }
`

export const Button = styled.button`
  background-color: #fff;
  padding: 0.8rem;
  border: 0;
  font-size: 1.8rem;
  border-radius: 8px;
  font-weight: bold;
  color: #FF0066;
  min-width: 300px;
  text-align: center;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s;
    background-color: #FF0066;
    color: #fff;
  }
`
export const ContentButtonText = styled.div`

  display: flex;
  align-items: start;
  gap: 1rem;
  min-width: 300px;

  @media(max-width:1054px) {
    justify-content: center;
  }

  h2 {
    color: #fff;
    font-size: 18px;
    border-bottom: 1px solid #FF0066;
    padding-bottom: 0.5rem;
  }

  :hover {
    cursor: pointer;
  }
`




