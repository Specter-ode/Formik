import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const PublicRoute = observer(() => {
  const isToken = authStore.token;
  return <>{isToken ? <Navigate to="/contacts" /> : <Outlet />}</>;
});

export default PublicRoute;
