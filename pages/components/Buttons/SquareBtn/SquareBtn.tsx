import {Dispatch, ReactNode, SetStateAction} from 'react';
import classes from './SquareBtn.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly value: boolean,
    readonly setValue: Dispatch<SetStateAction<boolean>>
    readonly children: ReactNode
}
const SquareBtn = ({className, children, color='crimson', value, setValue}:Props)=>{

    return (

        <div 
        className={`${classes['wrap_' + color]} ${className}`}
        onClick={()=>setValue(!value)}
        >
            <button>
                {children}
            </button>
        </div>
    )
}

export default SquareBtn;