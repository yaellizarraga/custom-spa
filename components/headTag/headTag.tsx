import Head from 'next/head'
import * as React from 'react'

export default function HeadTag (props: { title: string }) {
    return (
        <Head>
            <title>El Encanto</title>
            <meta property="og:title" content={props.title} key="title" />
            <meta name='viewport' content='minimum-scale=1m initial-scale=1, width=device-width' />
        </Head>
    )
}