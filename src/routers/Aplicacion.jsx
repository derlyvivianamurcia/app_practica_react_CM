import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Insigniapages from "../pages/InsigniaPages";
import InsigniaNueva from "../pages/InsigniaNueva";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

function Aplicacion() {
  return (
    <BrowserRouter>
    <Layout>
     
      <Switch>
        <Route exact path='/' component={Insigniapages}/>
        <Route exact path='/insignianueva' component={InsigniaNueva}/>
      </Switch>
      <Footer/>
      </Layout>
    </BrowserRouter>
  );
}

export default Aplicacion;
