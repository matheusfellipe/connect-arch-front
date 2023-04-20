import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Home, Register } from '../pages';
import MainLayout from '../shared/layout';
import { PrivateRoute } from './PrivateRoute';
import { ROLE } from '../redux/features/auth/auth';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rotas abertas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/*Rotas do painel do Admin */}
          {/* <Route
            path="drugstore"
            element={
              <PrivateRoute roles={[ROLE.ADMIN]} component={'DrugstorePage'} />
            }
          /> */}

          {/*Rotas do painel da Drogaria */}
          {/* <Route
            path="sale"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={SalesPage} />
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
