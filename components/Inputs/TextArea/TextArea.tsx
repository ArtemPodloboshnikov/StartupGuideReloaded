import { Dispatch, SetStateAction } from 'react';
import classes from './TextArea.module.scss';

type Props = {

    readonly className?: string,
    readonly value: string,
    readonly color: string,
    readonly name: string,
    readonly placeholder?: string,
    readonly setValue: any

}

const TextArea = ({className, color, placeholder, name, value, setValue}:Props) =>{

    return (
        <div className={className}>
            <textarea
            name={name}
            className={classes[`wrap_${color}`]}
            value={value}
            placeholder={placeholder}
            onChange={setValue}
            />
        </div>
    )
}

export default TextArea;