import React from 'react';
import ReactDOM from 'react-dom/client';  // Import correct pour React 18
import { Provider } from 'react-redux';
import { store } from '../src/store';
import Calculator from './components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Calculator />
    </Provider>
);
