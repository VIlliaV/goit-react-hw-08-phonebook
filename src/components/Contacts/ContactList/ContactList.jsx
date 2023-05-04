import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectError,
  selectFilterContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Loader } from 'components/Loader/Loader';
import { ContactItem } from '..';
import { styledList, typographyStyled } from './ContactList.styled';

export const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const filterContacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      toast.error(`Sorry, but ${error} `);
      return;
    }
  }, [error]);

  return (
    <>
      {filterContacts.length !== 0 ? (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={10}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                CONTACTS: {filterContacts.length} pcs
              </Typography>

              <List sx={{ ...styledList }}>
                {loading && <Loader />}
                {filterContacts.map(({ id, name, number }) => (
                  <ContactItem key={id} contact={{ id, name, number }} />
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Typography sx={{ ...typographyStyled }} variant="h4">
          Please add contact
        </Typography>
      )}
    </>
  );
};
