import {ReactNode} from 'react';
import classes from './SquareBtn.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly children: ReactNode;
}
const SquareBtn = ({className, children, color='crimson'}:Props)=>{

    return (

        <div className={`${classes['wrap_' + color]} ${className}`}>
            <button>{children}</button>
        </div>
    )
}

export default SquareBtn;