import { Dispatch, SetStateAction, Children, ReactNode, useState, FormEvent } from "react";
import SimpleBtn from "../../Buttons/SimpleBtn/SimpleBtn";
import colors from "../../../constants/colors";
import inputsType from "../../../constants/inputsType";
import SimpleWindow from "../SimpleWindow/SimpleWindow";
import classes from './QuestionnaireWindow.module.scss';

type Props = {

    readonly close: boolean,
    readonly setClose: Dispatch<SetStateAction<boolean>>,
    readonly titles: string[],
    readonly onSubmit: (e?: FormEvent<HTMLFormElement> | undefined)=>void,
    readonly children: ReactNode,
    readonly className?: string
}

const QuestionnaireWindow = ({close, setClose, children, titles, onSubmit, className}:Props)=>{

    const children_array = Children.toArray(children);
    let children_sorted_array: {[key: string]: ReactNode[]} = {};
    let count_sorted_questions: {[key: string]: number} = {};
    children_array.map(child=>{

        // @ts-ignore
        const name = child.props.id.split('_');
        const key = name[0];
        console.log(child)
        if (children_sorted_array[key] === undefined)
            children_sorted_array[key] = []
        children_sorted_array[key].push(child);
        if (count_sorted_questions[key] === undefined)
            count_sorted_questions[key] = 0;
        count_sorted_questions[key] += 1;
    })
    const first_title = Object.keys(count_sorted_questions)[0];
    if (first_title != '')
    {

        const [currentTitle, setCurrentTitle] = useState(first_title);
        console.log(currentTitle)
        return (
            <SimpleWindow
            onSubmit={onSubmit}
            close={close}
            setClose={setClose}
            className={classes.wrap_simple_window + ' ' + className}
            >
                <div className={classes.titles}>
                    {(()=>{
    
                        return titles.map((title)=>{
    
                            return <SimpleBtn
                                    active={title==first_title}
                                    text={title}
                                    type={inputsType.buttons.CIRCLE}
                                    activeMode={true}
                                    setValue={(e: any)=>{
    
                                        let el = e.target as HTMLElement;
                                        setCurrentTitle(el.innerHTML)
                                    }}
                                    color={colors.WHITE}
                                    />
                        })
    
                    })()}
                </div>
                <div className={classes.questions}>
                   {children_sorted_array[currentTitle]}
                </div>
            </SimpleWindow>
        )
    }

    return <></>

}

export default QuestionnaireWindow;