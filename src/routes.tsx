import { Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './contexts/ProductsContext';
import { UserProvider } from './contexts/UserContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => {
  const teste = 'teste123';
  return (
    <Routes>
      <Route
        path='/'
        element={
          <UserProvider>
            <LoginPage />{' '}
          </UserProvider>
        }
      />
      <Route
        path='/register'
        element={
          <UserProvider>
            <RegisterPage />
          </UserProvider>
        }
      />
      <Route
        path='/shop'
        element={
          <UserProvider>
            <ProductsProvider>
              <ShopPage />
            </ProductsProvider>
          </UserProvider>
        }
      />
    </Routes>
  );
};

export default Router;
