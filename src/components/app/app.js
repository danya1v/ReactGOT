import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import { Button } from "reactstrap";
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage';

export default class App extends Component {
  state = {
    visible: true,
    nameOpen: "Открыть",
    nameClose: "Скрыть",
    error: false
  };

  componentDidCatch() {
      console.log('error');
      this.setState({
          error:true
      })
  }

  onChangeVisible = () => {
    this.setState(() => {
      return {
        visible: !this.state.visible,
      };
    });
  };

 

  render() {
    const { visible, nameOpen, nameClose } = this.state;
    const randomChar = visible ? <RandomChar /> : null;
    const name = randomChar ? nameClose : nameOpen;

    if (this.state.error) {
        return <ErrorMessage/>
    }

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
          <CharacterPage/>
          <CharacterPage/>
          <CharacterPage/>
        </Container>
      </>
    );
  }
}
