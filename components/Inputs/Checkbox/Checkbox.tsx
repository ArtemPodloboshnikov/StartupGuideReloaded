import classes from './Checkbox.module.scss';

type Props = {

    readonly color: string,
    readonly className?: string,
    readonly style?: object
    readonly id: string,
    readonly text: string,
    readonly link?: string,
    readonly href?: string,
    readonly name: string,
    readonly value: boolean,
    readonly setValue: any
}
const Checkbox = ({className, name, style, color, id, text, link, href, value, setValue}:Props) =>{

    return (

        <div 
        style={style}
        className={`${classes['wrap_' + color]} ${className}`}>
            <input type="checkbox" 
            name={name}
            id={id}/>
            <label htmlFor={id} onClick={()=>setValue(name, !value)}>
                    <span>{text} <a href={href}>{link}</a></span>
            </label>
        </div>
    )

}

export default Checkbox;