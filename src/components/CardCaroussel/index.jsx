
import { Button, Container, ContentButton, ContentImage, ContentText, ContentTitle2 } from "./styles";

export function CardCaroussel({ image, title, textButton, children }) {
    return (
        <Container>
            <ContentImage>
                <img src={image} alt="" />
            </ContentImage>

            <ContentTitle2>
                <h3>{title}</h3>
            </ContentTitle2>

            <ContentButton>
                {children}
            </ContentButton>
        </Container>
    )
}