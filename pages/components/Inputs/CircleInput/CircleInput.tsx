import {ReactNode} from 'react';
import classes from './CircleInput.module.scss';

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly icon?: string,
    readonly children?: ReactNode
}

const icons: {[key: string]: string} = {

    'search': 'loupe.svg'
}

const CircleInput = ({className, children, color='blue', icon='search'}:Props) =>{

    return (

        <div className={`${classes['wrap_' + color]} ${className}`}>
            <input placeholder={children as string}/>
            <img src={`/icons/${icons[icon]}`}/>
        </div>
    )

}

export default CircleInput;