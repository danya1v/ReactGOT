import React, {Component} from 'react';
import styled from 'styled-components';

const ItemListBlock = styled.li `
cursor: pointer;
`

export default class ItemList extends Component {


    render() {
        return (
            <ul className="item-list list-group">
                <ItemListBlock className="list-group-item">
                    John Snow
                </ItemListBlock>
                <ItemListBlock className="list-group-item">
                    Brandon Stark
                </ItemListBlock>
                <ItemListBlock className="list-group-item">
                    Geremy
                </ItemListBlock>
            </ul>
        );
    }
}