import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={p.myProfile}>
        <div className={p.contentIcon}>
          <img src={props.srcIcon} alt="icon" />
        </div>
        <div className={p.information}>
          <div className={p.userName}>
            <h1>{props.name}</h1>
          </div>
          <div className={p.dopInformation}>
            <p>City: {props.city}</p>
            <p>Sex: {props.sex}</p>
            <p>Telephone: {props.telNumber}</p>
          </div>
        </div>
      </div>
  );
};


export default ProfileInfo;