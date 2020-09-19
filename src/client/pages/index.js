
import Head from 'next/head'
import Hero from '../components/Hero/hero'
import Features from '../components/Features/features'
import { siteTitle } from './_app'
import React, {useEffect, useState} from "react";
import CallToAction from "../components/CallToAction/calltoaction";
import BCIStream from "../components/BCIStream/bcistream";
import fire from '../fire-config';
import Link from 'next/link'



export default function Home () {

    const [blogs, setBlogs] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fire.firestore()
            .collection('blog')
            .onSnapshot(snap => {
                const blogs = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogs);
            });
    }, []);

    return (
      <>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="../../favicon.ico" />
          <meta property="og:title" content={siteTitle}/>
          <meta property="og:description" content="Mousai is enabling end-user participation in neurotechnology design."/>
          <meta property="og:image" content="https://localist-images.azureedge.net/photos/33741435298225/huge/7df0cd23141abd97fab94a1de7c97a96e3fcee3e.jpg"/>
          <meta property="og:url" content="http://mousaineuro.com"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="og:site_name" content={siteTitle}/>
          <meta name="twitter:image:alt" content={siteTitle}/>
          <meta name="twitter:site" content="@mousaineuro"/>
        </Head>
        <Hero
              background = {"../../images/livewire.png"}
              content_style = {{justifyContent:'center', maxWidth: '400px'}}
              // img = {'../../brand/mousai_badge.png'}
              // img_style = {{width:'100px'}}
              header1 = {'Be our Muse.'}
              header2 = {'Inspire neurotechnology design'}
              header1_style = {{textAlign:'center',fontSize:'50px', marginBottom:'0px'}}
              header2_style = {{textAlign:'center'}}
              button_text = {'Learn More'}
              button_link = {'/mythology'}
              button_type = {'long'}
        />
        <div>
          <ul>
              {blogs.map(blog =>
                      <Link key={blog.id} href="/blog/[id]" as={'/blog/' + blog.title }>
                          <li>
                            <a itemProp="hello">{blog.title}</a>
                          </li>
                      </Link>
              )}
          </ul>
          {loggedIn && <BCIStream />}
        </div>

        <Hero
              background = {"../../images/muse_pink.png"}
              content_style = {{justifyContent:'flex-start'}}
              header1_style = {{textAlign:'left',fontSize:'50px', marginBottom:'0px'}}
              header1 = {'Next Invocation'}
              header2 = {'Livewire: A Stimulating Night of Neurotechnology'}
              description = {'Join Mousai on March 5th, 2021 for our launch ' +
              'of Brainstorm: a social neurotechnology platform that enables ' +
              'you to manage your brain data and couple with other minds ' +
              'across social, cultural, and political boundaries.'}
              description_style = {{paddingBottom: '20px'}}
              button_text = {'Join the Invocation'}
              button_link = {'/invocations'}
              button_type = {'long'}
        />
      </>
  )
}