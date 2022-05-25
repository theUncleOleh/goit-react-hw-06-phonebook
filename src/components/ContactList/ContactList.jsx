import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <Fragment>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <p className={s.graf}>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className={s.button}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

