import App from './App';
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
