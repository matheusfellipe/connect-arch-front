import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ROLE } from '../redux/features/auth/auth';
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from '../redux/features/auth/authSlice';

interface Props {
  component: React.ComponentType;
  path?: string;
  roles: Array<ROLE>;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  console.log(user);
  console.log(isAuthenticated);

  if (isAuthenticated && userHasRequiredRole) {
    console.log(user);
    console.log(isAuthenticated);
    return <RouteComponent />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/" />;
};
