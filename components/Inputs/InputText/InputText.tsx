import { Dispatch, SetStateAction } from 'react';
import classes from './InputText.module.scss';

type Props = {

    readonly className?: string,
    readonly style?: {},
    readonly placeholder: string,
    readonly value: string,
    readonly setValue: Dispatch<SetStateAction<string>>,
    readonly color: string
}

const InputText = ({className, style, value, setValue, color, placeholder}:Props) =>
{

    return (

        <div className={classes[`wrap_${color}`] + ' ' + className}>
            <input
            placeholder={placeholder}
            style={style} 
            value={value} 
            onChange={(e)=>setValue(e.target.value)}
            />
        </div>

    )

} 

export default InputText;