import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Home, Register, OrderPage, ServiceRequestPage } from '../pages';
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
          <Route
            index
            element={
              <PrivateRoute
                roles={[ROLE.ARCHITECT, ROLE.CUSTOMER]}
                component={Home}
              />
            }
          />

          {/* Rotas do painel do Arquiteto */}
          <Route
            path="request-service"
            element={
              <PrivateRoute
                roles={[ROLE.ARCHITECT]}
                component={ServiceRequestPage}
              />
            }
          />

          {/* Rotas do painel do Cliente */}
          <Route
            path="request"
            element={
              <PrivateRoute roles={[ROLE.CUSTOMER]} component={OrderPage} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
