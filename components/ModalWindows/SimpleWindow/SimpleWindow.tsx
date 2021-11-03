import Props from './constants';
import dynamic from 'next/dynamic';


const Window = dynamic(()=>import('./Window'));
const SimpleWindow = ({className, children, close, setClose, backMode=false, onSubmit}:Props) =>{

    return close? 
    <></>
    :
    <Window 
    className={className}
    setClose={setClose}
    backMode={backMode}
    onSubmit={onSubmit}
    close={close}
    >
        {children}
    </Window>
}

export default SimpleWindow;