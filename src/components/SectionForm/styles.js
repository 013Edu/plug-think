import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 20rem;
  padding: 2rem 3rem;
  justify-content: center;

  @media (max-width: 1590px) {
    flex-direction: column;
    gap: 10rem;
  }
`;

export const ContentImage = styled.div`
    position: relative;
    background-color: #fff;
    z-index: 1;
`;

export const Image = styled.img`
    background-color: #fff;
    border-radius: 122px 200px 200px 200px;
    -webkit-border-radius: 122px 400px 200px 200px;
    -moz-border-radius: 122px 200px 200px 200px;
    z-index: 30;

    @media (max-width: 740px) {
        width: 340px;
    }
`;

export const ImageSecondary = styled.img`
    top: -30px;
    left: 330px;
    width: 300px;
    z-index: -1;
    background-color: #fff;
    position: absolute;

    @media (max-width: 740px) {
        width: 240px;
        left: 180px;
    }

    @media (max-width: 515px) {
        left: 100px;
    }
`;

export const ContentForm = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3rem;

 
`;

export const TitleForm = styled.h2`
  background-color: #fff;
  color: #FF0066;
  font-size: 3rem;
  text-align: left;
  max-width: 600px;

  @media (max-width: 500px) {
    font-size: 2rem;
  }

`;

export const TextForm = styled.p`
  background-color: #fff;
  color: #5E646B;
  font-size: 18px;
  text-align: left;
  max-width: 600px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  div {
    background-color: #fff;
  }

 

  input {
    border-radius: 6px;
    border: 2px solid #E2E9EF;
    background: #FFF;
    outline-color: rgba(0, 0, 0, 0.2);
    color: gray;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  .input-wrapper {
  position: relative;
  margin-top: 20px;
  background: #FFF;
}

.custom-input {
  border: none;
  background: #FFF;
  padding: 0 5rem;
  border: 2px solid #E2E9EF;
  border-bottom: 2px solid #FF0066;
  padding: 8px;
  width: 300px; 

  
}

.custom-input:focus {
  outline: none;
  background: #FFF;
  border-bottom-color: #00BFFF;
}

.custom-input:focus + label {
  transform: translateY(-20px);
  background: #FFF;
  color: #00BFFF;
}


label {
  position: absolute;
  background: #FFF;
  left: 8px;
  bottom: 10px;
  color: #888888;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  @media (max-width: 500px) {
      font-size: 1rem;
  }
}
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 740px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
  background-color: #FF0066;
  padding: 1rem;
  width: 94%;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    transition: background-color 0.8s;
    background-color: #000;
    color: #FF0066;
  }

`;
