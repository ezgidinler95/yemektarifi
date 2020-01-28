import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Image, List } from "semantic-ui-react";
import { allAnaYemek, deleteYemek } from "../../../actions/anaYemek";
import { API_ANA_YEMEK_IMAGE_URL } from "../../../config/config";
//import UpdateForm from "./UpdateForm";

class UpdateAndDelete extends Component {
  state = {};

  async UNSAFE_componentWillMount() {
    await this.props.allAnaYemek();
  }

  handleDeleteYemek = (event, id) => {
    console.log("cok heyecanlı", id);
    this.props.deleteYemek(id);
    if (this.props.deleteYemekResult.code === 200) {
      alert("silme işlemi başarılı");
    } else {
      alert("silme işleminde hata oluştu!!!!");
    }
    this.props.allAnaYemek();
  };

  render() {
    return (
      <div>
        <List divided verticalAlign="middle">
          {this.props.anaYemekler.map(anaYemek => (
            <List.Item key={anaYemek._id}>
              <List.Content floated="right">
                <Button onClick={this.handleUpdateYemek}>GÜNCELLE</Button>
                <Button onClick={this.handleDeleteYemek} id={anaYemek._id}>
                  SİL
                </Button>
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
