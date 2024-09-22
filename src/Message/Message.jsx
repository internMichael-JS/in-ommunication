import m from './Message.module.css';
import Dialog from './Dialog/Dialog';
import DialogMessage from './DialogMessage/DialogMessage';
import React from 'react';
const Message = (props) => {

  let dialogs= props.pageMessage.dialogsData.map(dialogs=><Dialog name={dialogs.name} id={dialogs.id}  src={dialogs.src}/>);
  let dialogMessage=props.pageMessage.dialogMessageData.map(message=><DialogMessage message={message.message} id={message.id}/>);
  let newMessageEl=React.createRef();
  let sendMessage=()=>{
    console.log(newMessageEl.current.value);
  };
  return (
    <div className={m.messagesDiv}>
      <div className={m.dialogs} >
       {dialogs}
      </div>
      <div className={m.dialogMessages} >
       {dialogMessage}
       <div className={m.textNewMessage}>
        <textarea ref={newMessageEl}>       </textarea>
        <button  onClick={sendMessage}> 
          Send
        </button>
       </div>
      </div>
    </div>
  );
};


export default Message;