import classes from './VariantsChainWindow.module.scss';
import SimpleWindow from '../SimpleWindow/SimpleWindow';
import SimpleBtn from '../../Buttons/SimpleBtn/SimpleBtn';
import Radio from '../../Inputs/Radio/Radio';
import inputsType from '../../../constants/inputsType';
import colors from '../../../constants/colors';

type Props = {

    readonly className?: string,
    readonly onSubmit: any,
    readonly close: boolean,
    readonly setClose: ()=>void,
    readonly titles: {h3: string, h2: string},
    readonly chooseBtn: {values: string[], action: (text: string)=>void},
    readonly radioBtn: {values: string[], ids: string[], name: string, onChange: any},
    readonly nextBtn: {text: string, action: ()=>void},
    readonly nothingBtn: {text: string, action: ()=>void}
}

const VariantsChainWindow = ({className, titles, radioBtn, nextBtn, chooseBtn, nothingBtn, setClose, onSubmit, close}:Props) => {

    return (

        <SimpleWindow
        backMode={true}
        onSubmit={onSubmit}
        close={close}
        setClose={setClose}
        >
            <div className={classes.titles_side}>
                <h3>{titles.h3}</h3>
                <h2>{titles.h2}</h2>
            </div>
            <div
            className={classes.solving_content}
            >
                <div>
                    {(()=>{

                        return chooseBtn.values.map((text)=>{

                            return (

                                <SimpleBtn
                                activeMode={true}
                                type={inputsType.buttons.CIRCLE}
                                color={colors.BLUE}
                                text={text}
                                setValue={()=>chooseBtn.action(text)}
                                />
                            )
                        })
                        

                    })()}
                </div>
                <div>
                    {(()=>{

                    
                        
                        return radioBtn.values.map((text, index)=>{

                            return (

                                <Radio
                                checked={!index}
                                value={text}
                                id={radioBtn.ids[index]}
                                name={radioBtn.name}
                                color={colors.GRAYISH}
                                onChange={radioBtn.onChange}
                                />
                            )

                        })
                        
                    })()}
                </div>
                <div>
                    <SimpleBtn
                    selectMode={true}
                    type={inputsType.buttons.CIRCLE}
                    color={colors.NIGHT_BLUE}
                    text={nextBtn.text}
                    setValue={nextBtn.action}/>
                    <SimpleBtn
                    selectMode={true}
                    type={inputsType.buttons.CIRCLE}
                    color={colors.CRIMSON}
                    text={nothingBtn.text}
                    setValue={nothingBtn.action}
                    />
                </div>
            </div>
        </SimpleWindow>
    )

}

export default VariantsChainWindow;