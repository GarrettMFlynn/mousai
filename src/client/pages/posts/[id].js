import Main from '../../containers/layouts/main'
import { getAllPostIds, getPostData } from '../../lib/posts'
import {BackToHome, FlexBreak, PostSection} from "../../containers/layouts/layouts.styled";
import { HeroDiv} from '../../components/Hero/hero.styled';
import Date from '../../components/date'
import Head from 'next/head'
import Link from "next/link";
import {EmailInput, FormCont, FormSubmit, InputDiv, NewsletterForm} from "../../components/Footer/footer.styled";
import {keys} from "../../keys";
import React from "react";
import Hero from "../../components/Hero/hero";

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Hero
                background = {postData.imageSrc}
                hero_style = {{height: '50vh'}}
                content_style = {{justifyContent:'center'}}
                header1_style = {{textAlign:'center'}}
                header1 = {postData.title}
                button_text = {''}
                button_link = {''}
                button_type = {'blank'}
            />
                <PostSection>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    <FormCont/>
                    <NewsletterForm>
                        <h3>Sign up for updates here.</h3>
                        <FlexBreak/>
                        <InputDiv action={keys.mailchimp_url} method="POST">
                            <input type="hidden" name="u" value={keys.mailchimp_hidden1}/>
                            <input type="hidden" name="id" value={keys.mailchimp_hidden2}/>
                            <EmailInput type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0"
                                        size="25" placeholder="Enter your email address"/>
                            <FormSubmit type="submit" className="formEmailButton" name="submit" value="Subscribe"/>
                        </InputDiv>
                    </NewsletterForm>
                    <FormCont/>
                </PostSection>
    </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds("posts")
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