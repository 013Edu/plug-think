import { styled } from "styled-components"

export const ContentTexts = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20rem;
    padding-top: 3rem;
    gap: 10rem;
    background-color: #fff;
    border-top: 3px solid #FF0066;

    @media (max-width: 1800px) {
        flex-direction: column;
    }
`
export const ContentText = styled.div`
    width: 100vw;
    max-width: 1000px;
    background-color: #fff;
    padding: 0 5rem;

    h2 {
        color: #FF0066;
        background-color: #fff;
        font-size: 4rem;
        text-align: left;
        margin: 0 auto;

        @media (max-width: 1100px) {
            font-size: 2.5rem;
            max-width: 800px;
        }

        @media (max-width: 1000px) {
            font-size: 2rem;
        }
    }

`
export const ContentImage = styled.div`
    position: relative;
    background-color: #fff;
    z-index: 1;
`
export const ImageItem = styled.img`
    width: 1020px;
    z-index: 30;
    background-color: #fff;
    border-radius: 177px 114px 182px 300px;
    -webkit-border-radius: 177px 304px 182px 200px;
    -moz-border-radius: 77px 110px 1802px 200px;

    @media (max-width: 2000px) {
        width: 540px;
    }

    @media (max-width: 1000px) {
        width: 340px;
    }

    @media (max-width: 500px) {
        width: 240px;
    }
`
export const ImageItemSecondary = styled.img`
    top: -10px;
    left: -130px;
    width: 300px;
    z-index: -1;
    background-color: #fff;
    position: absolute;
`

