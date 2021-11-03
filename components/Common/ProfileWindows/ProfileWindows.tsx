import classes from './ProfileWindows.module.scss';
import Select from '../../Inputs/Select/Select';
import SimpleBtn from '../../Buttons/SimpleBtn/SimpleBtn';
import TextArea from '../../Inputs/TextArea/TextArea';
import QuestionnaireWindow from '../../ModalWindows/QuestionnaireWindow/QuestionnaireWindow';
import SimpleWindow from '../../ModalWindows/SimpleWindow/SimpleWindow';
import VariantsChainWindow from '../../ModalWindows/VariantsChainWindow/VariantsChainWindow';

import constants from './constants';
import inputsType from '../../../constants/inputsType';
import colors from '../../../constants/colors';

import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import dictionaryArray from '../../../functions/dictionaryArray';

type Props = {

    readonly answersProfile: any,
    readonly questionnaireWindow: boolean,
    readonly setQuestionnaireWindow: Dispatch<SetStateAction<boolean>>,
    readonly profile: any,
    readonly clientProfileList: [{
                                name: string, 
                                description: string,
                                questions: [{[key: string]: {
                                    typeField: string,
                                    placeholder: string,
                                    options?: string[]
                                }}],
                                }]
}

const ProfileWindows = ({answersProfile, questionnaireWindow, setQuestionnaireWindow, clientProfileList, profile}:Props) =>{
    
    const [profileWindowStep, setProfileWindowStep] = useState(constants.WINDOW_STEPS.profile_about);
    const [param, setParam] = useState({
        question: '', 
        problem: '', 
        solving: '', 
        assistants: '', 
        favourites: '',
        ask: '',
        reception: ''
    });

    return (

        <>
           
              
                {(()=>{

                    let window: ReactNode[] = [];
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

                                                        setParam({
                                                            question: question, 
                                                            problem: '', 
                                                            solving: '',
                                                            assistants: '',
                                                            favourites: '',
                                                            ask: '',
                                                            reception: ''
                                                        });
                                                        setProfileWindowStep(constants.WINDOW_STEPS.problems);
                                                    }}
                                                    src={profile.QUESTION_ICON}
                                                    />
                                                </div>
                                                {(()=>{
                                                    let input: ReactNode;
                                                    // @ts-ignore
                                                    switch(questions[question].typeField)
                                                    {
                                                        case profile.TYPE_FIELDS.TEXTAREA:
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
                                                        case profile.TYPE_FIELDS.SELECT:
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
                                window.push(
                                        <QuestionnaireWindow
                                        titles={clientProfileList.map((list)=>{return list.name})}
                                        onSubmit={answersProfile.handleSubmit}
                                        close={questionnaireWindow}
                                        setClose={setQuestionnaireWindow}
                                        >
                                            {html_questions}
                                        </QuestionnaireWindow>
                                    );
                            })
                            break;
                        }
                        case constants.WINDOW_STEPS.problems:
                        {
                            // console.log(constants.problems.BUTTONS_TEXT[param.problem])
                            window.push(
                                <SimpleWindow
                                backMode={true}
                                onSubmit={answersProfile.handleSubmit}
                                close={questionnaireWindow}
                                setClose={()=>{
                                    setParam({
                                        ...param,
                                        question: ''
                                    })
                                    setProfileWindowStep(constants.WINDOW_STEPS.profile_about)
                                }}
                                >
                                    <div className={classes.titles_side}>
                                        <h3>{param.question}</h3>
                                        <h2>{constants.problems.TITLE}</h2>
                                    </div>
                                    <div
                                    className={classes.problem_content}
                                    >
                                        {(()=>{
                                            let problems: ReactNode[] = [];
                                            problems.push(
                                                //@ts-ignore
                                                constants.problems.BUTTONS_TEXT[param.question].map((text)=>{

                                                return <SimpleBtn
                                                       type={inputsType.buttons.CIRCLE}
                                                       color={colors.WHITE}
                                                       text={text}
                                                       setValue={()=>{

                                                            setParam({
                                                                ...param,
                                                                problem: text
                                                            })
                                                            setProfileWindowStep(constants.WINDOW_STEPS.solving);

                                                       }}
                                                       />

                                                })
                                            )
                                            problems.push(

                                                <SimpleBtn
                                                type={inputsType.buttons.CIRCLE}
                                                color={colors.CRIMSON}
                                                text={constants.problems.LAST_BUTTON_TEXT}
                                                setValue={()=>{


                                                }}
                                                />
                                            )
                                            return problems;

                                        })()}
                                    </div>
                                </SimpleWindow>
                            )
                            break;
                        }
                        case constants.WINDOW_STEPS.solving:
                        {
                            window.push(
                                <VariantsChainWindow
                                close={questionnaireWindow}
                                onSubmit={answersProfile.handleSubmit}
                                setClose={()=>{
                                    setParam({
                                        ...param,
                                        problem: ''
                                    })
                                    setProfileWindowStep(constants.WINDOW_STEPS.problems)
                                }}
                                titles={{h3: param.problem, h2: constants.solving.TITLE}}
                                chooseBtn={{
                                    //@ts-ignore
                                    values: constants.solving.BUTTONS_TEXT[param.problem], 
                                    action: (text: string)=>{

                                    setParam({
                                        ...param,
                                        solving: text
                                    })
                                }}}
                                radioBtn={{
                                    values: constants.solving.RADIO_BUTTONS.text,
                                    name: constants.solving.RADIO_BUTTONS.name,
                                    ids: constants.solving.RADIO_BUTTONS.ids,
                                    onChange: answersProfile.handleChange
                                }}
                                nextBtn={{
                                    text: constants.solving.BOTTOM_BUTTONS.next.text,
                                    action: ()=>{

                                        if (answersProfile.values[constants.solving.RADIO_BUTTONS.name] == constants.solving.RADIO_BUTTONS.text[0])
                                        {
                                            setProfileWindowStep(constants.WINDOW_STEPS.assistants);
                                        }
        
                                    }
                                }}
                                nothingBtn={{
                                    text: constants.solving.BOTTOM_BUTTONS.not_solving.text,
                                    action: ()=>{
                                        setParam({
                                            ...param,
                                            assistants: ''
                                        })
                                        setProfileWindowStep(constants.WINDOW_STEPS.assistants);
            
                                    }
                                }}
                                />

                            )
                            break;

                        }
                        case constants.WINDOW_STEPS.assistants:
                        {
                            window.push(
                                <VariantsChainWindow
                                close={questionnaireWindow}
                                onSubmit={answersProfile.handleSubmit}
                                setClose={()=>{
                                    setParam({
                                        ...param,
                                        solving: ''
                                    })
                                    setProfileWindowStep(constants.WINDOW_STEPS.solving)
                                }}
                                titles={{h3: param.solving, h2: constants.assistants.TITLE}}
                                chooseBtn={{
                                    //@ts-ignore
                                    values: constants.assistants.BUTTONS_TEXT[param.solving], 
                                    action: (text: string)=>{

                                    setParam({
                                        ...param,
                                        assistants: text
                                    })
                                }}}
                                radioBtn={{
                                    values: constants.assistants.RADIO_BUTTONS.text,
                                    name: constants.assistants.RADIO_BUTTONS.name,
                                    ids: constants.assistants.RADIO_BUTTONS.ids,
                                    onChange: answersProfile.handleChange
                                }}
                                nextBtn={{
                                    text: constants.assistants.BOTTOM_BUTTONS.next.text,
                                    action: ()=>{

                                        if (answersProfile.values[constants.assistants.RADIO_BUTTONS.name] == constants.assistants.RADIO_BUTTONS.text[0])
                                        {
                                            setProfileWindowStep(constants.WINDOW_STEPS.expert);
                                        }
        
                                    }
                                }}
                                nothingBtn={{
                                    text: constants.assistants.BOTTOM_BUTTONS.nothing_fits.text,
                                    action: ()=>{
                                        setParam({
                                            ...param,
                                            assistants: ''
                                        })
                                        setProfileWindowStep(constants.WINDOW_STEPS.assistants);
            
                                    }
                                }}
                                />
                                
                            )
                            break;
                        }
                        case constants.WINDOW_STEPS.expert:
                        {

                            window.push(
                                <SimpleWindow
                                backMode={true}
                                onSubmit={answersProfile.handleSubmit}
                                close={questionnaireWindow}
                                setClose={()=>{
                                    setParam({
                                        ...param,
                                        assistants: ''
                                    })
                                    setProfileWindowStep(constants.WINDOW_STEPS.assistants)
                                }}
                                >
                                    <div className={classes.titles_side}>
                                        <h3>{param.assistants}</h3>
                                        <h2>{constants.expert.TITLE}</h2>
                                    </div>
                                    <div
                                    className={classes.problem_content}
                                    >
                                        {(()=>{
                                            
                                            return (
                                                
                                                constants.expert.BUTTONS.map((obj)=>{

                                                return <SimpleBtn
                                                       type={inputsType.buttons.CIRCLE}
                                                       color={colors.WHITE}
                                                       text={obj.text}
                                                       setValue={()=>{

                                                          
                                                            setProfileWindowStep(obj.next_window);

                                                       }}
                                                       />

                                                })
                                            )
                                           

                                        })()}
                                    </div>
                                </SimpleWindow>
                            )
                            break;
                        }

                    }
                    return window;
                })()}
            </>
    )
}

export default ProfileWindows;