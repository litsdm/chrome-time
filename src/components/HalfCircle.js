import React, { useEffect } from 'react';
import { number, object, string } from 'prop-types';
import styles from './HalfCircle.module.scss';

const HalfCircle = ({ color, rotation, backgroundColor, style, id }) => {
  useEffect(() => {
    const background = `linear-gradient(to bottom, ${backgroundColor} 0%, ${backgroundColor} 50%, ${color} 50%, ${color} 100%)`;
    document.getElementById(id).pseudoStyle('before', 'background', background);
  });

  return (
    <div
      id={id}
      className={styles.halfCircle}
      style={{
        backgroundColor,
        transform: `rotate(${rotation}deg)`,
        ...style
      }}
    />
  );
}

HalfCircle.propTypes = {
  id: string.isRequired,
  color: string,
  rotation: number,
  backgroundColor: string,
  style: object // eslint-disable-line react/forbid-prop-types
};

HalfCircle.defaultProps = {
  color: '#efefef',
  rotation: 0,
  backgroundColor: 'transparent',
  style: {}
};

export default HalfCircle;
