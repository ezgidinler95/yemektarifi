import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { userLogin } from "../actions/user";
import { SITE_URL } from "../config/config";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  async UNSAFE_componentWillMount() {}

  handdleLoginSubmit = async (e, state) => {
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    await this.props.userLogin(user);
    if (this.props.userResult.code === 200) {
      window.location.href = SITE_URL + "/update-delete";
    } else {
      alert("hatalı bilgi girişi. İşlem başarısız!!!");
    }
  };

  handleChangeInput = element => {
    this.setState({
      [element.target.name]: element.target.value
    });
  };

  render() {
    return (
      <div className="arkafon">
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.handdleLoginSubmit(e, this.state);
          }}
        >
          <h1 style={{ textAlign: "center" }}>HOŞGELDİNİZ</h1>
          <h2 style={{ textAlign: "center" }}>
            Kullanıcı adı ve şifreniz ile giriş yapabilirsiniz :){" "}
          </h2>
          <Form.Field>
            <label
              style={{ textAlign: "center", color: "red", fontSize: "25px" }}
            >
              Kullanıcı Adı
            </label>
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleChangeInput}
              placeholder="Kullanıcı Adı"
            />
          </Form.Field>
          <Form.Field>
            <label
              style={{ textAlign: "center", color: "red", fontSize: "25px" }}
            >
              Şifre
            </label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleChangeInput}
              placeholder="password"
            />
          </Form.Field>
          <br></br>
          <Button fluid type="submit">
            GİRİŞ YAP
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    ...userReducer
  };
};

const mapDispatchToProps = { userLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
