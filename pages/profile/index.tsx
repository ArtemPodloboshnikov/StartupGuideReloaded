import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useFormik} from 'formik';
import { useRecoilState } from 'recoil';
import { clientData } from '../../states/clientData';
import {useState, useEffect, ReactNode} from 'react';
import classes from './index.module.scss';
import FilesUploader from '../../components/Inputs/FilesUploader/FilesUploader';
import InputText from '../../components/Inputs/InputText/InputText';
import NeomorhInput from '../../components/Inputs/NeomorhInput/NeomorhInput';
import Select from '../../components/Inputs/Select/Select';
import TitleUnderline from '../../components/Titles/TitleUnderline/TitleUnderline';
import SimpleBtn from '../../components/Buttons/SimpleBtn/SimpleBtn';
import colors from '../../constants/colors';
import constants from './constants';
import inputsType from '../../constants/inputsType';
import ProfileWindows from '../../components/Common/ProfileWindows/ProfileWindows';

const Profile: NextPage<any> = ({props}) => {

    console.log(props)
    const router = useRouter();
    const [data_user, setDataUser] = useRecoilState(clientData);
    console.log(data_user)
    const [fio, setFio] = useState(data_user.user.name || '');
    const [phone, setPhone] = useState(data_user.user.phone || '');
    const [email, setEmail] = useState(data_user.user.email || '');
    const [city, setCity] = useState(data_user.user.city || '');
    

    const [telegram, setTelegram] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [vk, setVk] = useState('');

    const profiles = Object.keys(constants.profile.PROFILE_OPTIONS);
    const [profilesListActive, setProfilesListActive] = useState(profiles.map(prof=>{return !prof}));
    const [questionnaireWindow, setQuestionnaireWindow] = useState(true);
    const [clientProfileList, setClientProfileList] = useState<[{
        name: string, 
        description: string,
        questions: [{[key: string]: {
            typeField: string,
            placeholder: string,
            options?: string[]
        }}],
        }]>([{name: '', description: '', questions: [{['']: {typeField: '', placeholder: ''}}]}]);
    
    const answersProfile = useFormik<{

       [key: string]: string

    }>({
        initialValues: {

           [constants.solving.RADIO_BUTTONS.name]: constants.solving.RADIO_BUTTONS.text[0],
           [constants.assistants.RADIO_BUTTONS.name]: constants.assistants.RADIO_BUTTONS.text[0]
        },
        onSubmit: (values)=>{


        }
    })

    console.log(answersProfile.values)

    useEffect(()=>{

        if (data_user.access_token != '')
        {
            localStorage.setItem('data_user', JSON.stringify(data_user))
        }
        else
        if (data_user.access_token == '')
        {
            if (typeof window !== 'undefined')
            {
                const local_storage_data = JSON.parse(localStorage.getItem('data_user') as string);
                if (local_storage_data.access_token != '')
                {
                    setDataUser(local_storage_data);
                    setFio(local_storage_data.user.name);
                    setPhone(local_storage_data.user.phone);
                    setEmail(local_storage_data.user.email);
                    setCity(local_storage_data.user.city);
                }
                else
                {
                    router.push('/')
                }
                
            }
        }
    })
    return (
        <>
           
              
            <ProfileWindows 
            answersProfile={answersProfile}
            questionnaireWindow={questionnaireWindow}
            setQuestionnaireWindow={setQuestionnaireWindow}
            clientProfileList={clientProfileList}
            profile={constants.profile}
            />
             
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
