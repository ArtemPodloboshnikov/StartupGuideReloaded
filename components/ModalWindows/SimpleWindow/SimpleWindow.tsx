import {Dispatch, FormEvent, ReactNode, SetStateAction} from 'react';
import classes from './SimpleWindow.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly children?: ReactNode,
    readonly onSubmit: (e?: FormEvent<HTMLFormElement> | undefined)=>void,
    readonly close: boolean,
    readonly setClose: any,
    readonly backMode?: boolean
}

const SimpleWindow = ({className, children, close, setClose, backMode=false, onSubmit}:Props) =>{

    return (
    
        <div 
        className={classes.wrap + ' ' + className} 
        style={{display: ['block', 'none'][+(close)]}}
        >
            <div className={classes.shadow}></div>
            <div className={classes.wrap_window}>
                <div className={classes.window}>
                    <div 
                    className={!backMode?classes.cross:classes.arrow} 
                    onClick={()=>{
                        if (!backMode)
                        {
                            setClose(!close)
                        }
                        else
                        {
                            setClose()
                        }
                    }}>
                        {backMode?<img src='/icons/arrow_back.svg'/>:''}
                    </div>
                    <form 
                    onSubmit={onSubmit}
                    className={classes.content}>
                        {children}
                    </form>
                </div>
            </div>
        </div>

    )

}

export default SimpleWindow;