import type { NextPage } from 'next';
import {useState, useMemo} from 'react';
import dictionaryArray from '../../functions/dictionaryArray';
import classes from './index.module.scss';
import FilesUploader from '../../components/Inputs/FilesUploader/FilesUploader';
import InputText from '../../components/Inputs/InputText/InputText';
import NeomorhInput from '../../components/Inputs/NeomorhInput/NeomorhInput';
import Select from '../../components/Inputs/Select/Select';
import colors from '../../constants/colors';
import constants from './constants';
import Link from 'next/link'
import inputsType from '../../constants/inputsType';

const Profile: NextPage = () => {

    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    const [profile, setProfile] = useState(Object.keys(constants.profile.PROFILE_OPTIONS)[0]);
    const profiles_list = useMemo(()=>
        dictionaryArray(Object.keys(constants.profile.PROFILE_OPTIONS)), 
        [constants.profile.PROFILE_OPTIONS]
    )

    const [telegram, setTelegram] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [vk, setVk] = useState('');

    return (
        <>
            <FilesUploader 
            className={classes.load_photo}
            name={constants.FILE_UPLOADER.name}
            color={colors.DARK_BLUE}
            type={inputsType.file_uploader.IMAGE.name}
            image={inputsType.file_uploader.IMAGE.images.PROFILE}
            />
            <div className={classes.personal_data}>
                <div className={classes.title}>
                    <div></div>
                    <h3>{constants.personal_data.TITLE}</h3>
                </div>
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
            </div>
            <div className={classes.profile}>
                <div className={classes.title}>
                    <div></div>
                    <h3>{constants.profile.TITLE}</h3>
                </div>
                <div>
                    <div>
                        <Select
                        color={colors.DARK_BLUE}
                        value={profile}
                        setValue={setProfile}
                        values={profiles_list}
                        />
                        <span>{constants.profile.PROFILE_OPTIONS[profile]}</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className={classes.networks}>
                <div className={classes.title}>
                    <div></div>
                    <h3>{constants.networks.TITLE}</h3>
                </div>
                <div>
                    <NeomorhInput
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.dark}
                    color={colors.WHITE}
                    value={telegram}
                    setValue={setTelegram}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.TELEGRAM.placeholder}
                    />
                    <NeomorhInput
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.INSTAGRAM.dark}
                    color={colors.WHITE}
                    value={instagram}
                    setValue={setInstagram}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.INSTAGRAM.placeholder}
                    />
                    <NeomorhInput
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.VK.dark}
                    color={colors.WHITE}
                    value={vk}
                    setValue={setVk}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.VK.placeholder}
                    />
                    <NeomorhInput
                    type={inputsType.inputs.neomorh.SOCIAL_NETWORKS.name}
                    typeNetworks={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.FACEBOOK.dark}
                    color={colors.WHITE}
                    value={facebook}
                    setValue={setFacebook}
                    placeholder={inputsType.inputs.neomorh.SOCIAL_NETWORKS.typeNetworks.FACEBOOK.placeholder}
                    />
                </div>
            </div>
        </>
    )
}

export default Profile
