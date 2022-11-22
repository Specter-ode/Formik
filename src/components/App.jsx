import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Container from './Container/Container';
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { authStore, contactsStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const { token, isLogin } = authStore;
  useEffect(() => {
    const tokenFromStorage = JSON.parse(localStorage.getItem('token'));
    if (tokenFromStorage) {
      authStore.setToken(tokenFromStorage);
    }
  }, []);

  useEffect(() => {
    if (!isLogin && token) {
      authStore.getCurrentUser(token);
    }
    if (isLogin && token) {
      console.log('fetchContacts: ');
      contactsStore.fetchContacts();
    }
  }, [isLogin, token]);

  return (
    <Container>
      <Header />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer
        autoClose={2000}
        hideProgressBar
        position="top-center"
        theme="colored"
        transition={Zoom}
      />
    </Container>
  );
};
export default observer(App);
