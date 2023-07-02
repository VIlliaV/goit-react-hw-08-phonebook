import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import wood from '../../images/wood.jpg';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '72px',
  border: '2px solid rgb(87, 100, 90)',
  boxShadow: '5px 5px 10px rgba(170, 249, 190, 0.742)',
  padding: '16px 32px 24px 32px',
});

const LinkStyle = styled(Link)`
  color: white;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.3rem;
  text-shadow: 4px 4px 8px rgb(87, 100, 90);
  background-image: url(${wood});
  background-size: cover;
  background-position: center 14%;
  border: 2px solid rgb(87, 100, 90);
  box-shadow: 2px 2px 4px rgba(170, 249, 190, 0.742);
  &:hover {
    border-color: rgba(170, 249, 190, 0.742);
    box-shadow: 3px 3px 6px rgba(170, 249, 190, 0.742);
  }
`;

export { StyledContainer, LinkStyle };
