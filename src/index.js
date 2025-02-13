import { ConfigProvider } from 'antd';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ConfigProvider theme={{ hashed: false }}>
    <App />
  </ConfigProvider>
  </React.StrictMode>
);

