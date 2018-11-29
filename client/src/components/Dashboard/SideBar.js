import React from 'react';
import { arrayOf, func, number } from 'prop-types';
import shapes from '@shapes';
import styles from './SideBar.scss';

const { accountShape } = shapes;

const SideBar = ({ accounts, accountIndex, setState }) => {
  const openModal = () => {
      const element = document.getElementById('add-modal');
      if (!element) return;
      element.style.display = 'flex';
  }

  const renderNavLinks = () => accounts.map(({ profilePic }, index) => (
    <button
      type="button"
      className={`${styles.link} ${index === accountIndex ? styles.active : ''}`}
      onClick={() => setState({ accountIndex: index })}
    >
      <div className={styles.bar} />
      <img src={profilePic} alt="instagram account profile pic" />
    </button>
  ));

  return (
    <div className={styles.sideBar}>
      {renderNavLinks()}
      <button type="button" className={styles.add} onClick={openModal}>
        <i className="fa fa-plus" />
      </button>
    </div>
  );
};

SideBar.propTypes = {
  accounts: arrayOf(accountShape).isRequired,
  accountIndex: number.isRequired,
  setState: func.isRequired
}

export default SideBar;
