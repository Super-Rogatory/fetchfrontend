import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

// root of react app created here!
const root = createRoot(document.getElementById('root'));
root.render(<App />);
