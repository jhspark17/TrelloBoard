import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store"
import Root from './frontend/components/root'
import allTodos from './frontend/reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state ?
  JSON.parse(localStorage.state) : {};
 
  const store = configureStore(preloadedState);
  window.selector = allTodos(store.getState())
  window.store = store
  window.getState = store.getState
  window.dispatch = store.dispatch
  ReactDOM.render(<Root store={store}/>, document.getElementById('main'))
  
});