import React from 'react';
import propTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.filter}>
    <input
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={onChange}
      className={styles.filterInput}
    />
  </div>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
