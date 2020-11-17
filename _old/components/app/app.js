import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from "reactstrap";
import ErrorMessage from '../errorMessage/errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages/index';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import styled from 'styled-components';
import './app.css';




export default class App extends Component {
  gotService = new gotService();

  state = {
      showRandomChar: true,
      error: false,
      selectedHouse: 20,
      nameOpen: "Открыть",
      nameClose: "Скрыть",
  };

  componentDidCatch() {
      console.log('error');
      this.setState({
          error: true
      })
  }

  toggleRandomChar = () => {
      this.setState((state) => {
          return {
              showRandomChar: !state.showRandomChar
          }
      });
  };


  render() {
      const { nameOpen, nameClose } = this.state;
      const char = this.state.showRandomChar ? <RandomChar />  : null;
      const changeName = char ? nameClose : nameOpen;
      if (this.state.error) {
          return <ErrorMessage/>
      }

      return (
          <Router> 
              <div className='app'>
                  <Container>
                      <Header />
                  </Container>
                  <Container>
                      <Row>
                          <Col lg={{size: 5, offset: 0}}>
                          <Button 
                          color="secondary"
                          size="lg"
                          block
                              
                              onClick={this.toggleRandomChar}>{changeName}</Button>
                          {char}
                          </Col>
                      </Row>
                      <Switch>
                      <Route path='/' component={() => <h1 style={{color : 'white', textAlign:'center' }}>Welcome to GOT DB</h1>} exact/>
                      <Route path='/characters' component={CharacterPage} />
                      <Route path='/houses' component={HousesPage} />
                      <Route path='/books' component={BooksPage} exact/>
                      <Route path='/books/:id' render={({match}) => {
                          const {id} = match.params;
                      return <BooksItem bookId={id}/>}}/>
                      <Route render={() => 
                      <>
                      <h1 style={{color : 'white', textAlign:'center' }}>404 Error - Запрашиваемой страницы не существует</h1>
                      <Button><Link to='/characters/'>Back to main menu</Link></Button>
                      </>
                      }/>
                     
                      </Switch>
                      
                  </Container>
              </div>
          </Router>
      )
  }

};
