import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { Button, Container, ContainerCaroussel, ContainerText, Title } from "./styles";
import { CardCaroussel } from "../CardCaroussel";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import image1 from '../../assets/caroussel1.png';
import image2 from '../../assets/caroussel2.png';
import image3 from '../../assets/caroussel3.png';

export function SectionCaroussel() {
    const [isMobile, setIsMobile] = useState(false);

    const [keenSliderRef] = useKeenSlider({
        slides: {
            perView: 2
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1538);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container>
            <ContainerText>
                <Title>Descubra o impacto da nossa inovação: Estudos de caso em
                    destaque.</Title>
            </ContainerText>

            <ContainerCaroussel ref={keenSliderRef} className={` ${isMobile ? 'mobile' : 'keen-slider'}`}>
                <div className={` ${isMobile ? 'mobile-slide' : 'keen-slider__slide'}`}>
                    <CardCaroussel
                        image={image1}
                        title="IP - Sistema de Inteligente de Ponto"
                        text=""
                        textButton="Ler mais"
                    >
                        <Button>Saber mais</Button>
                    </CardCaroussel>
                </div>
                <div className={` ${isMobile ? 'mobile-slide' : 'keen-slider__slide'}`}>
                    <CardCaroussel
                        image={image2}
                        title="Boomerangue Pedido Express"
                        text=""
                        textButton="Ler mais"
                    >
                        <Button>Saber mais</Button>
                    </CardCaroussel>
                </div>
                <div className={` ${isMobile ? 'mobile-slide' : 'keen-slider__slide'}`}>
                    <CardCaroussel
                        image={image3}
                        title="MeLeva Logistica"
                        text=""
                        textButton="Ler mais"
                    >
                        <Button>Saber mais</Button>
                    </CardCaroussel>
                </div>
            </ContainerCaroussel>
        </Container>
    )
}
