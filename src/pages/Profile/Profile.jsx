import { Avatar, Typography } from '@mui/material';
import { useAuth } from 'Hooks/useAuth';
import { LinkStyle, StyledContainer } from './Profile.styled';

const { REACT_APP_BACKEND_URL } = process.env;

export const Profile = () => {
  const { user } = useAuth();

  const isGravatar = user.avatarURL.slice(0, 2) === '//';

  return (
    <StyledContainer>
      <LinkStyle to="/profile/update">update user</LinkStyle>
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '72px' }}
        variant="h2"
      >
        Profile
      </Typography>
      <Avatar
        alt={user.name}
        src={
          isGravatar
            ? `https:${user.avatarURL}?d=wavatar`
            : `${REACT_APP_BACKEND_URL}/${user.avatarURL}`
        }
        sx={{ width: 150, height: 150 }}
      />
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '36px' }}
        variant="h3"
      >
        name : {user.name}
      </Typography>
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '36px' }}
        variant="h3"
      >
        email : {user.email}
      </Typography>
    </StyledContainer>
  );
};
