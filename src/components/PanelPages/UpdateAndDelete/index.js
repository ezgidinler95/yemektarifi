import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Image, List, Modal } from "semantic-ui-react";
import { allAnaYemek, deleteYemek } from "../../../actions/anaYemek";
import { API_ANA_YEMEK_IMAGE_URL } from "../../../config/config";

class UpdateAndDelete extends Component {
  state = {};

  async UNSAFE_componentWillMount() {
    await this.props.allAnaYemek();
  }

  handleDeleteYemek = (event, rowData) => {
    console.log("buraya geldi");
  };


  render() {
    return (
      <div>
        <List divided verticalAlign="middle">
          {this.props.anaYemekler.map(anaYemek => (
            <List.Item key={anaYemek._id}>
              <List.Content floated="right">
                <Modal
                  trigger={<Button>GÜNCELLE</Button>}
                  header="Güncelle!"
                  content="Call Benjamin regarding the reports."
                  actions={[
                    "Snooze",
                    { key: "done", content: "Done", positive: true }
                  ]}
                />
                <Button onClick={this.handleDeleteYemek}>SİL</Button>
              </List.Content>
              <Image avatar src={API_ANA_YEMEK_IMAGE_URL + anaYemek.files} />
              <List.Content>{anaYemek.adi}</List.Content>
            </List.Item>
          ))}
        </List>
        <Button fluid>YENİ EKLE</Button>
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
  allAnaYemek,
  deleteYemek
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAndDelete);
