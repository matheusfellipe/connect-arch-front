import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  FinancialPage,
  LinkedProductsPage,
  Login,
  MyProductsPage,
  OrderPage,
  Register,
  SalesPage,
  SalesReportPage,
  BestSellerProductPage,
  SalesByProductPage,
  DeliveryFeePage,
  DocumentsPage,
  MyCompanyPage,
  MyDataPage,
  MyWalletPage,
  Home,
} from '../pages';
import MainLayout from '../shared/layout';
import { PrivateRoute } from './PrivateRoute';
import { ROLE } from '../redux/features/auth/auth';
import {
  CustomerPage,
  DrugstorePage,
  ErrorsPage,
  MyAccountPage,
} from '../pages/Admin';

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
          <Route
            path="drugstore"
            element={
              <PrivateRoute roles={[ROLE.ADMIN]} component={DrugstorePage} />
            }
          />
          <Route
            path="customer"
            element={
              <PrivateRoute roles={[ROLE.ADMIN]} component={CustomerPage} />
            }
          />
          <Route
            path="errors"
            element={
              <PrivateRoute roles={[ROLE.ADMIN]} component={ErrorsPage} />
            }
          />
          <Route
            path="admin/account"
            element={
              <PrivateRoute roles={[ROLE.ADMIN]} component={MyAccountPage} />
            }
          />

          {/*Rotas do painel da Drogaria */}
          <Route
            path="sale"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={SalesPage} />
            }
          />
          <Route
            path="order"
            element={
              <PrivateRoute
                roles={[ROLE.ADMIN, ROLE.DROGARIA]}
                component={OrderPage}
              />
            }
          />

          <Route
            path="product/my"
            element={
              <PrivateRoute
                roles={[ROLE.DROGARIA]}
                component={MyProductsPage}
              />
            }
          />
          <Route
            path="product/linked"
            element={
              <PrivateRoute
                roles={[ROLE.DROGARIA]}
                component={LinkedProductsPage}
              />
            }
          />

          <Route
            path="financial"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={FinancialPage} />
            }
          />

          <Route
            path="report/sale"
            element={
              <PrivateRoute
                roles={[ROLE.DROGARIA]}
                component={SalesReportPage}
              />
            }
          />
          <Route
            path="report/sale/product"
            element={
              <PrivateRoute
                roles={[ROLE.DROGARIA]}
                component={SalesByProductPage}
              />
            }
          />
          <Route
            path="report/product/sale"
            element={
              <PrivateRoute
                roles={[ROLE.DROGARIA]}
                component={BestSellerProductPage}
              />
            }
          />

          <Route
            path="user/account"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={MyDataPage} />
            }
          />
          <Route
            path="user/company"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={MyCompanyPage} />
            }
          />
          <Route
            path="user/wallet"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={MyWalletPage} />
            }
          />
          <Route
            path="user/documents/all"
            element={
              <PrivateRoute roles={[ROLE.DROGARIA]} component={DocumentsPage} />
            }
          />
          <Route
            path="drugstore_tax_delivery"
            element={
              <PrivateRoute
                roles={[ROLE.DROGARIA]}
                component={DeliveryFeePage}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
