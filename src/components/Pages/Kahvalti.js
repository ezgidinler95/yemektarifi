import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { allKahvaltilik } from "../../actions/anaYemek";
import { API_ANA_YEMEK_IMAGE_URL } from "../../config/config";

class Kahvalti extends Component {
  state = {};

  async UNSAFE_componentWillMount() {
    await this.props.allKahvaltilik();
  }

  render() {
    console.log(this.props.anaYemekler);
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "25px" }}>
          EN GÜZEL KAHVALTILIK TARİFLERİ
        </h1>
        <Grid columns={3} divided>
          <Grid.Row>
            {this.props.anaYemekler.map(anaYemek => (
              <Grid.Column key={anaYemek._id}>
                <Card key={anaYemek._id}>
                  <Image
                    src={API_ANA_YEMEK_IMAGE_URL + anaYemek.files}
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{anaYemek.adi}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <a href={"/tarif-detay/" + anaYemek._id}>
                      <Icon name="user" />
                      Tarife gitmek için Tıkla
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ anaYemekReducer }) => {
  return {
    ...anaYemekReducer
  };
};

const mapDispatchToProps = {
  allKahvaltilik
};

export default connect(mapStateToProps, mapDispatchToProps)(Kahvalti);
