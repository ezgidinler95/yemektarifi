import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addAnaYemek } from "../../actions/anaYemek";
import SearchSelect from "react-select";

class AddFood extends Component {
  state = {
    adi: "",
    tarifi: "",
    malzeme: "",
    pismesüresi: "",
    type: { value: "", label: "tipi seç" },
    files: []
  };

  async UNSAFE_componentWillMount() {
    //await this.props.allAnaYemek();
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

  handdleAddYemekSubmit = async (e, state) => {
    let anaYemek = new FormData();
    anaYemek.append("adi", this.state.adi);
    anaYemek.append("tarifi", this.state.tarifi);
    anaYemek.append("malzeme", this.state.malzeme);
    anaYemek.append("pismesüresi", this.state.pismesüresi);
    anaYemek.append("type", state.type.value);

    if (state.files) {
      if (state.files.length > 0) {
        for (var i = 0; i < state.files.length; i++) {
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

  handleChangeInput = element => {
    this.setState({ [element.target.name]: element.target.value });
  };

  handleChangeType = async type => {
    this.setState({ type });
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
            <label htmlFor="type">Yemek Tipi</label>
            <SearchSelect
              value={this.state.type}
              onChange={this.handleChangeType}
              options={[
                { value: 0, label: "Ana Yemek" },
                { value: 1, label: "Kahvaltılık" },
                { value: 2, label: "Tatlı" }
              ]}
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
