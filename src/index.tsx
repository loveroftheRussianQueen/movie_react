import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import thunk from "redux-thunk" ;
import { loadState, saveState } from './store/localStorage';
import { PersistGate } from 'redux-persist/integration/react';

store.subscribe(() =>{
    saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App/>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);