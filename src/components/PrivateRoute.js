import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/register" />;
}
