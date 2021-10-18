import type { NextPage } from 'next';
import Head  from 'next/head';

const SimpleLayout:NextPage = ({children})=>{

    return (
        <>
            <Head>
                <title>Startup Guide</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}
export default SimpleLayout;