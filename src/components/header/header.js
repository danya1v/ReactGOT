import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    margin: 0;
    a{
        color: #ffffff;
        text-decoration: none;
        &:hover{
            text-decoration: none;
            color: #ffffff;
        }
    }
`;
// eslint-disable-next-line no-alert, quotes, semi
const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    list-style-type: none;
    li {
        a{
            color: #ffffff;
            text-decoration: none;
        }
        margin-right: 20px;
        font-size: 18px;
    }
`
// const Link = styled.a`
//     color: inherit;
//     text-decoration: none;

//     &:hover{
//         text-decoration: none;
//         color: inherit;
//     }
//     &:visited{
//         text-decoration: none;
//         color: inherit;
//     }
//     &:focus{
//         text-decoration: none;
//         color: inherit;
//     }
//     &:active{
//         text-decoration: none;
//         color: inherit;
//     }
// `
const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
            <Link to ='/'> Game of Thrones DB</Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    
                <Link to ='/characters/'> Characters</Link>
                </li>
                <li>
                    
                    <Link to ='/houses/'>Houses</Link> 
                </li>
                <li>
                    <Link to ='/books/'>Books</Link>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};
export default Header;