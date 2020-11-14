import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';


const ItemListBlock = styled.li `
cursor: pointer;
`


export default class ItemList extends Component {
    gotService = new gotService();
    state = {
        charList: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then ((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return(
                <ItemListBlock 
                key={i} 
                className="list-group-item"
                // onClick = {this.props.onCharSelected(i)}
                >
                   {item.name}
                </ItemListBlock>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if (!charList) {
            return <Spinner />
        }
        
        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
              {items}
            </ul>
        );
    }
}