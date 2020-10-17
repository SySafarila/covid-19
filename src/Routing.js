import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Global from "./pages/Global";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/global" component={Global} />
        <Route path="/" exact>
          Root
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
