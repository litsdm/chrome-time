import React from 'react';
import { func, number } from 'prop-types';
import styles from './TabBar.module.scss';

const TabBar = ({ activeTab, setActiveTab }) => (
  <div className={styles.container}>
    <button
      type="button"
      className={`${styles.item} ${activeTab === 0 ? styles.activeBlock : ''}`}
      onClick={() => setActiveTab(0)}
    >
      <i className="fas fa-shield-alt" />
      <p>
        Block Sites
      </p>
    </button>
    <button
      type="button"
      className={`${styles.item} ${activeTab === 1 ? styles.activeTime : ''}`}
      onClick={() => setActiveTab(1)}
    >
      <i className="fas fa-stopwatch" />
      <p>
        Manage Time
      </p>
    </button>
    <button type="button" className={styles.item}>
      <i className="fa fa-cog" />
      <p>
        Settings
      </p>
    </button>
  </div>
);

TabBar.propTypes = {
  activeTab: number.isRequired,
  setActiveTab: func.isRequired
};

export default TabBar;
