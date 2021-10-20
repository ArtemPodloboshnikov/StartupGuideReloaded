import {Dispatch, ReactNode, SetStateAction} from 'react';
import classes from './HintInput.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly hint: string,
    readonly error: string,
    readonly important?: boolean,
    readonly placeholder: string,
    readonly correctValue: RegExp,
    readonly value: string,
    readonly type?: string,
    readonly setValue: Dispatch<SetStateAction<string>>
}

const HintInput = ({className, placeholder, type='text', color='white', hint, error, important=false, correctValue, value, setValue}:Props) =>{
    console.log(correctValue, value, ((correctValue.test(value))?{display: 'none'}: {display: 'block'}))
    const visible = ((correctValue.test(value))?{display: 'none'} : {display: 'block'});
    return (

        <div className={`${classes['wrap_' + color]} ${className}`}>
            <div>
                <p>{hint}</p>
                <span>{((important)? '*': '')}</span>
            </div>
            <input 
            type={type}
            value={value} 
            onChange={(e)=>setValue(e.target.value)} 
            placeholder={placeholder}
            />
            <p style={visible}>{error}</p>
        </div>
    )

}

export default HintInput;