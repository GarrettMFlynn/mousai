
import Head from 'next/head'
import Hero from '../components/Hero/hero'
import Features from '../components/Features/features'
import { siteTitle } from '../pages/_app'
import { getSortedPostsData } from '../lib/posts'
import React from "react";
import CallToAction from "../components/CallToAction/calltoaction";

export default function Home ({ allPostsData }) {
  return (
      <>
        <Head>
          <title>{siteTitle} | Codesign the Mind</title>
          <link rel="icon" href="../../favicon.ico" />
          <meta property="og:title" content={siteTitle}/>
          <meta property="og:description" content="Mousai is inspiring end-user participation in neurotechnology design."/>
          <meta property="og:image" content="https://localist-images.azureedge.net/photos/33741435298225/huge/7df0cd23141abd97fab94a1de7c97a96e3fcee3e.jpg"/>
          <meta property="og:url" content="http://mousaineuro.com"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="og:site_name" content={siteTitle}/>
          <meta name="twitter:image:alt" content={siteTitle}/>
          <meta name="twitter:site" content="@mousaineuro"/>
        </Head>
        <Hero siteTitle = {siteTitle}/>
        <Features/>
        <CallToAction/>
      </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}