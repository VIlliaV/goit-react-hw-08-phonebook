import { Container, Typography } from '@mui/material';
import { useAuth } from 'Hooks/useAuth';

export const Profile = () => {
  const { user } = useAuth();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '72px',
        border: '2px solid rgb(87, 100, 90)',
        boxShadow: '5px 5px 10px rgba(170, 249, 190, 0.742)',
        padding: '16px 32px 24px 32px',
      }}
    >
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
    </Container>
  );
};
