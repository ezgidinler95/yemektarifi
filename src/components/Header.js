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
              İŞLEMLER
            </Menu.Item>
            <Menu.Item as={Link} to="/">
              BÜTÜN TARİFLER
            </Menu.Item>
            <Menu.Item as={Link} to="/kahvalti">
              KAHVALTI
            </Menu.Item>
            <Menu.Item as={Link} to="/tatli">
              TATLI
            </Menu.Item>
            <Menu.Item as={Link} to="/gunun-menusu">
              GÜNÜN MENÜSÜ
            </Menu.Item>
            <Dropdown item simple text="DİĞER">
              <Dropdown.Menu>
                <Dropdown.Item>İletişim</Dropdown.Item>
                <Dropdown.Item>Hakkımızda</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Öneriler</Dropdown.Header>
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
