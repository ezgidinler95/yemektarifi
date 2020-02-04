import React, { Component } from "react";
import { connect } from "react-redux";
import { getGununMenusu } from "../../actions/anaYemek";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { Container, Header } from "semantic-ui-react";
import { API_ANA_YEMEK_IMAGE_URL } from "../../config/config";

class Kahvalti extends Component {
  state = {};

  async UNSAFE_componentWillMount() {
    await this.props.getGununMenusu();
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: "3em" }}>
          <Header as="h1">Günün Menüsü</Header>
          <Header as="h2" dividing>
            Menu
          </Header>
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
        </Container>
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
  getGununMenusu
};

export default connect(mapStateToProps, mapDispatchToProps)(Kahvalti);
