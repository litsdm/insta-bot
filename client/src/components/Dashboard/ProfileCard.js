import React from 'react';
import { oneOfType, number, string } from 'prop-types';
import styles from './ProfileCard.scss';

const InfoItem = ({ name, value }) => (
  <div className={styles.infoItem}>
    <p className={styles.infoTitle}>
      {name}
    </p>
    <p className={styles.infoValue}>
      {value}
    </p>
  </div>
);

const ProfileCard = () => (
  <div className={styles.profileCard}>
    <div className={styles.left}>
      <img
        className={styles.profilePic}
        src="https://static.showit.co/400/1CRbtw9JTyWwp3WhRHFoBQ/63035/headshots_actors-13.jpg"
        alt="instagram account profile pic"
      />
      <div className={styles.accountInfo}>
        <p className={styles.name}>
          Alicia Stanger
        </p>
        <p className={styles.handle}>
          @aliciastanger
        </p>
      </div>
    </div>
    <div className={styles.right}>
      <InfoItem name="Posts" value={56} />
      <InfoItem name="Followers" value={305} />
      <InfoItem name="Following" value={234} />
      <InfoItem name="Engagement" value={`${13}%`} />
    </div>
  </div>
);

InfoItem.propTypes = {
  name: string.isRequired,
  value: oneOfType([string, number]).isRequired
};

export default ProfileCard;
