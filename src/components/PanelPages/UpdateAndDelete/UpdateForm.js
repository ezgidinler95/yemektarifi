import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { getYemek } from "../../../actions/anaYemek";

class UpdateForm extends Component {
  state = {
    adi: "",
    tarifi: "",
    malzeme: "",
    pismesüresi: "",
    files: []
  };

  async UNSAFE_componentWillMount() {
    const {
      match: { params }
    } = this.props;
    console.log(params._id);
    await this.props.getYemek(params._id);
  }

  onChangeHandlerFiles = async event => {
    if (event.target.files.length > 0) {
      await this.setState({
        files: event.target.files
      });
    }
  };

  errorMessage = () => {
    return this.props.enqueueSnackbar("Lütfen bir dosya ekleyiniz.", {
      variant: "error",
      persist: true,
      action: (
        <div
          style={{
            color: "#000",
            fontSize: "13px",
            cursor: "pointer",
            fontWeight: "500"
          }}
          onClick={() => this.props.closeSnackbar()}
        >
          KAPAT
        </div>
      )
    });
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
            <label>Kullanılacak Malzemeler</label>
            <input
              value={this.state.malzeme}
              name="malzeme"
              onChange={this.handleChangeInput}
              placeholder="Kullanılacak Malzemeler"
            />
          </Form.Field>
          <Form.Field>
            <label>Pişme Süresi</label>
            <input
              value={this.state.pismesüresi}
              name="pismesüresi"
              onChange={this.handleChangeInput}
              placeholder="Pişme Süresi"
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

const mapDispatchToProps = { getYemek };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
