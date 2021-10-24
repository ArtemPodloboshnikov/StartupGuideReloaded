import type { NextPage } from 'next';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useFormik } from 'formik';
import { useState, useMemo, useEffect } from 'react';
import postRequest from '../../../functions/postRequest';
import SimpleBtn from '../../Buttons/SimpleBtn/SimpleBtn';
import CircleInput from '../../Inputs/CircleInput/CircleInput';
import NeomorhInput from '../../Inputs/NeomorhInput/NeomorhInput';
import HintInput from '../../Inputs/HintInput/HintInput';
import SimpleWindow from '../../ModalWindows/SimpleWindow/SimpleWindow';
import Checkbox from '../../Inputs/Checkbox/Checkbox';
import FilesUploader from '../../Inputs/FilesUploader/FilesUploader';
import classes from './MainHeader.module.scss';
import constants from './constants';
import api from '../../../functions/api';
import russianCities from '../../../constants/russianCities';
import colors from '../../../constants/colors';
import inputsType from '../../../constants/inputsType';
import dictionaryArray from '../../../functions/dictionaryArray';
import generateId from '../../../functions/generateId';

const MainHeader:NextPage = ()=>{

    const cities = useMemo(()=>dictionaryArray(russianCities.map((city)=>{return city.city})), [russianCities]);
    
    const [close, setClose] = useState(true);
    const ids_pages_window = [generateId('register'), generateId('enter')];
    const [currentPage, setCurrentPage] = useState(0);
    const registration_data = useFormik<{

        fio: string,
        phone: string,
        email: string,
        password: string,
        double_password: string,
        city: string,
        I_agree_window_checkbox: boolean,
        telegram: string
    }>({

        initialValues: {

            fio: '',
            phone: '',
            email: '',
            password: '',
            double_password: '',
            city: '',
            I_agree_window_checkbox: false,
            telegram: ''
        },
        onSubmit: ({fio, email, phone, password, double_password, city, I_agree_window_checkbox, telegram})=>{

            async function log_in()
            {
                const response = await postRequest(`${api.HOST}${api.POST.login.query}?${api.POST.login.parameters.EMAIL}=${email}&${api.POST.login.parameters.PASSWORD}=${password}`,
                {})
                console.log(response)
            } 
            log_in()
            // setClose(!close);
            const router = useRouter();
            // router.push('/profile');
        }
    })

    // console.log(registration_data.values);
    
    const marginTop = {marginTop: '5%'};

    const inputs = [registration_data.values.fio, 
                    registration_data.values.phone, 
                    registration_data.values.email, 
                    registration_data.values.password, 
                    registration_data.values.double_password, 
                    registration_data.values.I_agree_window_checkbox];
    let correct: boolean = false;
    console.log(inputs)
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
    
    useEffect(()=>{
        console.log(`currentPage: ${currentPage}`)
        ids_pages_window.map((page_id, index)=>{

            if (index == currentPage)
            {
                console.log(document.getElementById(page_id))
                let page = document.getElementById(page_id) as HTMLElement;
                if (page !== null)
                    page.style.display = 'block';

            }
            else
            {
                let page = document.getElementById(page_id) as HTMLElement;
                if (page !== null)
                    page.style.display = 'none';
            }

        })

    }, [currentPage])
    return (
        <>
        <SimpleWindow 
        onSubmit={registration_data.handleSubmit}
        close={close} 
        setClose={setClose}
        >
                <div id={ids_pages_window[0]}>
                    <div>
                        <p>{constants.TITLES_WINDOW.enter}</p>
                        <NeomorhInput
                        setValue={()=>{

                            setCurrentPage(constants.BUTTON_WINDOW.top.registration.index_page)
                        }}
                        name={constants.BUTTON_WINDOW.top.enter.name}
                        type={inputsType.inputs.neomorh.CIRCLE_BTN}
                        color={colors.WHITE}
                        >
                            {constants.BUTTON_WINDOW.top.enter.text}
                        </NeomorhInput>
                    </div>

                    <div className={classes.list}>
                        <HintInput
                        name={constants.REGISTRATION_INPUTS.FIO.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.FIO.hint}
                        error={constants.REGISTRATION_INPUTS.FIO.error}
                        placeholder={constants.REGISTRATION_INPUTS.FIO.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.FIO.correct_value}
                        important={true}
                        value={registration_data.values.fio}
                        setValue={registration_data.handleChange}
                        />
                        <HintInput 
                        name={constants.REGISTRATION_INPUTS.PHONE.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.PHONE.hint}
                        error={constants.REGISTRATION_INPUTS.PHONE.error}
                        placeholder={constants.REGISTRATION_INPUTS.PHONE.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.PHONE.correct_value}
                        important={true}
                        value={registration_data.values.phone}
                        setValue={registration_data.handleChange}
                        />
                        <HintInput 
                        name={constants.REGISTRATION_INPUTS.EMAIL.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.EMAIL.hint}
                        error={constants.REGISTRATION_INPUTS.EMAIL.error}
                        placeholder={constants.REGISTRATION_INPUTS.EMAIL.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.EMAIL.correct_value}
                        important={true}
                        value={registration_data.values.email}
                        setValue={registration_data.handleChange}
                        />
                        <HintInput 
                        name={constants.REGISTRATION_INPUTS.PASSWORD.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.PASSWORD.hint}
                        error={constants.REGISTRATION_INPUTS.PASSWORD.error}
                        placeholder={constants.REGISTRATION_INPUTS.PASSWORD.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.PASSWORD.correct_value}
                        important={true}
                        type={inputsType.inputs.PASSWORD}
                        value={registration_data.values.password}
                        setValue={registration_data.handleChange}
                        />
                        <HintInput 
                        name={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.hint}
                        error={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.error}
                        placeholder={constants.REGISTRATION_INPUTS.DOUBLE_PASSWORD.placeholder}
                        correctValue={new RegExp(`^${registration_data.values.password}$`, 'g')}
                        important={true}
                        type={inputsType.inputs.PASSWORD}
                        value={registration_data.values.double_password}
                        setValue={registration_data.handleChange}
                        />
                        <HintInput
                        name={constants.REGISTRATION_INPUTS.CITY.name}
                        color={colors.WHITE}
                        type={inputsType.inputs.SELECT}
                        optionsText={cities}
                        hint={constants.REGISTRATION_INPUTS.CITY.hint}
                        error={constants.REGISTRATION_INPUTS.CITY.error}
                        placeholder={constants.REGISTRATION_INPUTS.CITY.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.CITY.correct_value}
                        value={registration_data.values.city}
                        setValue={registration_data.setFieldValue}
                        />
                    
                    </div>
                    <FilesUploader
                    idImage={constants.REGISTRATION_INPUTS.FILES_UPLOADER.id_image}
                    type={inputsType.file_uploader.IMAGE.name}
                    image={inputsType.file_uploader.IMAGE.images.PROFILE}
                    color={colors.DARK_BLUE}
                    name={constants.REGISTRATION_INPUTS.FILES_UPLOADER.name}
                    style={{width: '50%', justifySelf: 'center'}}
                    />
                    <NeomorhInput
                    name={constants.REGISTRATION_INPUTS.TELEGRAM.name}
                    style={{...marginTop, justifySelf: 'center', width: '100%'}} 
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.dark}
                    color={colors.WHITE}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.placeholder}
                    value={registration_data.values.telegram}
                    setValue={registration_data.handleChange}
                    />
                    <Checkbox
                    id={constants.WINDOW_CHECKBOX.id}
                    name={constants.WINDOW_CHECKBOX.name}
                    color={colors.GRAYISH_BLUE}
                    value={registration_data.values.I_agree_window_checkbox}
                    setValue={registration_data.setFieldValue}
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
                    setValue={()=>{
                    
                    }}
                    style={marginTop}
                    >
                        <input type='submit' value={constants.BUTTON_WINDOW.bottom.registration.text}/>    
                    </SimpleBtn>
                </div>
                <div id={ids_pages_window[constants.BUTTON_WINDOW.top.registration.index_page]}>
                    <div>
                        <p>{constants.TITLES_WINDOW.enter}</p>
                        <NeomorhInput
                        setValue={()=>{

                            setCurrentPage(constants.BUTTON_WINDOW.top.enter.index_page)
                        }}
                        name={constants.BUTTON_WINDOW.top.registration.name}
                        type={inputsType.inputs.neomorh.CIRCLE_BTN}
                        color={colors.WHITE}
                        >
                            {constants.BUTTON_WINDOW.top.registration.text}
                        </NeomorhInput>
                    </div>
                    <div className={classes.list}>
                        <HintInput 
                        name={constants.REGISTRATION_INPUTS.EMAIL.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.EMAIL.hint}
                        error={constants.REGISTRATION_INPUTS.EMAIL.error}
                        placeholder={constants.REGISTRATION_INPUTS.EMAIL.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.EMAIL.correct_value}
                        important={true}
                        value={registration_data.values.email}
                        setValue={registration_data.handleChange}
                        />
                        <HintInput 
                        name={constants.REGISTRATION_INPUTS.PASSWORD.name}
                        color={colors.WHITE}
                        hint={constants.REGISTRATION_INPUTS.PASSWORD.hint}
                        error={constants.REGISTRATION_INPUTS.PASSWORD.error}
                        placeholder={constants.REGISTRATION_INPUTS.PASSWORD.placeholder}
                        correctValue={constants.REGISTRATION_INPUTS.PASSWORD.correct_value}
                        important={true}
                        type={inputsType.inputs.PASSWORD}
                        value={registration_data.values.password}
                        setValue={registration_data.handleChange}
                        />
                    </div>
                    <SimpleBtn
                    type={inputsType.buttons.CIRCLE}
                    color={colors.BLUE}
                    disable={!correct}
                    setValue={()=>{
                    
                    }}
                    style={marginTop}
                    >
                        <input type='submit' value={constants.BUTTON_WINDOW.bottom.enter.text}/>    
                    </SimpleBtn>
                </div>
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
            setValue={()=>setClose(!close)}/>
        </header>
        </>
    )
}
export default MainHeader;