import { Typography } from '@mui/material';
import { useAuth } from 'Hooks/useAuth';
import { StyledContainer } from './Profile.styled';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const { user } = useAuth();
  return (
    <StyledContainer>
      <Link to="/profile/update">update user</Link>
      <Typography
        sx={{ color: 'rgba(170, 249, 190, 0.742)', marginTop: '72px' }}
        variant="h2"
      >
        Profile
      </Typography>

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
