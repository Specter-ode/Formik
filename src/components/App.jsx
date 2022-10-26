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
import { authStore } from 'mobx/store';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MobxPage = lazy(() => import('../pages/MobxPage/MobxPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  useEffect(() => {
    authStore.getCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobx" element={<MobxPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
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
export default App;
