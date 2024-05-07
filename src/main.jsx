import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../src/reducer/store.js'; // Redux 스토어와 persistor 가져오기


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* PersistGate로 리액트에 redux-persist 통합 */}
    {/* loading 속성: 스토어 초기화 시 보여 줄 컴포넌트*/}
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
      </Provider>
)