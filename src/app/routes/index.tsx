import ProductsPage from '@/pages/products';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
    </RouterRoutes>
  );
};

export default Routes;
