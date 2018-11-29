import React from 'react';
import { string } from 'prop-types';
import shapes from '@shapes';
import styles from './Modal.scss';

const { childrenShape } = shapes;

const Modal = ({ id, title, children }) => {
  const closeModal = () => {
    document.getElementById(id).style.display = 'none';
  }

  return (
    <div id={id} className={styles.container}>
      <div
        className={styles.overlay}
        onClick={closeModal}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      />
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className={styles.title}>
            {title}
          </p>
          <button type="button" className={styles.close} onClick={closeModal}>
            <i className="fa fa-times" />
          </button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: string.isRequired,
  children: childrenShape.isRequired,
  title: string
};

Modal.defaultProps = {
  title: ''
};

export default Modal;
