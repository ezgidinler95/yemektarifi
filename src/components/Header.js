import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Menu } from "semantic-ui-react";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as={Link} to="/login" header>
              Yemek Ekle
            </Menu.Item>
            <Menu.Item as={Link} to="/">
              Ana Yemekler
            </Menu.Item>
            <Menu.Item as={Link} to="/gunun-menusu">
              Günün Menüsü
            </Menu.Item>
            <Menu.Item as={Link} to="/tatlı">
              Tatlı
            </Menu.Item>
            <Menu.Item as={Link} to="/kahvaltı">
              Kahvaltı
            </Menu.Item>
            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    );
  }
}
