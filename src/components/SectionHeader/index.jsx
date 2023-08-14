import { Button, Container, ContainerIconWpp, ContentButton, ContentButtonText, ContentIcons, ContentTitle, Title } from "./styles";

import flameIcon from "./flame.svg"
import boltIcon from "./bolt.svg"

import { FaArrowAltCircleRight, FaWhatsapp } from "react-icons/fa"

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

            <ContainerIconWpp>
                <a
                    href="https://api.whatsapp.com/send?phone=558399999999"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp
                        color="#fff"
                        size={60}
                        style={{
                            backgroundColor: "green",
                            borderRadius: 45,
                            padding: "0.5rem",
                        }}
                    />
                </a>
            </ContainerIconWpp>
        </Container>
    )
}