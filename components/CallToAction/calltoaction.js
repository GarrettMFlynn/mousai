import {CallContainer, AlignRight, Text} from './calltoaction.styled';
import Button from '../Button/button';


const CallToAction = () => {
    return(
        <CallContainer>
            <Text>
            <h1>Be our muse. <br/>Join us today.</h1>
            </Text>
            <AlignRight>
                <Button href='/signup' text='Join Mousai' type='solid'/>
                <Button href='/404' text='Contact us'/>
            </AlignRight>
        </CallContainer>
    )
}

export default CallToAction