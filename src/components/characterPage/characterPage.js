import React, { Component } from "react";
// import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import RowBlock from "../rowBlock";
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';



export default class CharacterPage extends Component {

   gotService = new gotService();


state = {
   selectedChar: null,
   error: false
}

componentDidCatch() {
   console.log('error');
   this.setState({
       error:true
   })
}

onItemSelected = (id) => {
   this.setState({
       selectedChar: id
   })
}

   render() {

      if (this.state.error) {
         return <ErrorMessage/>
     }

     const itemList = (
        <ItemList 
           onItemSelected={this.onItemSelected}
           getData={this.gotService.getAllCharacters}
           renderItem={({name, gender}) => `${name} (${gender})`}/>
     )
     const charDetails = (
      <CharDetails charId={this.state.selectedChar}/>

     )

      return(
         <RowBlock left={itemList} right={charDetails}/>
       )
   }
}