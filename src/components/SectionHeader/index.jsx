import { Button, Container, ContentButton, ContentButtonText, ContentIcons, ContentTitle, Title } from "./styles";

import flameIcon from "./flame.svg"
import boltIcon from "./bolt.svg"

import { FaArrowAltCircleRight } from "react-icons/fa"

export function SectionHeader() {
    return (
        <Container>
            <ContentTitle>
                <Title><span>PlugThink</span>:Impulsionando o crescimento dos
                    seus negócios com produtos e serviços
                    inovadores.</Title>
                <ContentIcons>
                    <img src={flameIcon} alt="icone de um fogo rosa" />
                    <img src={boltIcon} alt="icone de um raio rosa" />
                </ContentIcons>
            </ContentTitle>
            <ContentButton>
                <Button>
                    Quero conhecer
                </Button>
                <ContentButtonText>
                    <h2>Conheça nossas soluções</h2>
                    <FaArrowAltCircleRight color="#fff" size={20} style={{ marginTop: 2 }} />
                </ContentButtonText>
            </ContentButton>
        </Container>
    )
}