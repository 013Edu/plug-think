import { ButtonThree, Container, ContainerCopy, ContainerForm, ContainerIcons, ContainerImageOne, ContainerLinksOne, ContainerLinksThree, ContainerLinksTwo, ContainerOne, ContainerTextOne, ContainerTextThree, ContainerTextTwo, ContainerThree, ContainerTitleSecondaryTwo, ContainerTitleThree, ContainerTitleTwo, ContainerTwo, ContentIcon } from "./styles";

import logo from "../../assets/logo2.png";

import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

export function Footer() {
    return (
        <>
            <Container>
                <ContainerOne>
                    <ContainerImageOne>
                        <img src={logo} alt="Logo da plug think" />
                    </ContainerImageOne>
                    <ContainerTextOne>
                        <p>Transformando ideias em soluções, nós
                            conduzimos o seu negócio em direção ao futuro.</p>
                    </ContainerTextOne>
                    <ContainerIcons>
                        <ContentIcon>
                            <FaLinkedin size={25} style={{ backgroundColor: "#FF0066" }} />
                        </ContentIcon>
                        <ContentIcon>
                            <FaFacebook size={25} style={{ backgroundColor: "#FF0066" }} />
                        </ContentIcon>
                        <ContentIcon>
                            <FaInstagram size={25} style={{ backgroundColor: "#FF0066" }} />
                        </ContentIcon>
                        <ContentIcon>
                            <FaYoutube size={25} style={{ backgroundColor: "#FF0066" }} />
                        </ContentIcon>
                        <ContentIcon>
                            <FaTwitter size={25} style={{ backgroundColor: "#FF0066" }} />
                        </ContentIcon>
                    </ContainerIcons>
                    <ContainerLinksOne>
                        <ul>
                            <li><a href="#">Politica de Privacidade</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Complience</a></li>
                            <li><a href="#">Suporte via Whatsapp</a></li>
                            <li><a href="#">Suporte via Ticket</a></li>
                        </ul>
                    </ContainerLinksOne>
                </ContainerOne>
                <ContainerTwo>
                    <ContainerTitleTwo>
                        <h2>Novidades</h2>
                    </ContainerTitleTwo>
                    <ContainerTextTwo>
                        <p>O pode que levar um cliente a comprar por
                            impulso?<br />
                            <span>julho 9, 2022</span></p>
                    </ContainerTextTwo>
                    <ContainerTitleSecondaryTwo>
                        <h2>Nossos Produtos</h2>
                    </ContainerTitleSecondaryTwo>
                    <ContainerLinksTwo>
                        <ul>
                            <li><a href="#">Boomerangue Pedido Express</a></li>
                            <li><a href="#">PedFacil Delivery</a></li>
                            <li><a href="#">PlugueFY ERP</a></li>
                            <li><a href="#">PagPed Antecipação de Recebiveis</a></li>
                        </ul>
                    </ContainerLinksTwo>
                </ContainerTwo>
                <ContainerThree>
                    <ContainerTitleThree>
                        <h3>Receba conteúdos exclusivos no
                            seu email
                        </h3>
                    </ContainerTitleThree>
                    <ContainerForm>
                        <input type="text" placeholder="Informe seu email" />
                        <ButtonThree>Receber Newsletter</ButtonThree>
                    </ContainerForm>
                    <ContainerTextThree>
                        Fale com nosso time Comercial:
                    </ContainerTextThree>
                    <ContainerLinksThree>
                        <ul>
                            <li><a href="#">MG +55 (31) 3500-3599 </a></li>
                            <li><a href="#">SP +55 (11) 4673-3507</a></li>
                            <li><a href="#">RS +55 (51) 2500-6610</a></li>
                        </ul>
                    </ContainerLinksThree>
                </ContainerThree>
            </Container>
            <ContainerCopy>
                <p>© 2023 Todos direitos reservados a Plugthink</p>
            </ContainerCopy>
        </>
    )
}