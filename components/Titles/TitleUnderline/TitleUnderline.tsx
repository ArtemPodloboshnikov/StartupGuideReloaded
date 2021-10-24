import classes from './TitleUnderline.module.scss';

type Props = {

    text: string,
    color: string
}

const TitleUnderline = ({text, color}:Props)=>{


    return (
        <div className={classes[`wrap_${color}`]}>
            <div></div>
            <h3>{text}</h3>
        </div>

    )
}

export default TitleUnderline;