import Main from '../../containers/layouts/main'
import { getAllPostIds, getPostData } from '../../lib/posts'
import {BackToHome, FlexBreak, PostSection} from "../../containers/layouts/layouts.styled";
import { HeroDiv} from '../../components/Hero/hero.styled';

import Date from '../../components/date'
import Head from 'next/head'
import Link from "next/link";

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <HeroDiv>
                <section>
                    <h1>{postData.title}</h1>
                    <FlexBreak/>
                    {/*<LightTxt style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
                    {/*    <Date dateString={postData.date} />*/}
                    {/*</LightTxt>*/}
                </section>
            </HeroDiv>
                <PostSection>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    <BackToHome>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </BackToHome>
                </PostSection>
    </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}