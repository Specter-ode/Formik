import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const PrivateRoute = observer(() => {
  const isToken = authStore.token;
  return <>{isToken ? <Outlet /> : <Navigate to="/login" />}</>;
});

export default PrivateRoute;
