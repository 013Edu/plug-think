
import { Container, NavBar, SectionRegionsContainer } from "./styles";

import logo from "../../assets/logo2.png"
import planetIcon from "../../assets/planet.png"

export function Header() {
    return (
        <>
            <SectionRegionsContainer>
                <img src={planetIcon} alt="Ícone do planeta terra" />
                <h3>Brasil - Colômbia - Equador - Peru - Costa Rica - Chile</h3>
            </SectionRegionsContainer>
            <Container>
                <img src={logo} alt="Logo da Plug Think" />

                <NavBar>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Inovação</a></li>
                        <li><a href="#">Soluções</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </NavBar>
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a class="menu__item" href="#">Home</a></li>
                        <li><a class="menu__item" href="#">About</a></li>
                        <li><a class="menu__item" href="#">Team</a></li>
                        <li><a class="menu__item" href="#">Contact</a></li>
                        <li><a class="menu__item" href="#">Twitter</a></li>
                    </ul>
                </div>
            </Container>
        </>
    )
}