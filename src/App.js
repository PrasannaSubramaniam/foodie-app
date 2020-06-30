import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/foodie-app/"} component={LoginPage}></Route>
      <Route
        exact
        path={"/foodie-app/restaurantList"}
        component={RestaurantListPage}
      ></Route>
      <Route
        exact
        path={"/foodie-app/orders/:id"}
        render={props => <OrdersPage {...props} />}
      ></Route>
    </BrowserRouter>
  );
}

export default App;
