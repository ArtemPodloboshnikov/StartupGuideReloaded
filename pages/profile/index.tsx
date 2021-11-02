import type { NextPage } from 'next';
import {useFormik} from 'formik';
import { useRecoilValue } from 'recoil';
import { clientData } from '../../states/clientData';
import {useState, useMemo, ReactNode} from 'react';
import QuestionnaireWindow from '../../components/ModalWindows/QuestionnaireWindow/QuestionnaireWindow';
import classes from './index.module.scss';
import FilesUploader from '../../components/Inputs/FilesUploader/FilesUploader';
import InputText from '../../components/Inputs/InputText/InputText';
import NeomorhInput from '../../components/Inputs/NeomorhInput/NeomorhInput';
import Select from '../../components/Inputs/Select/Select';
import TitleUnderline from '../../components/Titles/TitleUnderline/TitleUnderline';
import TextArea from '../../components/Inputs/TextArea/TextArea';
import SimpleBtn from '../../components/Buttons/SimpleBtn/SimpleBtn';
import colors from '../../constants/colors';
import constants from './constants';
import Link from 'next/link'
import inputsType from '../../constants/inputsType';
import dictionaryArray from '../../functions/dictionaryArray';

const Profile: NextPage<any> = ({props}) => {

    console.log(props)
    const data_user = useRecoilValue(clientData || '');
    console.log(data_user)
    const [fio, setFio] = useState(data_user.user.name || '');
    const [phone, setPhone] = useState(data_user.user.phone || '');
    const [email, setEmail] = useState(data_user.user.email || '');
    const [city, setCity] = useState(data_user.user.city || '');

    // const market_types = useMemo(()=>
    //     dictionaryArray(Object.keys(constants.profile.MARKET_NICHES)), 
    //     [constants.profile.MARKET_NICHES]
    // )

    const [telegram, setTelegram] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [vk, setVk] = useState('');

    const [profileWindowStep, setProfileWindowStep] = useState(constants.WINDOW_STEPS.profile_about);
    const profiles = Object.keys(constants.profile.PROFILE_OPTIONS);
    const [profilesListActive, setProfilesListActive] = useState(profiles.map(prof=>{return !prof}));
    const [questionnaireWindow, setQuestionnaireWindow] = useState(true);
    const [clientProfileList, setClientProfileList] = useState([{name: '', descrition: '', questions: [{['']: {}}], typeFields: [''], placeholders: ['']}]);
    const [param, setParam] = useState({problem: '', solving: ''});
    const windowTitle = ()=>{

        switch (profileWindowStep)
        {
            case constants.WINDOW_STEPS.profile_about:
            {
                return clientProfileList.map((list)=>{return list.name});
            }
            case constants.WINDOW_STEPS.problems:
            {
                return [`

                    <div class=${classes.titles_side}>
                        <h3>${param.problem}</h3>
                        <h2>${constants.problems.TITLE}</h2>
                    </div>
                `]
            }
        }

        return [''];
    }
    const answersProfile = useFormik<{

       [key: string]: string

    }>({
        initialValues: {

           
        },
        onSubmit: (values)=>{


        }
    })

    console.log(answersProfile.values)
    return (
        <>
            <QuestionnaireWindow
            titles={windowTitle()}
            onSubmit={answersProfile.handleSubmit}
            close={questionnaireWindow}
            setClose={setQuestionnaireWindow}
            >
              
                {(()=>{

                    let content: ReactNode[] = [];
                    switch (profileWindowStep)
                    {
                        case constants.WINDOW_STEPS.profile_about:
                        {

                            clientProfileList.map((prof)=>{
                                
                                const html_questions = Object.values(prof.questions).map((questions, question_index)=>{
                                    // console.log(questions)
                                    return Object.keys(questions).map((question)=>{
        
                                        console.log(question_index)
                                        return (
                                            <div id={`${prof.name}_${question_index}`}>
                                                <h3>{question_index+1}</h3>
                                                <div>
                                                    {question}
                                                    <img 
                                                    onClick={()=>{

                                                        setParam({problem: question, solving: ''});
                                                        setProfileWindowStep(constants.WINDOW_STEPS.problems);
                                                    }}
                                                    src={constants.profile.QUESTION_ICON}
                                                    />
                                                </div>
                                                {(()=>{
                                                    let input: ReactNode;
                                                    // @ts-ignore
                                                    switch(questions[question].typeField)
                                                    {
                                                        case constants.profile.TYPE_FIELDS.TEXTAREA:
                                                        {
                                                            input = <TextArea
                                                            name={`${prof.name}_${question}`}
                                                            className={classes.textarea}
                                                            //@ts-ignore
                                                            placeholder={questions[question].placeholder}
                                                            color={colors.DARK_BLUE}
                                                            value={answersProfile.values[`${prof.name}_${question}`]}
                                                            setValue={answersProfile.handleChange}
                                                            />
                                                            break;
                                                        }
                                                        case constants.profile.TYPE_FIELDS.SELECT:
                                                        {
                                                            //@ts-ignore
                                                            const options =  dictionaryArray(questions[question].options)
                                                            input = <Select
                                                            className={classes.select_options}
                                                            name={`${prof.name}_${question}`}
                                                            //@ts-ignore
                                                            placeholder={questions[question].placeholder}
                                                            color={colors.DARK_BLUE}
                                                            value={answersProfile.values[`${prof.name}_${question}`]}
                                                            setValue={answersProfile.setFieldValue}
                                                            values={options}
                                                            />    
                                                            break;
        
                                                        }
                                                    }
                                                    return input;
            
                                                })()}
                                            </div>
                                        )
                                    })
        
                                })
                                content.push(html_questions);
                            })
                            break;
                        }
                        case constants.WINDOW_STEPS.problems:
                        {
                            // console.log(constants.problems.BUTTONS_TEXT[param.problem])
                            content.push(
                            <div
                            id={'Стартап_0'} 
                            style={{display: 'grid', gridAutoFlow: 'row'}}
                            >
                                {(()=>{
                                    //@ts-ignore
                                    return constants.problems.BUTTONS_TEXT[param.problem].map((text)=>{

                                        return <SimpleBtn
                                               type={inputsType.buttons.CIRCLE}
                                               color={colors.WHITE}
                                               text={text}
                                               setValue={()=>{


                                               }}
                                                />

                                    })

                                })()}
                            </div>
                            )
                            break;
                        }
                    }
                    return content;
                })()}
             
            </QuestionnaireWindow>
            <FilesUploader 
            idImage={constants.FILE_UPLOADER.id_image}
            className={classes.load_photo}
            name={constants.FILE_UPLOADER.name}
            color={colors.DARK_BLUE}
            type={inputsType.file_uploader.IMAGE.name}
            image={inputsType.file_uploader.IMAGE.images.PROFILE}
            />
            <div className={classes.personal_data}>
                <TitleUnderline
                color={colors.NIGHT_BLUE}
                text={constants.personal_data.TITLE}
                />
                <InputText
                placeholder={constants.personal_data.FIO.placeholder}
                color={colors.DARK_BLUE}
                value={fio}
                setValue={setFio}
                />
                <InputText
                placeholder={constants.personal_data.PHONE.placeholder}
                color={colors.DARK_BLUE}
                value={phone}
                setValue={setPhone}
                />
                <InputText
                placeholder={constants.personal_data.EMAIL.placeholder}
                color={colors.DARK_BLUE}
                value={email}
                setValue={setEmail}
                />
                <InputText
                placeholder={constants.personal_data.CITY.placeholder}
                color={colors.DARK_BLUE}
                value={city}
                setValue={setCity}
                />
                <SimpleBtn
                text={constants.personal_data.SAVE_BTN}
                type={inputsType.buttons.CIRCLE}
                color={colors.BLUE}
                setValue={()=>{

                    let profilesList: any = [];
                    profilesListActive.map((flag, index)=>{

                        if (flag)
                        {
                            profilesList.push(
                                {...constants.profile.PROFILE_OPTIONS[profiles[index]], 
                                name: profiles[index]}
                            );
                        }
                        
                    })

                    setClientProfileList(profilesList);
                    setQuestionnaireWindow(false);
                }}
                />
            </div>
            <div className={classes.profile}>
                <TitleUnderline
                color={colors.NIGHT_BLUE}
                text={constants.profile.TITLE}
                />
                <div>
                    <div>
                        {(()=>{

                            let buttons: ReactNode[] = [];
                            profiles.map((prof, index)=>{

                                let new_profile_list_active = [...profilesListActive];
                                new_profile_list_active[index] = !profilesListActive[index];
                                buttons.push(
                                    <div>
                                        <img 
                                        onClick={()=>alert(constants.profile.PROFILE_OPTIONS[prof].description)}
                                        src={constants.profile.QUESTION_ICON}
                                        />
                                        <SimpleBtn
                                        text={prof}
                                        color={colors.GRAYISH_WHITE}
                                        selectMode={true}
                                        type={inputsType.buttons.CIRCLE}
                                        setValue={()=>setProfilesListActive(new_profile_list_active)}
                                        />
                                    </div>
                                )
                            })
                            return buttons
                        })()}
                        
                    </div>

                </div>
            </div>
            <div className={classes.networks}>
                <TitleUnderline
                color={colors.NIGHT_BLUE}
                text={constants.networks.TITLE}
                />
                <div>
                    <NeomorhInput
                    name={constants.networks.TELEGRAM.name}
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.dark}
                    color={colors.WHITE}
                    value={telegram}
                    setValue={setTelegram}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.placeholder}
                    />
                    <NeomorhInput
                    name={constants.networks.INSTAGRAM.name}
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.INSTAGRAM.dark}
                    color={colors.WHITE}
                    value={instagram}
                    setValue={setInstagram}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.INSTAGRAM.placeholder}
                    />
                    <NeomorhInput
                    name={constants.networks.VK.name}
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.VK.dark}
                    color={colors.WHITE}
                    value={vk}
                    setValue={setVk}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.VK.placeholder}
                    />
                    <NeomorhInput
                    name={constants.networks.FACEBOOK.name}
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.FACEBOOK.dark}
                    color={colors.WHITE}
                    value={facebook}
                    setValue={setFacebook}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.FACEBOOK.placeholder}
                    />
                </div>
            </div>
            <div className={classes.forInvestors}>
                <TitleUnderline
                color={colors.WHITE}
                text={constants.for_investors.TITLE}
                />
            </div>
        </>
    )
}

export default Profile

export async function getStaticProps() {

    let data = {};
    try
    {
        const res = await fetch('http://startup-service.mvpstudio.io/api/users')
        data = await res.json()

    }
    catch(error)
    {
        console.log(error)
    }
    return {
       props: data
    }
}
