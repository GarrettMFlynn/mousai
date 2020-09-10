import React from "react";
import { HeroDiv} from './hero.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import Button from '../Button/button';


const Hero =  ({siteTitle}) => {
    return(
        <HeroDiv>
            <section>
                <img src='../../brand/long_solid.png' style={{width:'300px'}}/>
                <FlexBreak/>
                <h1>Become our Muse.</h1>
                <FlexBreak/>
                <Button text='Join Mousai' type='solid_long'></Button>
                <Button text='Participate in Livewire' type='long'></Button>
            </section>
        </HeroDiv>
    )
}

export default Hero