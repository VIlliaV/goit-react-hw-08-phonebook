import PropTypes from 'prop-types';

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { Item } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [isHovered, setIsHovered] = useState(false);
  const del = useRef();

  const dispatch = useDispatch();

  const deleteItem = id => {
    del.current.className += ' delete';
    dispatch(deleteContact(id));
  };

  const { id, name, phone, createdAt } = contact;

  const date = new Date(createdAt);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'America/New_York',
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  const formattedDate = formatter.format(date);

  return (
    <Item
      ref={del}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="date" style={{ display: isHovered ? 'block' : 'none' }}>
        contact created: {formattedDate}
      </span>
      <span className="circle"></span>
      <p className="name">{name}:</p>
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
