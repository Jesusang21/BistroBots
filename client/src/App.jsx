import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CategoryFilters from './components/CategoryFilters';
import ProductTable from './components/ProductTable';
import StatsFooter from './components/StatsFooter';
import ProductModal from './components/ProductModal';
import Pedidos from './components/pedidos';
import { initialProducts } from './mockData';

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Nuevo estado para controlar qué sección del menú lateral está activa
  const [currentSection, setCurrentSection] = useState('menu');

  // Filtrar productos
  const filteredProducts = selectedCategory === 'TODOS'
    ? products
    : products.filter(p => p.category.toUpperCase() === selectedCategory);

  // Añadir nuevo producto
  const handleAddProduct = (newProd) => {
    const productToAdd = {
      ...newProd,
      id: Date.now(),
      status: 'ACTIVO'
    };
    setProducts([...products, productToAdd]);
  };

  // Eliminar producto
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const activeCount = products.filter(p => p.status === 'ACTIVO').length;
  const lowStockCount = products.filter(p => p.status === 'BAJO STOCK').length;

  return (
    <div className="app-container">
      <Sidebar
        currentSection={currentSection}
        onSelectSection={setCurrentSection}
      />
      <div className="main-content">
        <Header />
        <div className="content-body">
          {currentSection === 'menu' ? (
            <>
              <CategoryFilters
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <ProductTable
                products={filteredProducts}
                onDeleteProduct={handleDeleteProduct}
                onOpenModal={() => setIsModalOpen(true)}
              />
              <StatsFooter
                activeCount={activeCount}
                lowStockCount={lowStockCount}
              />
            </>
          ) : currentSection === 'pedidos' ? (
            <Pedidos />
          ) : (
            <div style={{ padding: '40px', textAlign: 'center', background: '#fff', borderRadius: '8px' }}>
              <h2>Sección de {currentSection.toUpperCase()} en construcción 🚧</h2>
              <p style={{ color: '#666' }}>Próximamente disponible en las siguientes fases del proyecto de BistroBot.</p>
            </div>
          )}
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}