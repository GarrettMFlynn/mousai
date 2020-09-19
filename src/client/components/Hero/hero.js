import React from "react";
import { HeroDiv, HeroContent} from './hero.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import Button from '../Button/button';


const Hero =  ({background, img, img_style, hero_style, content_style, header1, header2, header1_style, header2_style, description, description_style, button_text, button_link, button_type}) => {
    return(
        <HeroDiv img = {background} style = {hero_style}>
            <section>
                <HeroContent style = {content_style}>
                    <img src={img} style={img_style}/>
                    <FlexBreak/>
                    <h1 style={header1_style}>{header1}</h1>
                    <FlexBreak/>
                    <h2 style={header2_style}>{header2}</h2>
                    <FlexBreak/>
                    <p style={description_style}>{description}</p>
                    <FlexBreak/>
                    <Button text={button_text} href = {button_link} type={button_type}></Button>
                </HeroContent>
            </section>
        </HeroDiv>
    )
}

export default Hero