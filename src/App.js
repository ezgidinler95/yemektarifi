import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import AnaYemekler from "./components/Pages/AnaYemakler";
import Login from "./components/Login";
import TarifDetay from "./components/Pages/TarifDetayi";
import AddFood from "./components/AddFood";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: "7em" }}>
          <Route exact path="/" component={AnaYemekler} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/yemek-ekle" component={AddFood} />
          <Route exact path="/tarif-detay/:_id" component={TarifDetay} />
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = ({ anaYemekReducer }) => {
  return { ...anaYemekReducer };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
