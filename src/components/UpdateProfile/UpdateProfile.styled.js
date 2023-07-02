import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '72px',
  border: '2px solid rgb(87, 100, 90)',
  boxShadow: '5px 5px 10px rgba(170, 249, 190, 0.742)',
  padding: '16px 32px 24px 32px',
});

export { StyledContainer };
