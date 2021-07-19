import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Baoba from "./Baoba";
import Home from "./Home";
import ContoYaba from "./ContoYaba";
import AfroEstetica from "./AfroEstetica";
import AfroCiencia from "./AfroCiencia";
import Soriee from "./Soriee";
import AfroPop from "./AfroPop";
import AfroNos from "./AfroNos";

import { BrowserRouter, Switch, Route } from "react-router-dom";




ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/baoba" component={Baoba} />
            <Route path="/conto_yaba" component={ContoYaba} />
            <Route path="/afro_estetica" component={AfroEstetica} />
            <Route path="/afro_ciencia" component={AfroCiencia} />
            <Route path="/soriee" component={Soriee} />
            <Route path="/afro_pop" component={AfroPop} />
            <Route path="/nos_nos" component={AfroNos} />


            <Route
        path="/preta_lab"
        component={() => {
          window.location.href = "https://www.pretalab.com/";
          return null;
        }}
      />
      <Route
        path="/recode"
        component={() => {
          window.location.href = "https://www.recodepro.org.br/";
          return null;
        }}
      />
      <Route
        path="/tgueto"
        component={() => {
          window.location.href = "https://www.tecnogueto.com.br/";
          return null;
        }}
      />
      <Route
        path="/educafro"
        component={() => {
          window.location.href =
            "https://www.educafro.org.br/site/2021/01/26/o-que-e-educafro-tech/";
          return null;
        }}
      />
      <Route
        path="/kilombo"
        component={() => {
          window.location.href =
            "https://www.instagram.com/kilombotech/";
          return null;
        }}
      />
      <Route
        path="/cod_preto"
        component={() => {
          window.location.href =
            "https://www.digitalhouse.com/br/acoes/codigo-preto";
          return null;
        }}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
       
