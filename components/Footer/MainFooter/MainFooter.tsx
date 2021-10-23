import type { NextPage } from 'next';
import classes from './MainFooter.module.scss';
import global_constants from '../../../constants/constants';
import constants from './constants';

const MainFooter:NextPage = ()=>{

    return (
        
       <footer className={classes.footer}>
           <div>
                <img 
                src={global_constants.paths.LOGO_INNOVATION.path} 
                alt={global_constants.paths.LOGO_INNOVATION.alt}
                />
           </div>
           <div>
                <div>
                    <div>
                    <h5>
                        <a href={constants.LINK.href}>
                            {constants.LINK.text}
                        </a>
                    </h5>
                    <p><a href={constants.PERSONAL_POLICY.href}>
                        {constants.PERSONAL_POLICY.text}
                        </a>
                    </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            {constants.MISSPELL.text}
                            <span>{constants.MISSPELL.hot_key}</span>
                        </p>
                        <p>
                            {constants.EMAIL.text}
                            <span> {constants.EMAIL.address}</span>
                        </p>
                    </div>
                </div>
           </div>
       </footer>
    )
}
export default MainFooter;