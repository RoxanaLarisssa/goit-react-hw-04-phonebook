import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';

const Filter = ({ filter, changeFilterInput }) => (
  <label>
    <input
    className={styles.filterInput}
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;