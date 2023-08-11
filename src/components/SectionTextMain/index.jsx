
import blob from "../../assets/blob.png"
import image1 from "../../assets/image1.png"

import { ContentImage, ContentText, ContentTexts, ImageItem, ImageItemSecondary } from "./styles"


export function SectionTextMain() {
    return (
        <ContentTexts>
            <ContentText>
                <h2>Inovação, inteligência e
                    transformação:
                    Aceleramos a evolução da
                    sua empresa.</h2>
            </ContentText>
            <ContentImage>
                <ImageItemSecondary src={blob} alt="Uma forma geométrica oval" />
                <ImageItem src={image1} alt="Pessoas em um escritório" />
            </ContentImage>
        </ContentTexts>
    )
}