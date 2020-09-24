import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Insigniapages from "../pages/InsigniaPages";
import InsigniaNueva from "../pages/InsigniaNueva";
import Layout from "../components/Layout";


function Aplicacion() {
  return (
    <BrowserRouter>
    <Layout>
     
      <Switch>
        <Route exact path='/' component={Insigniapages}/>
        <Route exact path='/insignian' component={InsigniaNueva}/>
      </Switch>
    
      </Layout>
    </BrowserRouter>
  );
}

export default Aplicacion;
