import React, { Component } from "react";
import { connect } from "react-redux";
import { API_ANA_YEMEK_IMAGE_URL } from "../../config/config";
import { getYemek } from "../../actions/anaYemek";
import { Grid, Header, Image, List, Segment } from "semantic-ui-react";
class TarifDetayi extends Component {
  state = {};

  async UNSAFE_componentWillMount() {
    const {
      match: { params }
    } = this.props;
    await this.props.getYemek(params._id);
  }

  render() {
    return (
      <div>
        <List>
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    {this.props.anaYemek.adi}
                  </Header>
                  <p style={{ fontSize: "1.33em" }}></p>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    MALZEMELER
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    {this.props.anaYemek.malzeme}
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered
                    rounded
                    size="large"
                    src={API_ANA_YEMEK_IMAGE_URL + this.props.anaYemek.files}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: "0em" }} vertical>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    YAPILIŞI
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    {this.props.anaYemek.tarifi}
                  </p>
                </Grid.Column>
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    PİŞME SÜRESİ VE DİKKAT EDİLMESİ GEREKENLER
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    {this.props.anaYemek.pismesüresi} dk Daha lezzetli olması
                    için annenize yaptırınız :D
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </List>
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
  getYemek
};

export default connect(mapStateToProps, mapDispatchToProps)(TarifDetayi);
