import React from "react";
import { HeroDiv} from './hero.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import Button from '../Button/button';


const Hero =  ({siteTitle}) => {
    return(
        <HeroDiv>
            <section>
                <img src='../../brand/name_solid_tight.png' style={{width:'300px'}}/>
                <FlexBreak/>
                <h1>Codesign the mind.</h1>
                <FlexBreak/>
                <Button text='Join Mousai' type='solid_long'></Button>
                <Button text='Participate in Livewire' type='long'></Button>
            </section>
        </HeroDiv>
    )
}

export default Hero