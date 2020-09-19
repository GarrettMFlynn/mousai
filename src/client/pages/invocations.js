import Moduleslist from "../components/ModulesList/moduleslist";
import Head from "next/dist/next-server/lib/head";
import {siteTitle} from "./_app";
import React from "react";
import {getSortedPostsData} from "../lib/posts";
import ImageGallery from "../components/ImageGallery/imagegallery";

export default function Invocations ({ allPostsData }) {
    return (
        <>
            <Head>
                <title>{siteTitle} | Invocations</title>
                <link rel="icon" href="../../favicon.ico" />
                <meta property="og:title" content={siteTitle + ' Invocations'}/>
                <meta property="og:description" content="Mousai is inspiring end-user participation in neurotechnology design."/>
                <meta property="og:image" content="https://localist-images.azureedge.net/photos/33741435298225/huge/7df0cd23141abd97fab94a1de7c97a96e3fcee3e.jpg"/>
                <meta property="og:url" content="http://mousaineuro.com"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="og:site_name" content={siteTitle + ' Invocations'}/>
                <meta name="twitter:image:alt" content={siteTitle + ' Invocations'}/>
                <meta name="twitter:site" content="@mousaineuro"/>
            </Head>
            <ImageGallery allPostsData={allPostsData}/>
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