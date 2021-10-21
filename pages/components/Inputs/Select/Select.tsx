import classes from './Select.module.scss';
import {Dispatch, SetStateAction, useState} from 'react';


type OptionProps = {
    readonly index: number, 
    readonly option: string,
    readonly callBack?: ()=>void
}

type Props = {

    readonly values: {[key: string]: string[]},
    readonly value: string,
    readonly className?: string,
    readonly color: string,
    readonly setValue: Dispatch<SetStateAction<string>>

}
const Select = ({className, color='white', values, value, setValue}:Props) =>{

    const [options, setOptions] = useState([]);
    const [inputKey] = useState(Math.random());
    const SelectOption = ({index, option, callBack}:OptionProps)=>{

        return (
            
            <div 
            key={Math.random() * index}
            onClick={()=>{

                if (callBack !== undefined)
                    callBack();
                setValue(option);
                console.log(option)
                setOptions([]);

            }}
            >
                {option}
            </div>
        )

    }

    return (

        <div className={classes[`wrap_${color}`] + ' ' + className}>
            <div>
                <input 
                key={inputKey}
                value={value} 
                onBlur={()=>setTimeout(()=>setOptions([]), 200)}
                onChange={(e)=>{

                    const current_value: string = e.target.value;
                    let buf_options: any = [];
                    if (values !== undefined)
                    {
                        values[(current_value[0] !== undefined)?current_value[0].toUpperCase(): '']?.map((option, index)=>{
                            const regexp = new RegExp(`^${current_value}`, 'gi')
                            if (regexp.test(option))
                            {
                                buf_options.push(
                                    <SelectOption
                                    index={index}
                                    option={option}
                                    />
                                );
                            }
                        })

                    }
                    setOptions(buf_options);
                    setValue(current_value);
                }}/>
                <img 
                src='/icons/arrow.svg'
                style={{}}
                onClick={(e)=>{
                    
                    let arr: any = [];
                    const ref = e.target as HTMLElement;

                    if (!options.length)
                    {
                        ref.style.transform = 'rotate(180deg)';
                        const keys = Object.keys((values !== undefined)?values: {'': ''});
                        keys.map((key)=>{

                            if (values !== undefined)
                                values[key].map((option, index)=>{

                                    arr.push(
                                        <SelectOption
                                        index={index}
                                        option={option}
                                        callBack={()=>{ref.style.transform = 'rotate(0deg)';}}
                                        />
                                    )
                                })

                        })
                        
                    }
                    else
                    {
                        ref.style.transform = 'rotate(0deg)';
                    }
                    setOptions(arr)
                }}
                />
            </div>
            <div style={{display: ['none', 'block'][+(options.length > 0)]}}>
            {options}
            </div>
        </div>
    )
}

export default Select;