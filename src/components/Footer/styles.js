
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  height: 100%;
  padding: 10rem 10rem 0 10rem;
  border-top: 5px solid #FF0066;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  

  a {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContainerOne = styled.div`
   background-color: #000;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   img {
    background-color: #000;
   }
`;

export const ContainerImageOne = styled.div`
   background-color: #000;
`;

export const ContainerTextOne = styled.div`
   background-color: #000;
   max-width: 300px;
   
   p {
    background-color: #000;
    line-height: 30px;
   }
`;

export const ContainerIcons = styled.div`
   background-color: #000;
   display: flex;
   gap: 1rem;
`;

export const ContentIcon = styled.div`
  background-color: #FF0066;
  padding: 8px;
  border-radius: 10px;
`;

export const ContainerLinksOne = styled.div`
   background-color: #000;

   ul,li,a {
    background-color: #000;
    text-decoration: none;
   }

   ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
   }

   ul {
  list-style: none; 
  padding-left: 20px;
}

ul li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
}

ul li::before {
  content: ""; 
  display: inline-block;
  width: 15px; 
  height: 15px; 
  border-radius: 50%; 
  background-color: #fff; 
  position: absolute;
  left: 0;
  top: 5px; 
}
`;

export const ContainerTwo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media(max-width:980px) {
      margin-top: 5rem;
  }
`;

export const ContainerTitleTwo = styled.div`
  
`;

export const ContainerTextTwo = styled.div`
   
   p {
    line-height: 30px;

    span {
      color: #FF0066;
    }
   }
`;

export const ContainerTitleSecondaryTwo = styled.div`
  margin-top: 2rem;
`;

export const ContainerLinksTwo = styled.div`
     ul,li,a {
    background-color: #000;
    text-decoration: none;
   }

   ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
   }

   ul {
  list-style: none; 
  padding-left: 20px;
}

ul li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
}

ul li::before {
  content: ""; 
  display: inline-block;
  width: 15px; 
  height: 15px; 
  border-radius: 50%; 
  background-color: #fff; 
  position: absolute;
  left: 0;
  top: 5px; 
}
`;

export const ContainerThree = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media(max-width:1450px) {
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerTitleThree = styled.div`
   
   h3 {
    background-color: #000; 
    color: #fff;
    font-size: 1.5rem;
   }
`;

export const ContainerForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;

   input {
    border: 0;
    background-color: #fff;
    padding: 1rem;
    border-radius: 16px;
    color: #000;
    outline: 0;

    @media(max-width:1450px) {
      width: 100%;
      min-width: 300px;
  }

  }
`;

export const ButtonThree = styled.button`
   background-color: #FF0066; 
   color: #fff;
   padding: 1rem 0.5rem;
   border-radius: 8px;
   text-align: center;

   &:hover {
    transition: background-color 0.3s;
    background-color: rgba(255, 0, 102, 0.7);
    cursor: pointer;
   }
`;

export const ContainerTextThree = styled.div`
   
`;

export const ContainerLinksThree = styled.div`
   
   ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   }

   li {
    list-style: none;
   }

   a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
   }
`;

export const ContainerCopy = styled.div`
   margin-top: 8rem;
   margin-bottom: 5rem;
   display: flex;
   justify-content: start;
   padding-left: 13rem;

   @media(max-width:500px) {
      text-align: left;
      padding-left: 5rem;
  }

   p{
    color: #fff;
   }
`;




