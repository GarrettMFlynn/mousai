import {BackToHome, FlexBreak, TeamTile, TeamContainer, TeamImg, TeamDetails} from "../containers/layouts/layouts.styled";
import Link from "next/link";
import React from "react";
import {Breadcrumb} from '../components/Footer/footer.styled'
import {siteTitle} from "./_app";
import Head from "next/dist/next-server/lib/head";
import Hero from "../components/Hero/hero";

const team = [
    { name: 'Garrett Flynn', tag: 'Founder', affiliation: 'BS Computational Neuroscience (2021)\nMA Media Arts, Games, and Health (2022)', href: 'http://garrettflynn.com', src:'../images/team/GF.jpg' },
    { name: 'Jay Goldstuck', tag: 'Student Team',affiliation: 'BFA Film and Television Production (2021)\n ', href: '', src:'../images/team/GF.jpg' },
    { name: 'Morgan Kuligowski', tag: 'Student Team',affiliation: 'BS Neuroscience (2019)\nMA Media Arts, Games, and Health (2021)', href: '', src:'../images/team/GF.jpg' },
    { name: 'Tejas Ramdas', tag: 'Student Team',affiliation: 'BS Computational Neuroscience (2021)\n ', href: '', src:'../images/team/GF.jpg' },
    { name: 'Adam Christian Clark', tag: 'Student Team',affiliation: 'PhD Cinematic Arts\n ', href: '', src:'../images/team/GF.jpg' },
    { name: 'Alice Wu', tag: 'Student Team',affiliation: 'BS Applied and Computational Mathematics (2021)\n ', href: '', src:'../images/team/GF.jpg' },
    { name: 'Dong Song', tag: 'Scientific Advisor', affiliation: 'Research Associate Professor of Biomedical Engineering (USC)\n ', href: 'https://viterbi.usc.edu/directory/faculty/Song/Dong', src:'../images/team/GF.jpg' },
    { name: 'Marientina Gotsis', tag: 'Creative Advisor',affiliation: 'Associate Professor of the Practice of Cinematic Arts (USC)\n ', href: 'https://cinema.usc.edu/directories/profile.cfm?id=21482', src:'../images/team/GF.jpg' },
    { name: 'Curtis Fletcher', tag: 'Creative Advisor',affiliation: 'Director of the Ahmanson Lab (USC)\n ', href: 'https://polymathic.usc.edu/person/curtis-fletcher', src:'../images/team/GF.jpg' },
    { name: 'Katerina Zacharia', tag: 'Story World Development and Narrative Design',affiliation: 'Professor of Classics and Archaeology (LMU)\nAthenoe', href: 'http://katerinazacharia.com/', src:'../images/team/GF.jpg' },
    { name: 'Dominic Diaz', tag: 'Industry Advisor',affiliation: 'Alterea\n ', href: 'https://www.altereainc.com/', src:'../images/team/GF.jpg' },
].map(link => {
    link.key = `about-link-${link.name}-${link.tag}`
    return link
})

export default function Mythology () {
    return (
        <>
        <Head>
            <title>{siteTitle} | About Us</title>
            <link rel="icon" href="../../favicon.ico" />
            <meta property="og:title" content={'About ' + siteTitle}/>
            <meta property="og:description" content="Mousai is inspiring end-user participation in neurotechnology design."/>
            <meta property="og:image" content="https://localist-images.azureedge.net/photos/33741435298225/huge/7df0cd23141abd97fab94a1de7c97a96e3fcee3e.jpg"/>
            <meta property="og:url" content="http://mousaineuro.com"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:site_name" content={'About ' + siteTitle}/>
            <meta name="twitter:image:alt" content={'About ' + siteTitle}/>
            <meta name="twitter:site" content="@mousaineuro"/>
        </Head>
            <Hero
                background = {"../../images/muse_pink.png"}
                hero_style = {{height: '50vh'}}
                content_style = {{justifyContent:'center'}}
                header1_style = {{textAlign:'center'}}
                header1 = {'Our Mythology'}
                button_text = {''}
                button_link = {''}
                button_type = {'blank'}
            />

        <section>
            <h1 style={{marginBottom: '0px'}}>Mousai Neurotechnologies</h1>
            <FlexBreak/>
            <h3>Human-Centered Design in Commercial Neurotechnology</h3>
            <FlexBreak/>
            <p> Mousai Neurotechnologies is a design studio that enables and empowers
                marginalized, non-expert stakeholders to participate
                in neurotechnology design.</p>
            <FlexBreak/>
            <p> During our launch years, we will (1) create interactive visualizations for memory neurotechnologies,
                (2) a web plugin to annotate existing neurotechnology and visualize patterns of feedback, and
                (3) a speculative social platform for the OpenBCI headset.</p>
            <FlexBreak/>
            <h1>Our Team</h1>
            <FlexBreak/>
            <TeamContainer>
                {team.map(({ key, name, tag, affiliation,contribution, href, src}) => (
                    <TeamTile key={key} href={href}>
                        {/*<TeamImg>*/}
                        {/*    <img src={src}/>*/}
                        {/*</TeamImg>*/}
                        <TeamDetails>
                            <h4>{tag}</h4>
                            <h2>{name}</h2>
                            <p>{affiliation}</p>
                        </TeamDetails>
                    </TeamTile>
                ))}
            </TeamContainer>
            <FlexBreak/>
            {/*<BackToHome>*/}
            {/*    <Link href="/">*/}
            {/*        <a>← Back to home</a>*/}
            {/*    </Link>*/}
            {/*</BackToHome>*/}
        </section>
    </>
    )
}