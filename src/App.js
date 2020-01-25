import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import AnaYemekler from "./components/Pages/AnaYemakler";
import AddFood from "./components/AddFood";

const App = () => (
  <div>
    <Header></Header>
    <Container text style={{ marginTop: "7em" }}>
      <Route exact path="/" component={AnaYemekler} />
      <Route exact path="/yemek-ekle" component={AddFood}></Route>
    </Container>
    <Footer></Footer>
  </div>
);

export default App;
