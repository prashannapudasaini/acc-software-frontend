import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();
export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  // Master Product Database
  const [products, setProducts] = useState([
    { sku: 'PRD-LPT-001', name: 'Dell XPS 15', category: 'Electronics', unit: 'pcs', costPrice: 120000, sellingPrice: 150000, stock: 25, reorderLevel: 5 },
    { sku: 'PRD-FUR-012', name: 'Ergonomic Office Chair', category: 'Furniture', unit: 'pcs', costPrice: 8000, sellingPrice: 12000, stock: 4, reorderLevel: 10 },
    { sku: 'PRD-OFF-099', name: 'A4 Printer Paper (Box)', category: 'Supplies', unit: 'boxes', costPrice: 1500, sellingPrice: 2000, stock: 150, reorderLevel: 50 },
  ]);

  // Stock Movements (In/Out Ledger)
  const [movements, setMovements] = useState([
    { id: 'MV-101', date: '2026-06-25', type: 'IN', sku: 'PRD-LPT-001', qty: 10, remarks: 'Initial Purchase' },
    { id: 'MV-102', date: '2026-06-28', type: 'OUT', sku: 'PRD-FUR-012', qty: 2, remarks: 'Assigned to HR' },
  ]);

  // Actions
  const addProduct = (newProduct) => {
    setProducts([{ ...newProduct, stock: 0 }, ...products]);
  };

  const recordMovement = (type, sku, qty, remarks) => {
    const numQty = Number(qty);
    if (numQty <= 0) return false;

    // Update Master Stock
    const updatedProducts = products.map(p => {
      if (p.sku === sku) {
        if (type === 'OUT' && p.stock < numQty) throw new Error('Insufficient stock!');
        return { ...p, stock: type === 'IN' ? p.stock + numQty : p.stock - numQty };
      }
      return p;
    });

    const newMovement = {
      id: `MV-${String(movements.length + 101).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      type, sku, qty: numQty, remarks
    };

    setProducts(updatedProducts);
    setMovements([newMovement, ...movements]);
    return true;
  };

  return (
    <InventoryContext.Provider value={{ products, movements, addProduct, recordMovement }}>
      {children}
    </InventoryContext.Provider>
  );
};