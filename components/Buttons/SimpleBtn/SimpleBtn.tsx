import {ReactNode, useRef} from 'react';
import classes from './SimpleBtn.module.scss';

type Props = {

    readonly color: string,
    readonly className?: string,
    readonly setValue: (e?: any)=>void,
    readonly text?: string,
    readonly type: string,
    readonly style?: object,
    readonly children?: ReactNode,
    readonly selectMode?: boolean,
    readonly activeMode?: boolean,
    readonly active?: boolean,
    readonly disable?: boolean
}
const SimpleBtn = ({className, text, children, disable=false, color, type, style, activeMode, selectMode, active=false, setValue}:Props)=>{

    const wrap_ref = useRef(null);
    
    return (

        <div 
       
        style={style}
        className={`${classes[`wrap_${type}_${color}`]} ${className}`}
        onClick={(e)=>{

            let flag = true;
            (disable)?flag=false:setValue(e);
            if (selectMode && flag)
            {
                if (wrap_ref.current !== null)
                {
                    const ref = wrap_ref.current as HTMLElement;
                    ref.classList.toggle(classes.active_hover)

                }
            }
            else
            if(activeMode && flag)
            {
                if (wrap_ref.current !== null)
                {
                    
                    const ref = wrap_ref.current as HTMLElement;
                    document.addEventListener('click', (e)=>{
                        const current_element = e.target as HTMLElement;
                        console.log(current_element.classList.contains('button'))
                        if (current_element != ref && current_element.classList.contains('button'))
                        {
                            ref.classList.remove(classes.active_hover)
                        }
                    })

                    ref.classList.add(classes.active_hover)
                }
            }

        }}
        >
            <div ref={wrap_ref} className={`button ${(active)?classes.active_hover:''}`}>
                {text||children}
            </div>
        </div>
    )
}

export default SimpleBtn;