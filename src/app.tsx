import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundaryComp from "components/error-boundary.comp";
import AppRoutes from "app.routes";

import './app.css';
import { Provider } from "react-redux";
import LoginPage from "./app/auth/login.page";
import RegisterPage from "./app/auth/register.page";
import store from "./store";

function App() {
  return (
    <ErrorBoundaryComp>
      <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
      </Provider>
      {/*  <LoginFormComp />*/}
      {/*  <RegisterFormComp />*/}
    </ErrorBoundaryComp>
  );
}

export default App;
