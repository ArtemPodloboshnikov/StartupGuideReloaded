import Props from './constants';
import classes from './SimpleWindow.module.scss';

const Window = ({className, children, close, setClose, backMode, onSubmit}:Props) =>{

    return (

        <div 
        className={classes.wrap + ' ' + className} 
        >
            <div className={classes.shadow}></div>
            <div className={classes.wrap_window}>
                <div className={classes.window}>
                    <div 
                    className={!backMode?classes.cross:classes.arrow} 
                    onClick={()=>{
                        if (!backMode)
                        {
                            setClose(!close);
                        }
                        else
                        {
                            setClose();
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

export default Window;