import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/index.css';

// Import our Global ERP Engines (Contexts)
import { FinanceProvider } from './context/FinanceContext';
import { InventoryProvider } from './context/InventoryContext';
import { HRProvider } from './context/HRContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FinanceProvider>
      <InventoryProvider>
        <HRProvider>
          <App />
        </HRProvider>
      </InventoryProvider>
    </FinanceProvider>
  </React.StrictMode>,
);