import React from 'react';
import { arrayOf, func, number, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import Empty from './Empty';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ProfileCard from './ProfileCard';
import TabCard from '../TabCard';
import AddAccountModal from './AddAccountModal';

import AccountTab from './SettingsCard/AccountTab';
import MainTab from './SettingsCard/MainTab';
import ProxyTab from './SettingsCard/ProxyTab';
import BlacklistTab from './ConfigurationCard/BlacklistTab';
import CommentsTab from './ConfigurationCard/CommentsTab';
import FollowersTab from './ConfigurationCard/FollowersTab';
import LimitsTab from './ConfigurationCard/LimitsTab';

const { accountShape } = shapes;

const Dashboard = ({ accounts, accountIndex, setState, accountUser, accountPassword, addAccount }) => {
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
      <SideBar accounts={accounts} accountIndex={accountIndex} setState={setState} />
      {
        accounts.length < 1
          ? <Empty />
          : (
            <div className={styles.content}>
              <ProfileCard />
              <TabCard cardTitle="Settings" tabs={settingTabs} />
              <TabCard cardTitle="Configuration" tabs={configurationTabs} />
            </div>
          )
      }
      <AddAccountModal
        id="add-modal"
        accountUser={accountUser}
        accountPassword={accountPassword}
        setState={setState}
        addAccount={addAccount}
      />
    </div>
  )
}

Dashboard.propTypes = {
  accounts: arrayOf(accountShape).isRequired,
  accountIndex: number.isRequired,
  setState: func.isRequired,
  accountUser: string.isRequired,
  accountPassword: string.isRequired,
  addAccount: func.isRequired
}

export default Dashboard;
