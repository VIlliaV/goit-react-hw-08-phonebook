import { useRef } from 'react';

import { Item } from './ContactItem.styled';

export const ContactItem = ({ deleteContact, contact }) => {
  const del = useRef();

  const deleteItem = id => {
    del.current.className += ' delete';
    setTimeout(() => {
      deleteContact(id);
    }, 300);
  };

  const { id, name, number } = contact;

  return (
    <Item ref={del}>
      <span></span>
      <p className="name">{name}: </p>
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
