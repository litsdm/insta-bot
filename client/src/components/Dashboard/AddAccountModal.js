import React from 'react';
import { func, string } from 'prop-types';
import styles from './AddAccountModal.scss';


import Modal from '../Modal';
import Input from '../InputLabel';

const AddAccountModal = ({ id, accountUser, accountPassword, setState, addAccount }) => {
  const handleChange = ({ target: { name, value } }) => setState({ [name]: value });

  return (
    <Modal id={id} title="Add Instagram Account">
      <div className={styles.accModal}>
        <Input
          id="accountUserInput"
          name="accountUser"
          value={accountUser}
          labelText="👤User"
          onChange={handleChange}
          labelStyle={{ width: 'auto' }}
        />
        <Input
          id="accountPasswordInput"
          name="accountPassword"
          type="password"
          value={accountPassword}
          labelText="🔑Password"
          onChange={handleChange}
          labelStyle={{ width: 'auto' }}
        />
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.primary} onClick={addAccount}>
          Add Account
        </button>
      </div>
    </Modal>
  );
}

AddAccountModal.propTypes = {
  id: string.isRequired,
  accountUser: string.isRequired,
  accountPassword: string.isRequired,
  setState: func.isRequired,
  addAccount: func.isRequired
};

export default AddAccountModal;
