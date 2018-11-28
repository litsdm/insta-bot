import React from 'react';
import styles from './styles.scss';

import SideBar from './SideBar';
import TopBar from './TopBar';
import ProfileCard from './ProfileCard';
import TabCard from '../TabCard';

import AccountTab from './SettingsCard/AccountTab';
import MainTab from './SettingsCard/MainTab';
import ProxyTab from './SettingsCard/ProxyTab';
import BlacklistTab from './ConfigurationCard/BlacklistTab';
import CommentsTab from './ConfigurationCard/CommentsTab';
import FollowersTab from './ConfigurationCard/FollowersTab';
import LimitsTab from './ConfigurationCard/LimitsTab';

const Dashboard = () => {
  const settingTabs = [
    {
      title: 'Main',
      tab: <MainTab />
    },
    {
      title: 'Account',
      tab: <AccountTab />
    },
    {
      title: 'Proxy',
      tab: <ProxyTab />
    }
  ];

  const configurationTabs = [
    {
      title: 'Followers',
      tab: <FollowersTab />
    },
    {
      title: 'Comments',
      tab: <CommentsTab />
    },
    {
      title: 'Limits',
      tab: <LimitsTab />
    },
    {
      title: 'Blacklist',
      tab: <BlacklistTab />
    },
  ]

  return (
    <div className={styles.container}>
      <TopBar />
      <SideBar />
      <div className={styles.content}>
        <ProfileCard />
        <TabCard cardTitle="Settings" tabs={settingTabs} />
        <TabCard cardTitle="Configuration" tabs={configurationTabs} />
      </div>
    </div>
  );
}

export default Dashboard;
