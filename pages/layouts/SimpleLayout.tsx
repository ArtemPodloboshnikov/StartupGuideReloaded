import type { NextPage } from 'next';
import Head  from 'next/head';
import MainHeader from '../components/Headers/MainHeader/MainHeader';
import Navbar from '../components/Navbar/MainNavbar/MainNavbar';
import MainFooter from '../components/Footer/MainFooter/MainFooter';
import classes from './SimpleLayout.module.scss';

const SimpleLayout:NextPage = ({children})=>{

    return (
        <>
            <Head>
                <title>Startup Guide</title>
            </Head>
            <main className={classes.main}>
                <Navbar/>
                <MainHeader/>
                <div className={classes.content}>
                    {children}
                </div>
                <MainFooter/>
            </main>
        </>
    )
}
export default SimpleLayout;