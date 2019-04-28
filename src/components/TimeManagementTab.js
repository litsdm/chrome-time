import React from 'react';
import styles from './TimeManagementTab.module.scss';

import HalfCircle from './HalfCircle';

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
      <HalfCircle id="halfCircle-3" color="rgb(73, 190, 183)" rotation={180} />
      <HalfCircle id="halfCircle-2" color="rgb(92, 160, 211)" rotation={162} />
      <HalfCircle id="halfCircle-1" color="#ff5959" rotation={108} />
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
      <button type="button" className={styles.showAll}>
        Show more stats
      </button>
    </div>
  </div>
);

export default TimeManagementTab;
