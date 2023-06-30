import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';

import { Layout } from './Layout/Layout';
import { Registration } from './Registration/Registration';
import { Login } from './Login/Login';
import { PublicRoute } from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/authOperation';
import { useEffect } from 'react';
import { getIsFetchingCurrent } from 'redux/selectors';
const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <ToastContainer />
          <Layout />
          <Routes>
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ContactForm />
                  <h2>Contacts</h2>
                  <p>Find contacts by name</p>
                  <Filter />
                  <ContactList />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
