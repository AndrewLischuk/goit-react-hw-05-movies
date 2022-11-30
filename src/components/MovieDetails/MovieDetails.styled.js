import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #ff6b0a;
  padding: 5px 0;
  padding-right: 20px;
  border-bottom: 5px solid #2c2c2c;
  z-index: 10;
`;

export const NavItem = styled(NavLink)`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 34px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  background-color: #2c2c2c;
  color: #f4eeee;
  border: 3px solid transparent;
  border-radius: 5px;
  outline: none;

  &:hover {
    border: 3px solid #010101;
  }
  &.active {
    color: #ff6b0a;
  }
`;
