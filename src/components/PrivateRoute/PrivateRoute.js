import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const PrivateRoute = observer(() => {
  const isToken = authStore.token;
  return <>{isToken ? <Outlet /> : <Navigate to="/login" />}</>;
});

// import { Route, Redirect } from 'react-router-dom';
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
