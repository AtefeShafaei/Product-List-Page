import React from 'react';
import ProductsPage from './pages/ProductsPage';
import { ProductProvider } from './context/ProductContext'; 

function App() {
  return (
    <ProductProvider>  
      <ProductsPage />
    </ProductProvider>
  );
}

export default App;
