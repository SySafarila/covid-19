import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Global from "./pages/Global";
import GlobalDetail from "./pages/GlobalDetail";
import Indonesia from "./pages/Indonesia";
import NotFound from "./pages/NotFound";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/global" component={Global} exact />
        <Route path="/global/details" component={GlobalDetail} exact />
        <Route path="/indonesia" component={Indonesia} exact />
        <Redirect from="/" to="/global" exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
