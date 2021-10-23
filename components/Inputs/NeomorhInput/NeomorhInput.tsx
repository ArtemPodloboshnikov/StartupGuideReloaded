import {Dispatch, ReactNode, SetStateAction} from 'react';
import classes from './NeomorhInput.module.scss';
import inputsType from '../../../constants/inputsType';

type Props = {

    readonly color: string,
    readonly className?: string,
    readonly style?: {},
    readonly type: string,
    readonly typeNetworks?: string,
    readonly value?: string,
    readonly placeholder?: string,
    readonly setValue?: Dispatch<SetStateAction<string>>,
    readonly children?: ReactNode
}
const NeomorhBtn = ({className, children, color, type, typeNetworks, value, setValue, style, placeholder}:Props)=>{

    return (
        <div className={`${classes[`wrap_${type}_${color}`]} ${className}`} style={style}>
            {(()=>{
                
                if (type == inputsType.inputs.neomorh.SOCIAL_NETWORKS.name && 
                    typeNetworks !== undefined &&
                    setValue !== undefined)
                {
                    return (
                        <>
                            <input 
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}
                            placeholder={placeholder}
                            />
                            <img src={typeNetworks}/>
                        </>
                    )
                }
                else if (type == inputsType.inputs.neomorh.CIRCLE_BTN)
                {
                    return (

                        <button>{children}</button>
                    )
                }

            })()}
        </div>
    )
}

export default NeomorhBtn;