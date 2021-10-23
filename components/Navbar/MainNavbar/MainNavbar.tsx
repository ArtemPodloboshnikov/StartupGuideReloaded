import type { NextPage } from 'next';
import classes from './MainNavbar.module.scss';
import constants from '../../../constants/constants';

const MainNavbar:NextPage = ()=>{

    return (
        <nav className={classes.navbar}>
            <img src={constants.paths.LOGO.path} alt={constants.paths.LOGO.alt}/>
            <img src={constants.paths.LAYERS.path} alt={constants.paths.LAYERS.alt}/>
            <img src={constants.paths.STEPS.path} alt={constants.paths.STEPS.alt}/>
            <img src={constants.paths.ARROW_TOP.path} alt={constants.paths.ARROW_TOP.alt}/>
            <img src={constants.paths.DOOR.path} alt={constants.paths.DOOR.alt}/>
            <img src={constants.paths.AIRPLAN.path} alt={constants.paths.AIRPLAN.alt}/>
            <img src={constants.paths.KEY.path} alt={constants.paths.KEY.alt}/>
            <img src={constants.paths.TRIANGLE.path} alt={constants.paths.TRIANGLE.alt}/>
            <img src={constants.paths.HOME.path} alt={constants.paths.HOME.alt}/>
            <img src={constants.paths.SPROUT.path} alt={constants.paths.SPROUT.alt}/>
        </nav>
    )
}
export default MainNavbar;