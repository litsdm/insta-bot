import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.scss';

const SideBar = () => (
  <div className={styles.sideBar}>
    <NavLink to="/dashboard/user1" className={styles.link} activeClassName={styles.active}>
      <div className={styles.bar} />
      <img
        className={styles.img}
        src="http://3.bp.blogspot.com/-y_FCSL1VF-c/Uem2tm7HIFI/AAAAAAAAKnU/AMYQtVhnmyo/s1600/headbruce.0.jpg"
        alt="instagram account profile pic"
      />
    </NavLink>
    <NavLink to="/dashboard/user2" className={styles.link} activeClassName={styles.active}>
      <div className={styles.bar} />
      <img
        className={styles.img}
        src="https://static.showit.co/400/1CRbtw9JTyWwp3WhRHFoBQ/63035/headshots_actors-13.jpg"
        alt="instagram account profile pic"
      />
    </NavLink>
    <button type="button" className={styles.add}>
      <i className="fa fa-plus" />
    </button>
  </div>
);

export default SideBar;
