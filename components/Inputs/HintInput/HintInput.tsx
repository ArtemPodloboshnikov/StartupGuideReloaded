import {Dispatch, memo, SetStateAction, useState} from 'react';
import Select from '../Select/Select';
import classes from './HintInput.module.scss';

type Props = {

    readonly color: string,
    readonly className?: string,
    readonly style?: {},
    readonly hint: string,
    readonly error: string,
    readonly important?: boolean,
    readonly placeholder: string,
    readonly correctValue: RegExp,
    readonly value: string,
    readonly type?: string,
    readonly optionsText?: {[key: string]: string[]},
    readonly optionsValue?: string[],
    readonly setValue: Dispatch<SetStateAction<string>>
}

const HintInput = ({className, placeholder, type='text', color, hint, error, important=false, correctValue, value, setValue, style, optionsText}:Props) =>{
    
    
    
    return (

        <div className={`${classes['wrap_' + color]} ${className}`} style={style}>
            <div>
                <p>{hint}</p>
                <span>{((important)? '*': '')}</span>
            </div>
            {(type=='select' && optionsText !== undefined?
            <Select
            values={optionsText}
            value={value}
            setValue={setValue}
            color={color}
            />
            :
            <input 
            type={type}
            value={value} 
            onChange={(e)=>setValue(e.target.value)} 
            placeholder={placeholder}
            />
            )}
            {(error)?<p style={(correctValue.test(value)?{display: 'none'} : {display: 'block'})} key={`${correctValue.test(value)}`}>{error}</p>:<></>}
        </div>
    )

}

export default memo(HintInput);