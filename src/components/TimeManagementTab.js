import React from 'react';
import styles from './TimeManagementTab.module.scss';

const TimeManagementTab = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.icon}>
        <i className="fas fa-stopwatch"/>
      </div>
      <p className={styles.timeLabel}>
        8h 33m
      </p>
      <div className={styles.divider} />
      <div className={styles.halfCircle}/>
    </div>
    <div className={styles.content}>
      <p className={styles.statsText}>
        Logged this day
      </p>
      <p className={styles.statsText}>
        1.3 less than yesterday
      </p>
      <div className={styles.list}>
        <p className={styles.row}>
          Entretainment
        </p>
        <p className={styles.row} style={{ backgroundColor: 'rgba(92,160,211, 0.15)', color: '#5CA0D3' }}>
          Social Media
        </p>
        <p className={styles.row} style={{ backgroundColor: 'rgba(73,190,183, 0.15)', color: '#49beb7' }}>
          Business 
        </p>
      </div>
    </div>
  </div>
);

export default TimeManagementTab;
