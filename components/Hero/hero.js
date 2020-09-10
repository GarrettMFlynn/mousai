import React from "react";
import { HeroDiv} from './hero.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import Button from '../Button/button';


const Hero =  ({siteTitle}) => {
    return(
        <HeroDiv>
            <section>
                <img src='../../brand/logo_tight_solid.png' style={{width:'50px'}}/>
                <FlexBreak/>
                <h1>Inspire the future of neurotechnology design.</h1>
                <FlexBreak/>
                <Button text='Be our Muse' type='long'></Button>
                <Button text='RSVP for Livewire' type='long'></Button>
            </section>
        </HeroDiv>
    )
}

export default Hero