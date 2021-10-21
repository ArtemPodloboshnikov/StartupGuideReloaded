import type { NextPage } from 'next';
import { useState } from 'react';
import SimpleBtn from '../../Buttons/SimpleBtn/SimpleBtn';
import CircleInput from '../../Inputs/CircleInput/CircleInput';
import NeomorhBtn from '../../Buttons/NeomorhBtn/NeomorhBtn';
import HintInput from '../../Inputs/HintInput/HintInput';
import SimpleWindow from '../../ModalWindows/SimpleWindow/SimpleWindow';
import Checkbox from '../../Inputs/Checkbox/Checkbox';
import classes from './MainHeader.module.scss';
import constants from './constants';
import russianCities from '../../../russianCities';
import dictionaryArray from '../../../../functions/dictionaryArray';

const MainHeader:NextPage = ()=>{

    const cities = dictionaryArray(russianCities.map((city)=>{return city.city}));
    
    console.log(cities)
    const [close, setClose] = useState(true);

    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [doublePassword, setDoublePassword] = useState('');
    const [city, setCity] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    const marginTop = {marginTop: '5%'};

    const inputs = [fio, phone, email, password, doublePassword, checkbox];
    let correct: boolean = false;
    
    for (let input of inputs)
    {
        if (!input)
        {
            correct = false
            break;
        }
        else
        {
            correct = true;
        }
    }
    
    return (
        <>
        <SimpleWindow close={close} setClose={setClose}>
                <div>
                    <p>{constants.TITLE_WINDOW}</p>
                    <NeomorhBtn color='white'>{constants.BUTTON_WINDOW.top}</NeomorhBtn>
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
                    type='select'
                    optionsText={cities}
                    hint={constants.REGISTRATION_INPUTS.CITY.hint}
                    error={constants.REGISTRATION_INPUTS.CITY.error}
                    placeholder={constants.REGISTRATION_INPUTS.CITY.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.CITY.correct_value}
                    value={city}
                    setValue={setCity}
                    />
                </div>
                <Checkbox
                id='IAgree'
                value={checkbox}
                setValue={setCheckbox}
                text={constants.WINDOW_CHECKBOX.text}
                link={constants.WINDOW_CHECKBOX.link}
                href={constants.WINDOW_CHECKBOX.href}
                style={marginTop}
                />
                <p 
                className={classes.disable_text_button}
                style={((!correct)? {display: 'block'} : {display: 'none'})}>
                    {constants.DISABLE_TEXT_WINDOW}
                </p>
                <SimpleBtn
                type='circle'
                color='blue'
                disable={!correct}
                text={constants.BUTTON_WINDOW.bottom} 
                value={close} 
                setValue={setClose}
                style={marginTop}
                />
            </SimpleWindow>
        <header className={classes.header}>
            <CircleInput color='white' placeholder={constants.INPUT_PLACEHOLDER}/>
            <SimpleBtn
            text={constants.BUTTON_TEXT} 
            value={close} 
            setValue={setClose}/>
        </header>
        </>
    )
}
export default MainHeader;