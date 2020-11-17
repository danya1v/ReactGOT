import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';


const ItemListBlock = styled.li `
cursor: pointer;
`


export default class ItemList extends Component {
    
    state = {
        itemList: null,
        error: false
    }

    componentDidMount(){
        const{getData} = this.props;

        getData()
            .then ((itemList) => {
                this.setState({
                    itemList, 
                    error: false
                })
            })
            .catch(() => {this.onError()});
    }
    componentDidCatch(){
        this.setState({
            itemList: null,
            error: true
        })
    }

    onError(status){
        this.setState({
            itemList: null,
            error: true
        })
    }

   

    renderItems(arr) {
        return arr.map((item) => {

            const label = this.props.renderItem(item);
            const {id} = item;
            return(
                <ItemListBlock 
                key={id} 
                className="list-group-item"
                onClick = { () => this.props.onItemSelected(id)}
                >
                   {label}
                </ItemListBlock>
            )
        })
    }

    render() {
        const {itemList, error} = this.state;

        if(error){
            return <ErrorMessage/>
        }

        if (!itemList) {
            return <Spinner />
        }
        
        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
              {items}
            </ul>
        );
    }
} 

