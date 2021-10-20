import type { NextPage } from 'next';
import { useState } from 'react';
import SquareBtn from '../../Buttons/SquareBtn/SquareBtn';
import CircleInput from '../../Inputs/CircleInput/CircleInput';
import NeomorhBtn from '../../Buttons/NeomorhBtn/NeomorhBtn';
import HintInput from '../../Inputs/HintInput/HintInput';
import SimpleWindow from '../../ModalWindows/SimpleWindow/SimpleWindow';
import classes from './MainHeader.module.scss';
import constants from './constants';

const MainHeader:NextPage = ()=>{

    const [close, setClose] = useState(true);

    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [doublePassword, setDoublePassword] = useState('');
    const [city, setCity] = useState('');

    return (
        <>
        <SimpleWindow close={close} setClose={setClose}>
                <div>
                    <p>{constants.TITLE_WINDOW}</p>
                    <NeomorhBtn color='white'>{constants.BUTTON_WINDOW}</NeomorhBtn>
                </div>
                <div className={classes.list}>
                    <HintInput 
                    hint={constants.REGISTRATION_INPUTS.FIO.hint}
                    error={constants.REGISTRATION_INPUTS.FIO.error}
                    placeholder={constants.REGISTRATION_INPUTS.FIO.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.FIO.correct_value}
                    important={true}
                    value={fio}
                    setValue={setFio}
                    />
                    <HintInput 
                    hint={constants.REGISTRATION_INPUTS.PHONE.hint}
                    error={constants.REGISTRATION_INPUTS.PHONE.error}
                    placeholder={constants.REGISTRATION_INPUTS.PHONE.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.PHONE.correct_value}
                    important={true}
                    value={phone}
                    setValue={setPhone}
                    />
                    <HintInput 
                    hint={constants.REGISTRATION_INPUTS.EMAIL.hint}
                    error={constants.REGISTRATION_INPUTS.EMAIL.error}
                    placeholder={constants.REGISTRATION_INPUTS.EMAIL.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.EMAIL.correct_value}
                    important={true}
                    value={email}
                    setValue={setEmail}
                    />
                    <HintInput 
                    hint={constants.REGISTRATION_INPUTS.PASSWORD.hint}
                    error={constants.REGISTRATION_INPUTS.PASSWORD.error}
                    placeholder={constants.REGISTRATION_INPUTS.PASSWORD.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.PASSWORD.correct_value}
                    important={true}
                    type='password'
                    value={password}
                    setValue={setPassword}
                    />
                    <HintInput 
                    hint={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.hint}
                    error={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.error}
                    placeholder={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.placeholder}
                    correctValue={new RegExp(`^${password}$`, 'g')}
                    important={true}
                    type='password'
                    value={doublePassword}
                    setValue={setDoublePassword}
                    />
                    <HintInput 
                    hint={constants.REGISTRATION_INPUTS.CITY.hint}
                    error={constants.REGISTRATION_INPUTS.CITY.error}
                    placeholder={constants.REGISTRATION_INPUTS.CITY.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.CITY.correct_value}
                    value={city}
                    setValue={setCity}
                    />
        
                </div>
            </SimpleWindow>
        <header className={classes.header}>
            <CircleInput color='white'>
            {constants.INPUT_PLACEHOLDER}
            </CircleInput>
            <SquareBtn value={close} setValue={setClose}>
            {constants.BUTTON_TEXT}
            </SquareBtn>
        </header>
        </>
    )
}
export default MainHeader;