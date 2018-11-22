import React from 'react';
import styles from './styles.scss';

import SideBar from './SideBar';

const Dashboard = () => (
  <div className={styles.container}>
    Dashboard
    <SideBar />
  </div>
);

export default Dashboard;
