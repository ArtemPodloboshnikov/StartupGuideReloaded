import type { NextPage } from 'next';
import { useState, useMemo } from 'react';
import SimpleBtn from '../../Buttons/SimpleBtn/SimpleBtn';
import CircleInput from '../../Inputs/CircleInput/CircleInput';
import NeomorhInput from '../../Inputs/NeomorhInput/NeomorhInput';
import HintInput from '../../Inputs/HintInput/HintInput';
import SimpleWindow from '../../ModalWindows/SimpleWindow/SimpleWindow';
import Checkbox from '../../Inputs/Checkbox/Checkbox';
import FilesUploader from '../../Inputs/FilesUploader/FilesUploader';
import classes from './MainHeader.module.scss';
import constants from './constants';
import russianCities from '../../../constants/russianCities';
import colors from '../../../constants/colors';
import inputsType from '../../../constants/inputsType';
import dictionaryArray from '../../../functions/dictionaryArray';

const MainHeader:NextPage = ()=>{

    const cities = useMemo(()=>dictionaryArray(russianCities.map((city)=>{return city.city})), [russianCities]);
    
    const [close, setClose] = useState(true);

    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [doublePassword, setDoublePassword] = useState('');
    const [city, setCity] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [telegram, setTelegram] = useState('')
    
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
                    <NeomorhInput 
                    type={inputsType.inputs.neomorh.CIRCLE_BTN}
                    color={colors.WHITE}
                    >
                        {constants.BUTTON_WINDOW.top_text}
                    </NeomorhInput>
                </div>
                <div className={classes.list}>
                    <HintInput
                    color={colors.WHITE}
                    hint={constants.REGISTRATION_INPUTS.FIO.hint}
                    error={constants.REGISTRATION_INPUTS.FIO.error}
                    placeholder={constants.REGISTRATION_INPUTS.FIO.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.FIO.correct_value}
                    important={true}
                    value={fio}
                    setValue={setFio}
                    />
                    <HintInput 
                    color={colors.WHITE}
                    hint={constants.REGISTRATION_INPUTS.PHONE.hint}
                    error={constants.REGISTRATION_INPUTS.PHONE.error}
                    placeholder={constants.REGISTRATION_INPUTS.PHONE.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.PHONE.correct_value}
                    important={true}
                    value={phone}
                    setValue={setPhone}
                    />
                    <HintInput 
                    color={colors.WHITE}
                    hint={constants.REGISTRATION_INPUTS.EMAIL.hint}
                    error={constants.REGISTRATION_INPUTS.EMAIL.error}
                    placeholder={constants.REGISTRATION_INPUTS.EMAIL.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.EMAIL.correct_value}
                    important={true}
                    value={email}
                    setValue={setEmail}
                    />
                    <HintInput 
                    color={colors.WHITE}
                    hint={constants.REGISTRATION_INPUTS.PASSWORD.hint}
                    error={constants.REGISTRATION_INPUTS.PASSWORD.error}
                    placeholder={constants.REGISTRATION_INPUTS.PASSWORD.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.PASSWORD.correct_value}
                    important={true}
                    type={inputsType.inputs.PASSWORD}
                    value={password}
                    setValue={setPassword}
                    />
                    <HintInput 
                    color={colors.WHITE}
                    hint={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.hint}
                    error={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.error}
                    placeholder={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.placeholder}
                    correctValue={new RegExp(`^${password}$`, 'g')}
                    important={true}
                    type={inputsType.inputs.PASSWORD}
                    value={doublePassword}
                    setValue={setDoublePassword}
                    />
                    <HintInput
                    color={colors.WHITE}
                    type={inputsType.inputs.SELECT}
                    optionsText={cities}
                    hint={constants.REGISTRATION_INPUTS.CITY.hint}
                    error={constants.REGISTRATION_INPUTS.CITY.error}
                    placeholder={constants.REGISTRATION_INPUTS.CITY.placeholder}
                    correctValue={constants.REGISTRATION_INPUTS.CITY.correct_value}
                    value={city}
                    setValue={setCity}
                    />
                   
                </div>
                <FilesUploader
                type={inputsType.file_uploader.TEXT}
                color={colors.DARK_BLUE}
                name={constants.REGISTRATION_INPUTS.FILES_UPLOADER.name}
                placeholder={constants.REGISTRATION_INPUTS.FILES_UPLOADER.placeholder}
                />
                <NeomorhInput
                style={{...marginTop, justifySelf: 'center', width: '100%'}} 
                type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.dark}
                color={colors.WHITE}
                placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.placeholder}
                value={telegram}
                setValue={setTelegram}
                />
                <Checkbox
                id='IAgree'
                color={colors.GRAYISH_BLUE}
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
                type={inputsType.buttons.CIRCLE}
                color={colors.BLUE}
                disable={!correct}
                text={constants.BUTTON_WINDOW.bottom_text} 
                value={close} 
                setValue={setClose}
                style={marginTop}
                />
            </SimpleWindow>
        <header className={classes.header}>
            <CircleInput 
            color={colors.WHITE} 
            placeholder={constants.INPUT_PLACEHOLDER}
            />
            <SimpleBtn
            type={inputsType.buttons.SQUARE}
            color={colors.CRIMSON}
            text={constants.BUTTON_TEXT} 
            value={close} 
            setValue={setClose}/>
        </header>
        </>
    )
}
export default MainHeader;