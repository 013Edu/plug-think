
import { Button, Container, ContentButton, ContentImage, ContentText, ContentTitle2 } from "./styles";

export function Card({ image, title, text, textButton }) {
    return (
        <Container>
            <ContentImage>
                <img src={image} alt="" />
            </ContentImage>

            <ContentTitle2>
                <h3>{title}</h3>
            </ContentTitle2>

            <ContentText>
                <p>
                    {text}
                </p>
            </ContentText>

            <ContentButton>
                <Button>
                    {textButton}
                </Button>
            </ContentButton>
        </Container>
    )
}