import {Dispatch, ReactNode, SetStateAction} from 'react';
import classes from './SimpleBtn.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly value: boolean,
    readonly setValue: Dispatch<SetStateAction<boolean>>,
    readonly text: string,
    readonly type?: string,
    readonly style?: object,
    readonly disable?: boolean
}
const SquareBtn = ({className, text, disable=false, color='crimson', type='square', style, value, setValue}:Props)=>{

    return (

        <div 
        style={style}
        className={`${classes[`wrap_${type}_${color}`]} ${className}`}
        onClick={()=>(disable)?setValue(value):setValue(!value)}
        >
            <button>
                {text}
            </button>
        </div>
    )
}

export default SquareBtn;