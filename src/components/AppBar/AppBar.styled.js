import styled from 'styled-components';
import leaf from '../../images/leaf.jpg';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;

  justify-content: space-between;
  padding: 10px;
  background-image: url(${leaf});
  background-size: cover;
  background-position: center 40%;
`;

export const NavStyle = styled(NavLink)`
  color: white;
  padding: 10px 15px;
  margin-left: 20px;
  &:hover {
    border: 1px solid rgba(170, 249, 190, 0.742);
    border-radius: 5px;

    box-shadow: 2px 2px 4px rgba(170, 249, 190, 0.742);
  }
  &.active {
    color: rgba(170, 249, 190, 0.742);
    border: 1px solid rgba(170, 249, 190, 0.742);
    border-radius: 5px;

    box-shadow: 2px 2px 4px rgba(170, 249, 190, 0.742);
  }
`;
