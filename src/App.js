import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import DetailedOrder from "./modules/DetailedOrder/";
import Orders from "./modules/Orders/";

function App() {
  return (
    <div>
      <Orders />
    </div>
  );
}

export default App;
