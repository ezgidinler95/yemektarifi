import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Image, List } from "semantic-ui-react";
import { allAnaYemek, deleteYemek } from "../../../actions/anaYemek";
import { API_ANA_YEMEK_IMAGE_URL, SITE_URL } from "../../../config/config";

class UpdateAndDelete extends Component {
  state = {};

  async UNSAFE_componentWillMount() {
    await this.props.allAnaYemek();
  }

  handleDeleteYemek = (event, id) => {
    this.props.deleteYemek(id);
    if (this.props.deleteYemekResult.code === 200) {
      alert("silme işlemi başarılı");
    } else {
      alert("silme işleminde hata oluştu!!!!");
    }
    this.props.allAnaYemek();
  };

  handleInsertYemek = (event, id) => {
    window.location.href = SITE_URL + "/yemek-ekle";
  };

  render() {
    return (
      <div>
        <List divided verticalAlign="middle">
          {this.props.anaYemekler.map(anaYemek => (
            <List.Item key={anaYemek._id}>
              <List.Content floated="right">
                <a href={"/update/" + anaYemek._id} {...this.props}>
                  GÜNCELLE
                </a>
                <Button onClick={this.handleDeleteYemek} id={anaYemek._id}>
                  SİL
                </Button>
              </List.Content>
              <Image avatar src={API_ANA_YEMEK_IMAGE_URL + anaYemek.files} />
              <List.Content>{anaYemek.adi}</List.Content>
            </List.Item>
          ))}
        </List>
        <Button fluid onClick={this.handleInsertYemek}>
          YENİ EKLE
        </Button>
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
