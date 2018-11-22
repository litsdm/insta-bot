import React from 'react';
import { string } from 'prop-types';
import shapes from '../../shapes';
import styles from './FormSection.scss';

const { childrenShape } = shapes;

const FormSection = ({ title, note, children }) => (
  <div className={styles.container}>
    <div className={styles.titleWrapper}>
      <p className={styles.title}>
        {title}
      </p>
      <p className={styles.note}>
        {note}
      </p>
    </div>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

FormSection.propTypes = {
  title: string.isRequired,
  note: string,
  children: childrenShape.isRequired
};

FormSection.defaultProps = {
  note: ''
};

export default FormSection;
