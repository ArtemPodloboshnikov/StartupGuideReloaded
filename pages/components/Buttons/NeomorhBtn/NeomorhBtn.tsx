import {ReactNode} from 'react';
import classes from './NeomorhBtn.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly children: ReactNode;
}
const NeomorhBtn = ({className, children, color='dark_blue'}:Props)=>{

    return (

        <div className={`${classes['wrap_' + color]} ${className}`}>
            <button>{children}</button>
        </div>
    )
}

export default NeomorhBtn;