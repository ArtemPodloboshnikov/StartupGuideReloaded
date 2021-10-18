import type { NextPage } from 'next';
import Head  from 'next/head';
import SquareBtn from '../../Buttons/SquareBtn/SquareBtn';
import CircleInput from '../../Inputs/CircleInput/CircleInput';
import classes from './MainHeader.module.scss';
import constants from './constants';

const MainHeader:NextPage = ()=>{

    return (
        <div className={classes.wrap}>
            <nav className={classes.navbar}>
                <img src={constants.logo_path} alt='Startup Guide'/>
            </nav>
            <header className={classes.header}>
                <CircleInput color='white'>
                {constants.input_placeholder}
                </CircleInput>
                <SquareBtn>
                {constants.button_text}
                </SquareBtn>
            </header>
        </div>
    )
}
export default MainHeader;