import { NavLink } from 'react-router-dom';
import clasessN from './Nav.module.css';
import Online from './Online/Online'

const Nav = (props) => {
  let online = props.nav.friendsOnlineData.map(online => <Online src={online.src} name={online.name} />);
  return (
    <div >
      <div className={clasessN.navButton}><NavLink to="/Profile" className={navData => navData.isActive ? clasessN.active : clasessN.navButton}>My profile</NavLink></div>
      <div className={clasessN.navButton}><NavLink to="/Friends" className={navData => navData.isActive ? clasessN.active : clasessN.navButton}>Friends</NavLink></div>
      <div className={clasessN.navButton}><NavLink to="/Messages" className={navData => navData.isActive ? clasessN.active : clasessN.navButton}>Messages</NavLink></div>
      <div className={clasessN.navButton}><NavLink to="/Photo" className={navData => navData.isActive ? clasessN.active : clasessN.navButton}>Photo</NavLink></div>
      <div className={clasessN.navButton}><NavLink to="/Music" className={navData => navData.isActive ? clasessN.active : clasessN.navButton}>Music</NavLink></div>
      <div className={clasessN.navButton}><NavLink to="/News" className={navData => navData.isActive ? clasessN.active : clasessN.navButton}>News</NavLink></div>

      <div className={clasessN.friendsOnline}>
        <div className={clasessN.onlineHeader}>
          <h4>Online </h4>
        </div>
        <div className={clasessN.onlineName}>
          <div className={clasessN.mainOnline}>
            {online}
          </div>
        </div>
      </div>

    </div>

  );
};


export default Nav;