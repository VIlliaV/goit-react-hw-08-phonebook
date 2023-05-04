import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

// import { Item } from './ContactItem.styled';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  const { id, name, number } = contact;

  return (
    <ListItem
      sx={{
        border: '1px solid rgb(87, 100, 90)',
        marginBottom: '10px',
        padding: '2px',
        borderColor: 'rgb(87, 100, 90)',
        boxShadow: '2px 2px 4px rgba(170, 249, 190, 0.742)',
        '&:hover ': {
          borderColor: 'rgba(170, 249, 190, 0.742)',
          boxShadow: '3px 3px 6px rgba(170, 249, 190, 0.742)',
        },
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            console.log('id :>> ', id);
            deleteItem(id);
          }}
        >
          <DeleteIcon sx={{ color: 'rgb(87, 100, 90)' }} />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'rgb(87, 100, 90) ' }}>
          {name.slice(0, 2)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography variant="body1" color="white">
            {number}
          </Typography>
        }
      />
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
