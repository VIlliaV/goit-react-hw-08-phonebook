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
  margin-left: 10px;
  &.active {
    color: red;
  }
`;
