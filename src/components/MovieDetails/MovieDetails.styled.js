import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #ff6b0a;
  padding: 5px 0;
  padding-right: 20px;
  border-bottom: 2px solid #2c2c2c;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.8),
    0px 4px 5px 0px rgba(0, 0, 0, 0.4), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 10;
`;
export const NavBack = styled(NavLink)`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 34px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  background-color: #f4eeee;
  color: #010101;
  border: 3px solid transparent;
  border-radius: 5px;
  outline: none;
  z-index: 10;

  &:hover {
    border: 3px solid #ff6b0a;
  }
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
  z-index: 100;

  &:hover {
    border: 3px solid #010101;
  }
  &.active {
    color: #ff6b0a;
  }
`;
