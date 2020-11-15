import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import { Button } from "reactstrap";

export default class App extends Component {
  state = {
    visible: true,
    nameOpen: "Открыть",
    nameClose: "Скрыть",
    selectedChar: 130,
  };
  onChangeVisible = () => {
    this.setState(() => {
      return {
        visible: !this.state.visible,
      };
    });
  };

  onCharSelected = (id) => {
      this.setState({
          selectedChar: id
      })
  }

  render() {
    const { visible, nameOpen, nameClose } = this.state;
    const randomChar = visible ? <RandomChar /> : null;
    const name = randomChar ? nameClose : nameOpen;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <Button
                color="secondary"
                size="lg"
                block
                onClick={this.onChangeVisible}
              >
                {name}
              </Button>
              {randomChar}
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList onCharSelected={this.onCharSelected}/>
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
