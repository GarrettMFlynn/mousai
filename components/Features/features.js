import React from "react";
import { HeadDiv,FeatureDiv, Feature} from './features.styled';
import {FlexBreak} from '../../containers/layouts/layouts.styled';


const Features =  () => {
    return(
        <FeatureDiv>
            <section>
                <h1>Inspire powerful brain-powered experiences.</h1>
                {/*the future of neurotechnology design.*/}
                <FlexBreak/>
                <Feature>
                    <h2>1. Discover Pain Points in Emerging Products.</h2>
                    <p><strong>We have dissatisfied personae with immense social or physical pressure to adopt a technology.</strong> But the future does not have to be high-tech, low-life.</p>
                </Feature>
                <Feature>
                    <h2>2. Recruit Muses for a Design Sprint.</h2>
                    <p><strong>Users participate in 2-month campaigns.</strong> This is how we imbue stakeholder voices <i>at scale</i> into deployed neurotechnology devices.</p>
                </Feature>
                <Feature>
                    <h2>3. Inspect Design Choices.</h2>
                    <p><strong>At Mousai, we consider art to be the oldest neurotechnology to embolden — not just educate.</strong> We give our users the tools (e.g. interactive visualizations) to make design choices for themselves. </p>
                </Feature>
                <Feature>
                    <h2>4. Host an Expert-Moderated Delphi Process.</h2>
                    <p><strong>This is what we do.</strong> Here is why we do it.</p>
                </Feature>
                <Feature>
                    <h2>5. Redesign the Product with Users.</h2>
                    <p>
                        <strong>This is what we do.</strong>
                        Some of our strategies include:
                        <ul>
                            <li>Muses in Residence</li>
                            <li>Brain-based UX testing</li>
                        </ul></p>

                </Feature>
                <Feature>
                    <h2>6. Launch the New Product.</h2>
                    <p><strong>We release powerful brain-powered experiences.</strong> Here is why we do it.</p>
                </Feature>
            </section>
        </FeatureDiv>
    )
}

export default Features