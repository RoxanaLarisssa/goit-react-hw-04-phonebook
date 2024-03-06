import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.contactListSection}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={styles.contactList}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactList;
