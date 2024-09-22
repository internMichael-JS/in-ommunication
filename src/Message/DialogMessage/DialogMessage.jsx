import d from './DialogMessage.module.css';
const DialogMessage = (props) => {
    
    if (props.id > 0) {
        return (
          <div className={d.otherMessage}><div className={d.dialogMessage}>{props.message}</div></div>
        );
    }else{
        return (
            <div className={d.myMessage}><div className={d.dialogMessage}>{props.message}</div></div>
        );  
    }
};

export default DialogMessage;