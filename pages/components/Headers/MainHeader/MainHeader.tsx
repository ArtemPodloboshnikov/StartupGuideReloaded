import type { NextPage } from 'next';
import Head  from 'next/head';
import SquareBtn from '../../Buttons/SquareBtn/SquareBtn';
import CircleInput from '../../Inputs/CircleInput/CircleInput';
import classes from './MainHeader.module.scss';
import constants from './constants';

const MainHeader:NextPage = ()=>{

    return (
        
        <header className={classes.header}>
            <CircleInput color='white'>
            {constants.INPUT_PLACEHOLDER}
            </CircleInput>
            <SquareBtn>
            {constants.BUTTON_TEXT}
            </SquareBtn>
        </header>
    )
}
export default MainHeader;