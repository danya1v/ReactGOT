import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';


const ItemListBlock = styled.li `
cursor: pointer;
`


function ItemList ({getData, onItemSelected, renderItem}) {
    
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then( (data) => {
                updateList(data)
            })
    }, [])
    
   function renderItems(arr) {
        return arr.map((item) => {

            const label = renderItem(item);
            const {id} = item;
            return(
                <ItemListBlock 
                key={id} 
                className="list-group-item"
                onClick = { () => onItemSelected(id)}
                >
                   {label}
                </ItemListBlock>
            )
        })
    }
    if (!itemList) {
        return <Spinner />
    }
        
    const items = renderItems(itemList);

        return (
            <ul className="item-list list-group">
              {items}
            </ul>
        );
    
} 

export default ItemList;
