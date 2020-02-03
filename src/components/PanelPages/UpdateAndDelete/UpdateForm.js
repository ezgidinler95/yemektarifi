import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { getYemek, updateYemek } from "../../../actions/anaYemek";
import SearchSelect from "react-select";

class UpdateForm extends Component {
  state = {
    adi: "",
    tarifi: "",
    malzeme: "",
    pismesüresi: "",
    type: { value: "", label: "tipi seç" },
    files: []
  };

  async UNSAFE_componentWillMount() {
    const {
      match: { params }
    } = this.props;
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

  handdleUpdateYemekSubmit = async (e, state) => {
    let anaYemek = new FormData();
    anaYemek.append("_id", e.target._id.value);
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

    await this.props.updateYemek(anaYemek);
    if (this.props.updateYemekResult.code === 200) {
      alert("Güncelleme işlemi başarılı");
    } else {
      alert("Güncelleme işlemi yapılıken sorun oluştu!!!");
    }
  };

  handleChangeInput = element => {
    this.setState({
      [element.target.name]: element.target.value
    });
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
            this.handdleUpdateYemekSubmit(e, this.state);
          }}
        >
          <Form.Field>
            <input
              name="_id"
              type="hidden"
              defaultValue={this.props.anaYemek._id}
            />
          </Form.Field>
          <Form.Field>
            <label>Yemek Adı</label>
            <input
              name="adi"
              defaultValue={this.props.anaYemek.adi}
              onChange={this.handleChangeInput}
              placeholder="Yemek Adı"
            />
          </Form.Field>
          <Form.Field>
            <label>Tarifi</label>
            <input
              defaultValue={this.props.anaYemek.tarifi}
              name="tarifi"
              onChange={this.handleChangeInput}
              placeholder="Tarifi"
            />
          </Form.Field>
          <Form.Field>
            <label>Kullanılacak Malzemeler</label>
            <input
              defaultValue={this.props.anaYemek.malzeme}
              name="malzeme"
              onChange={this.handleChangeInput}
              placeholder="Kullanılacak Malzemeler"
            />
          </Form.Field>
          <Form.Field>
            <label>Pişme Süresi</label>
            <input
              defaultValue={this.props.anaYemek.pismesüresi}
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
          <Button type="submit">Bilgileri Güncelle</Button>
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

const mapDispatchToProps = { getYemek, updateYemek };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
