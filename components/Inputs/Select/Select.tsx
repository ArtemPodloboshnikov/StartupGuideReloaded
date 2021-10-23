import classes from './Select.module.scss';
import {Dispatch, SetStateAction, useState} from 'react';
import binarySearch from '../../../functions/binarySearch';


type OptionProps = {
    readonly index: number, 
    readonly option: string,
    readonly callBack?: ()=>void
}

type Props = {

    readonly values: {[key: string]: string[]},
    readonly value: string,
    readonly className?: string,
    readonly style?: {},
    readonly color: string,
    readonly setValue: Dispatch<SetStateAction<string>>

}
const Select = ({className, style, color, values, value, setValue}:Props) =>{

    const [options, setOptions] = useState([]);
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

        <div className={classes[`wrap_${color}`] + ' ' + className} style={style}>
            <div>
                <input 
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
                    
                    const changeRotate = () =>{

      
                        ref.classList.toggle(classes.select_active)
                        // ref.style.zIndex = '-1';
                    }

                    document.addEventListener('click', (e)=>{
                        console.log()
                        if (e.target != ref)
                        {
                            ref.classList.remove(classes.select_active)
                            setTimeout(()=>setOptions([]), 50)
                            

                        }
                    })
                    if (!options.length)
                    {
                        changeRotate();
                        const keys = Object.keys((values !== undefined)?values: {'': ''});
                        keys.map((key)=>{

                            if (values !== undefined)
                                values[key].map((option, index)=>{

                                    arr.push(
                                        <SelectOption
                                        index={index}
                                        option={option}
                                        callBack={()=>{changeRotate()}}
                                        />
                                    )
                                })

                        })
                        
                    }
                    else
                    {
                        changeRotate()
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