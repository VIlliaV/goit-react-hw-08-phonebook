import { Avatar, Typography } from '@mui/material';
import { useAuth } from 'Hooks/useAuth';
import { LinkStyle, StyledContainer } from './Profile.styled';
import { useMemo } from 'react';
import { isGravatar } from 'utils';

// const { REACT_APP_BACKEND_URL } = process.env;

export const Profile = () => {
  const {
    user: { name, email, avatarURL },
  } = useAuth();
  const avatar = useMemo(() => isGravatar(avatarURL), [avatarURL]);

  // const isGravatar = avatarURL.slice(0, 2) === '//';

  return (
    <StyledContainer>
      <LinkStyle to="/profile/update">update user</LinkStyle>
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '72px' }}
        variant="h2"
      >
        Profile
      </Typography>
      <Avatar alt={name} src={avatar} sx={{ width: 150, height: 150 }} />
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '36px' }}
        variant="h3"
      >
        name : {name}
      </Typography>
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '36px' }}
        variant="h3"
      >
        email : {email}
      </Typography>
    </StyledContainer>
  );
};
