import type { NextPage } from 'next';
import Head  from 'next/head';
import MainHeader from '../components/Headers/MainHeader/MainHeader';
import Navbar from '../components/Navbar/MainNavbar/MainNavbar';
import clases from './SimpleLayout.module.scss';

const SimpleLayout:NextPage = ({children})=>{

    return (
        <>
            <Head>
                <title>Startup Guide</title>
            </Head>
            <main className={clases.main}>
                <Navbar/>
                <MainHeader/>
                {children}
            </main>
        </>
    )
}
export default SimpleLayout;