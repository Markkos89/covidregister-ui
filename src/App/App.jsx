import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../_helpers";
import HomePage from '../pages/HomePage';
import NuevoInscriptoPage from "../pages/NuevoInscriptoPage";
import ImprimirInscripcionPage from '../pages/ImprimirInscripcionPage';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          exact
          path="/nuevo-inscripto"
          component={NuevoInscriptoPage}
        />
        <Route
          exact
          path="/print-inscripcion"
          component={ImprimirInscripcionPage}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export { App };
