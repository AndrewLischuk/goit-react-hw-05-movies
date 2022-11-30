import * as SC from './Appbar.styled.js';

export const Appbar = () => {
  return (
    <SC.Header>
      <SC.NavItem to="/">
        <span>Home</span>
      </SC.NavItem>
      <SC.NavItem to="/movies">
        <span>Movies</span>
      </SC.NavItem>
    </SC.Header>
  );
};
