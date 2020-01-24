import React from "react";
import "./App.css";
import { Container} from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import AnaYemekler from "./components/Pages/AnaYemakler";

const App = () => (
  <div>
    <Header></Header>
    <Container text style={{ marginTop: "7em" }}>
      <Route path="/ana-yemekler" component={AnaYemekler}></Route>
    </Container>
    <Footer></Footer>
  </div>
);

export default App;
