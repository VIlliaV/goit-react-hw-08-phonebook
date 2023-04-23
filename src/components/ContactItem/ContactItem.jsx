import PropTypes from 'prop-types';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Item } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const del = useRef();

  const dispatch = useDispatch();

  const deleteItem = id => {
    del.current.className += ' delete';
    setTimeout(() => {
      dispatch(deleteContact(id));
    }, 300);
  };

  const { id, name, phone } = contact;

  return (
    <Item ref={del}>
      <span></span>
      <p className="name">{name}: </p>
      <p> {phone}</p>
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
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
