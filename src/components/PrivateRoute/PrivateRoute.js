import { Navigate, Outlet } from 'react-router-dom';
// import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const isToken = useSelector(getToken);
  return <>{isToken ? <Outlet /> : <Navigate to="/login" />}</>;
};

// Второй вариант маршрута.  --->>
// const PrivateRoute = ({children, ...routeProps}) => {
//   const isToken = useSelector(getToken);
//   return (<Route {...routeProps}>
//     {isToken ? children : <Redirect to="/login" />}
//   </Route>)
// };

// в App --->>
// <PrivateRoute path="/contacts>">
// <ContactsPage />
// </PrivateRoute>

export default PrivateRoute;
