import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addAnaYemek } from "../actions/anaYemek";

class AddFood extends Component {
  state = {
    adi: "",
    tarifi: "",
    files: []
  };

  async UNSAFE_componentWillMount() {
    //await this.props.allAnaYemek();
  }

  handdleAddYemekSubmit = async (e, state) => {
    console.log("buraya geldi");
    let anaYemek = new FormData();
    anaYemek.append("adi", this.state.adi);
    anaYemek.append("tarifi", this.state.adi);

    if (state.files) {
      if (state.files.length > 0) {
        for (var i = 0; i < state.files.length; i++) {
          console.log("buraya geldi");
          anaYemek.append("files", state.files[i]);
        }
      }
    }
    await this.props.addAnaYemek(anaYemek);
    if (this.props.addAnaYemekResult.code === 200) {
      alert("ekleme işlemi başarılı");
    } else {
      alert("ekleme işlemi başarısız!!!");
    }
  };

  onChangeHandlerFiles = async event => {
    if (event.target.files.length > 0) {
      await this.setState({
        files: event.target.files
      });
    }
  };

  handleChangeInput = element => {
    this.setState({
      [element.target.name]: element.target.value
    });
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.handdleAddYemekSubmit(e, this.state);
          }}
        >
          <Form.Field>
            <label>Yemek Adı</label>
            <input
              value={this.state.adi}
              name="adi"
              onChange={this.handleChangeInput}
              placeholder="Yemek Adı"
            />
          </Form.Field>
          <Form.Field>
            <label>Tarifi</label>
            <input
              value={this.state.tarifi}
              name="tarifi"
              onChange={this.handleChangeInput}
              placeholder="Tarifi"
            />
          </Form.Field>
          <Form.Field>
            <label>Görsel Ekleyiniz</label>
            <br />
            <input type="file" onChange={this.onChangeHandlerFiles} />
          </Form.Field>
          <Button type="submit">Ekle</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ anaYemekReducer }) => {
  return {
    ...anaYemekReducer
  };
};

const mapDispatchToProps = { addAnaYemek };

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
