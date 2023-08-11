
import { Button, Container, ContainerForm, ContentForm, ContentImage, Form, Image, ImageSecondary, TextForm, TitleForm } from "./styles";

import image from "../../assets/back.png"
import blob from "../../assets/blob2.png"

export function SectionForm() {
    return (
        <Container>
            <ContentImage>
                <ImageSecondary src={blob} alt="imagem geométrica oval" />
                <Image src={image} alt="imagem de um homem pensando e desenhos de lâmpadas" />
            </ContentImage>

            <ContentForm>
                <TitleForm>
                    Vamos começar a inovar o seu negócio
                    agora?
                </TitleForm>
                <TextForm>
                    Pronto para inovar o seu negócio? Entre em contato e descubra como
                    a PlugThink pode transformar o seu futuro.
                </TextForm>
                <Form>

                    <ContainerForm>
                        <div class="input-wrapper">
                            <input type="text" id="input-1" class="custom-input" />
                            <label for="input-1">Nome</label>
                        </div>

                        <div class="input-wrapper">
                            <input type="text" id="input-2" class="custom-input" />
                            <label for="input-2">Telefone</label>
                        </div>
                    </ContainerForm>
                    <Button>
                        Solicite contato
                    </Button>
                </Form>
            </ContentForm>
        </Container>
    )
}