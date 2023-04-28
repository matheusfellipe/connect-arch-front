import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Login,
  Home,
  Register,
  ArchitectListPage,
  ServicesOrderPage,
  ServicesRequestedPage,
} from '../pages';
import MainLayout from '../shared/layout';
import { PrivateRoute } from './PrivateRoute';
import { ROLE } from '../redux/app/services/auth/authApiSlice';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas abertas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="architects"
            element={
              <PrivateRoute
                roles={[ROLE.CUSTOMER]}
                component={ArchitectListPage}
              />
            }
          />

          {/* Rotas do painel do Arquiteto */}
          <Route
            path="order-services"
            element={
              <PrivateRoute
                roles={[ROLE.ARCHITECT]}
                component={ServicesOrderPage}
              />
            }
          />

          {/* Rotas do painel do Cliente */}
          <Route
            path="services-requested"
            element={
              <PrivateRoute
                roles={[ROLE.CUSTOMER]}
                component={ServicesRequestedPage}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
