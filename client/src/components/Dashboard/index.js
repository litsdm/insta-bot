import React from 'react';
import styles from './styles.scss';

import SideBar from './SideBar';
import TopBar from './TopBar';

const Dashboard = () => (
  <div className={styles.container}>
    <TopBar />
    <SideBar />
    Dashboard
  </div>
);

export default Dashboard;
