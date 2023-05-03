import { Button } from '@mui/material';
import wood from '../../images/wood.jpg';

export const ButtonType = ({ onClick, type, children }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      sx={{
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '.3rem',
        textShadow: '4px 4px 8px rgb(87, 100, 90)',
        backgroundImage: `url(${wood})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 15%',
        border: '2px solid rgb(87, 100, 90)',
        boxShadow: '2px 2px 4px rgba(170, 249, 190, 0.742)',
        '&:hover ': {
          borderColor: 'rgba(170, 249, 190, 0.742)',
          boxShadow: '3px 3px 6px rgba(170, 249, 190, 0.742)',
        },
      }}
    >
      {children}
    </Button>
  );
};
