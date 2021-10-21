import {Dispatch, memo, ReactNode, SetStateAction, useState} from 'react';
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
    readonly optionsText?: string[],
    readonly optionsValue?: string[],
    readonly setValue: Dispatch<SetStateAction<string>>
}

const HintInput = ({className, placeholder, type='text', color='white', hint, error, important=false, correctValue, value, setValue, optionsValue, optionsText}:Props) =>{
    
    const [selectValue, setSelectValue] = useState('');
    const [options, setOptions] = useState([])
    const visible = (correctValue.test(value)?{display: 'none'} : {display: 'block'});
    console.log(optionsText)
    return (

        <div className={`${classes['wrap_' + color]} ${className}`}>
            <div>
                <p>{hint}</p>
                <span>{((important)? '*': '')}</span>
            </div>
            {(type=='select'?
            <div className={classes.select}>
                <input value={selectValue} 
                onBlur={()=>setOptions([])}
                onChange={(e)=>{
                    setSelectValue(e.target.value);
                    const regexp = new RegExp(`${e.target.value}`, 'i');
                    let buf_options: any = [];
                    optionsText?.map((text, index)=>{
                        console.log(regexp.test(text))
                        if (regexp.test(text))
                        {
                            buf_options.push(
                                <div 
                                key={(optionsValue !== undefined)?optionsValue[index]: text}
                                onClick={()=>{

                                    setSelectValue(text)
                                    setValue(text);
                                    setOptions([]);

                                }}
                                id={(optionsValue !== undefined)?optionsValue[index]: text}>
                                    {text}
                                </div>
                                )
                        }
                            
                    })
                    console.log(buf_options)
                    setOptions(buf_options);
                }}/>
                <div style={{display: ['none', 'block'][+(options.length > 0)]}}>
                   {options}
                </div>
            </div>
            :
            <input 
            type={type}
            value={value} 
            onChange={(e)=>setValue(e.target.value)} 
            placeholder={placeholder}
            />
            )}
            <p style={visible} key={`${correctValue.test(value)}`}>{error}</p>
        </div>
    )

}

export default memo(HintInput);