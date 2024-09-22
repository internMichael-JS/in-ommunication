import d from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
const Dialog = (props) => {
    let path= '/Messages/'+props.id;
    return (
        <div className={d.dialog}>
            <div className={d.dialogImg}><img src={props.src}
             alt="dialogImg" /></div>
            <div className={d.dialogName}>
            <NavLink to={path} className={navData => navData.isActive ? d.active : d.dialogName}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default Dialog;