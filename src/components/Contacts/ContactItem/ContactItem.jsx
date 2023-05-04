import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

import { styledListItem } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  const { id, name, number } = contact;

  return (
    <ListItem
      sx={{
        ...styledListItem,
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
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
