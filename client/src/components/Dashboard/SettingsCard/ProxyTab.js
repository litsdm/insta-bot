import React from 'react';

import Input from '@components/InputLabel';

import styles from './styles.scss';

const ProxyTab = () => (
  <div className={styles.proxyTab}>
    <div className={styles.column}>
      <Input
        id="proxyHostInput"
        name="host"
        value="host"
        labelText="☁️Host"
        onChange={() => {}}
      />
      <Input
        id="proxyPortInput"
        name="port"
        value="port"
        labelText="⚙️Port"
        onChange={() => {}}
      />
    </div>
    <div className={styles.column}>
      <Input
        id="proxyUserInput"
        name="user"
        value="user"
        labelText="👱🏼‍♀️User"
        onChange={() => {}}
      />
      <Input
        id="proxyPasswordInput"
        name="password"
        value="password"
        type="password"
        labelText="🔑Password"
        onChange={() => {}}
      />
    </div>
  </div>
);

export default ProxyTab;
