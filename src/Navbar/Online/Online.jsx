import classes from './Online.module.css';

const Online = (props) => {
    return (
        <div className={classes.online}>
            <div className={classes.onlineImg}>
                <img src={props.src} alt="onlineImg" />
            </div>
            <div className="onlineName">
                <span>{props.name}</span>
            </div>
        </div>
    );
};

export default Online;