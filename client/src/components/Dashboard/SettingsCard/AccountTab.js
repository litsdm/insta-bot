import React from 'react';

import Input from '@components/InputLabel';

import styles from './styles.scss';

const AccountTab = () => (
  <div className={styles.accountTab}>
    <Input
      id="instaEmailInput"
      name="instaEmail"
      value="instaEmail"
      labelText="Email"
      onChange={() => {}}
    />
    <Input
      id="instaPasswordInput"
      name="instaEmail"
      type="password"
      value="instaPassowrd"
      labelText="Password"
      onChange={() => {}}
    />
  </div>
);

export default AccountTab;
