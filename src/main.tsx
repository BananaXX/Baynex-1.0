import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './firebase';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ No root element found. Check index.html has <div id='root'>.");
}
