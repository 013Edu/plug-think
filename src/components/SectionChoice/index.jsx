import { Container, ContainerAcordion, ContainerImage, ContainerTexts, TitleContainerTexts } from "./styles";

import image from "../../assets/back2.png"

import * as Accordion from '@radix-ui/react-accordion';
import AccordionDemo from "../Acordion";

export function SectionChoice() {
    return (
        <Container>
            <ContainerTexts>
                <TitleContainerTexts>
                    Porque escolher a PlugThink ?
                </TitleContainerTexts>
                <p>Nós desenvolvemos soluções personalizadas, começamos com o
                    entendimento das pessoas, complementamos o seu time,
                    acreditamos no aprendizado rápido, tratamos cada projeto como
                    único, aplicamos experiências diversificadas e criamos soluções
                    inovadoras que são implementáveis, não apenas conceituais.
                </p>
                <ContainerAcordion>
                    <AccordionDemo
                        title="Começamos pelas pessoas."
                        text="Nós compreendemos o comportamento das pessoas para podermos projetar o que elas precisam."
                    />
                    <AccordionDemo
                        title="Complementamos seu time"
                        text="Nosso time tem experiência em design e inovação, e o seu time entra
                    com conhecimento do negócio."
                    />
                    <AccordionDemo
                        title="Uma ideia sem teste é só uma ideia"
                        text="Acreditamos que o aprendizado rápido é crucial para o sucesso de
                    uma ideia, por isso enfatizamos a realização de testes com foco no
                    usuário."
                    />
                    <AccordionDemo
                        title="Cada projeto é único"
                        text="Não há receita pronta. A jornada do projeto é adaptada ao contexto
                    de cada empresa."
                    />
                    <AccordionDemo
                        title="Nossa bagagem é o que nos torna transversais"
                        text="Nós aplicamos a experiência de diferentes Pluguers em diversos
                    mercados e tipos de empresas para os nossos projetos."
                    />
                    <AccordionDemo
                        title="O que construímos não vai pra gaveta"
                        text="Criamos soluções inovadoras que deixam claros os próximos passos
                    para melhorar as empresas"
                    />
                </ContainerAcordion>
            </ContainerTexts>

            <ContainerImage>
                <img src={image} alt="Uma mulher sorrindo" />
            </ContainerImage>
        </Container>
    )
}