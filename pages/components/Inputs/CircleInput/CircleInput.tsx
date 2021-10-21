import classes from './CircleInput.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly icon?: string,
    readonly placeholder: string,
}

const icons: {[key: string]: string} = {

    'search': 'loupe.svg'
}

const CircleInput = ({className, color='blue', icon='search', placeholder}:Props) =>{

    return (

        <div className={`${classes['wrap_' + color]} ${className}`}>
            <input placeholder={placeholder}/>
            <img src={`/icons/${icons[icon]}`}/>
        </div>
    )

}

export default CircleInput;