import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export function PublicRoute({ children, restricted }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/" /> : children;
}
