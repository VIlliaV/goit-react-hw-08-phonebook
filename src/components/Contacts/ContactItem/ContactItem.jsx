import PropTypes from 'prop-types';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { Item } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const del = useRef();

  const dispatch = useDispatch();

  const deleteItem = id => {
    del.current.className += ' delete';
    console.log('knopka');
    dispatch(deleteContact(id));
  };

  const { id, name, number } = contact;

  return (
    <Item ref={del}>
      <span className="circle"></span>
      <p className="name">{name}:</p>
      <p> {number}</p>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
