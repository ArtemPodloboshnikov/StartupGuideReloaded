import {Dispatch, ReactNode, SetStateAction} from 'react';
import NeomorhBtn from '../../Buttons/NeomorhBtn/NeomorhBtn';
import constants from './constants';
import classes from './SimpleWindow.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly children?: ReactNode,
    readonly close: boolean,
    readonly setClose: Dispatch<SetStateAction<boolean>>
}

const SimpleWindow = ({className, children, close, setClose}:Props) =>{

    return (
    
        <div 
        className={classes.wrap + ' ' + className} 
        style={{display: ['block', 'none'][+(close)]}}
        >
            <div className={classes.shadow}></div>
            <div className={classes.wrap_window}>
                <div className={classes.window}>
                    <div  className={classes.cross} onClick={()=>setClose(!close)}></div>
                    <div  className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SimpleWindow;