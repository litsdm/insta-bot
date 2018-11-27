import React from 'react';
import styles from './styles.scss';

import SideBar from './SideBar';
import TopBar from './TopBar';
import ProfileCard from './ProfileCard';

const Dashboard = () => (
  <div className={styles.container}>
    <TopBar />
    <SideBar />
    <div className={styles.content}>
      <ProfileCard />
    </div>
  </div>
);

export default Dashboard;
