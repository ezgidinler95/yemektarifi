import React, { Component } from "react";
import { connect } from "react-redux";
import { allKahvaltilik } from "../../actions/anaYemek";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

class Kahvalti extends Component {
  state = {};

  async UNSAFE_componentWillMount() {}

  render() {
    return (
      <div>
        <Container style={{ marginTop: "3em" }}>
          <Header as="h1">Günün Menüsü</Header>
          <Header as="h2" dividing>
            Menu
          </Header>

          <Grid columns={3} doubling>
          
              asdhjsdghsjdfskdfkdsfjdsfjdfdj

          </Grid>

          <Header as="h2" dividing>
            
          </Header>

          <Grid columns="equal">
            <Grid.Column>
             

              <Divider />

            
              <Divider />


              <Divider />


              <Divider />

             

              <Divider />

              <Divider />

              <Button.Group attached="top" widths={2}>
               
              </Button.Group>
              <Segment attached>
                <Image src="/images/wireframe/paragraph.png" />
              </Segment>
              <Button.Group attached="bottom" widths={2}>
                <Button>One</Button>
                <Button>Two</Button>
              </Button.Group>
            </Grid.Column>

            <Grid.Column>
             

              <Divider />

            
              <Divider />

            
            </Grid.Column>
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
  allKahvaltilik
};

export default connect(mapStateToProps, mapDispatchToProps)(Kahvalti);
