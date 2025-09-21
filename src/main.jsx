import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider} from './Components/DataProvider/DataProvider.jsx'
import {initialState, reducer} from './Utility/reducer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
    <App />
    </DataProvider>

  </React.StrictMode>,
)
