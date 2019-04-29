import React, { useEffect } from 'react';
import uuid from 'uuid/v4';
import { arrayOf, number, shape, string } from 'prop-types';
import styles from './TimeManagementTab.module.scss';

import HalfCircle from './HalfCircle';

const MAX_ROTATION = 180;

const TimeManagementTab = ({ timeData, totalTime }) => {
  useEffect(() => {
    for(let i = 0; i < 3; i += 1) {
      const element = document.getElementById(`category-${i}`);
      handleListeners(i, element, 'addEventListener');
    }

    return () => {
      for(let i = 0; i < 3; i += 1) {
        const element = document.getElementById(`category-${i}`);
        handleListeners(i, element, 'removeEventListener');
      }
    }
  }, []);

  const handleListeners = (index, element, listenerFunction) => {
    const circleId = `halfCircle-${timeData.length - index - 1}`;
    element[listenerFunction]('mouseenter', () => handleEnter(circleId));
    element[listenerFunction]('mouseleave', () => handleLeave(circleId));
  }

  const handleEnter = (id) => {
    document.getElementById(id).style.webkitFilter = 'brightness(135%)';
  }

  const handleLeave = (id) => {
    document.getElementById(id).style.webkitFilter = 'brightness(100%)';
  }

  // obtain only the inside of the rgb(r, g, b) as string
  const getRGBValues = (colorString) => {
    const part = colorString.split('(')[1];
    return part.substring(0, part.length - 1);
  }

  const renderCircles = () => {
    let prevRotation = 0;
    return timeData.map(({ category: { color }, time }, index) => {
      const rotation = time / totalTime * MAX_ROTATION;
      const remainder = MAX_ROTATION - (rotation + prevRotation);
      const finalRotation = index === 0 ? MAX_ROTATION : remainder + rotation;
      prevRotation += rotation;
      return <HalfCircle id={`halfCircle-${index}`} key={uuid()} rotation={finalRotation} color={color} />
    });
  }

  const renderTopCategories = () => {
    const reverseTimeData = timeData.reverse();
    const elements = [];

    for(let i = 0; i < 3; i += 1) {
      const { category: { name, color } } = reverseTimeData[i];
      elements.push((
        <p id={`category-${i}`} key={uuid()} className={styles.row} style={{ backgroundColor: `rgba(${getRGBValues(color)}, 0.15)`, color }}>
          {name}
        </p>
      ))
    }

    return elements;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <i className="fas fa-stopwatch"/>
        </div>
        <p className={styles.timeLabel}>
          8h 33m
        </p>
        <div className={styles.divider} />
        {renderCircles()}
      </div>
      <div className={styles.content}>
        <p className={styles.statsText}>
          Logged this day
        </p>
        <p className={styles.statsText}>
          1.3 less than yesterday
        </p>
        <div className={styles.list}>
          {renderTopCategories()}
        </div>
        <button type="button" className={styles.showAll}>
          Show more stats
        </button>
      </div>
    </div>
  );
}

TimeManagementTab.propTypes = {
  timeData: arrayOf(shape({
    category: shape({
      name: string,
      color: string // Must be rgb(r, g, b)
    }),
    time: number
  })),
  totalTime: number
};

TimeManagementTab.defaultProps = {
  timeData: [],
  totalTime: 0
};

export default TimeManagementTab;
