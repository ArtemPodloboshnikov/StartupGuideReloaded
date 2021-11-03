import classes from './Radio.module.scss';

type Props = {

    readonly className?: string,
    readonly name: string,
    readonly id: string,
    readonly color: string,
    readonly value: string,
    readonly checked?: boolean,
    readonly onChange?: any
}

const Radio = ({name, value, id, checked=false, className, onChange, color}:Props)=>{

    return (

        <div className={classes[`wrap_${color}`] + ' ' + className}>
            <input 
            type="radio" 
            id={id}
            name={name}
            value={value}
            defaultChecked={checked}
            onChange={onChange}
            />
            <label htmlFor={id}>{value}</label>
        </div>
    )

}

export default Radio;