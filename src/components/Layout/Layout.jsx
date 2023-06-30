import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import c from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUsername } from 'redux/selectors';
import operations from 'redux/auth/authOperation';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: #0a0131ab;
  }
`;

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(operations.logOut());
  };
  return (
    <>
      <header>
        <nav>
          <ul className={c.HeaderList}>
            <li>
              <StyledLink to="/">Phonebook</StyledLink>
            </li>
            {isLoggedIn ? (
              <div className={c.RegistationWrap}>
                <li>
                  Hi,{name}
                  <button type="button" onClick={handleLogOut}>
                    Log Out
                  </button>
                </li>
              </div>
            ) : (
              <div className={c.RegistationWrap}>
                <li>
                  <StyledLink to="/login">Login</StyledLink>
                </li>
                <li>
                  <StyledLink to="/register">Registration</StyledLink>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
