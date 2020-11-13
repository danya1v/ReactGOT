import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;
// eslint-disable-next-line no-alert, quotes, semi
const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`
const LinkStyleA = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover{
        text-decoration: none;
        color: inherit;
    }
    &:visited{
        text-decoration: none;
        color: inherit;
    }
    &:focus{
        text-decoration: none;
        color: inherit;
    }
    &:active{
        text-decoration: none;
        color: inherit;
    }
`
const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <LinkStyleA href="#">
                Game of Thrones DB
                </LinkStyleA>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <LinkStyleA href="#">Characters</LinkStyleA>
                </li>
                <li>
                    
                    <LinkStyleA href="#">Houses</LinkStyleA> 
                </li>
                <li>
                    <LinkStyleA href="#">Books</LinkStyleA>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};
export default Header;