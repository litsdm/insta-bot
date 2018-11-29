import React from 'react';
import styles from './Empty.scss';

const Empty = () => {
  const openModal = () => {
    const element = document.getElementById('add-modal');
    if (!element) return;
    element.style.display = 'flex';
  }

  return (
    <div className={styles.empty}>
      <div className={styles.content}>
        <p className={styles.message}>
          It looks like you don
          {'\''}
          t have any instagram accounts yet.
        </p>
        <button type="button" className={styles.add} onClick={openModal}>
          Add Instagram Account
        </button>
      </div>
    </div>
  );
};

export default Empty;
