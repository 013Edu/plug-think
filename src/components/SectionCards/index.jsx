import { Card } from "../Card";
import { Container, ContentCards } from "./styles";

import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';

export function SectionCards() {
    return (
        <Container>
            <h2>Acesso fácil</h2>
            <ContentCards>
                <Card
                    image={image1}
                    title="Nossas soluções
                    e
                    aplicativos"
                    text="Acesso fácil às nossas soluções e
                    aplicativos: Prontos para impulsionar
                    o seu negócio."
                    textButton="Nossas soluções"
                />

                <Card
                    image={image2}
                    title="Desenvolva seu
                    aplicativo"
                    text="Tem uma ideia para um aplicativo?
                    Vamos transformá-la em realidade.
                    Agende uma reunião agora mesmo."
                    textButton="Meu APP"
                />

                <Card
                    image={image3}
                    title="Quer investir
                    na PlugThink?"
                    text="Interessado em investir ou formar
                    parceria com a PlugThink? Junte-se a
                    nós em nossa jornada de inovação."
                    textButton="Parcerias"
                />
            </ContentCards>
        </Container>
    )
}