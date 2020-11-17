import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import OrderFilter from './OrderFilter';

const StyledNav = styled.nav`
    display:flex;
    justify-content:space-between;
    background:DarkSeaGreen;
    height: 100px;
    margin-bottom:24px;

`

const StyledH1 = styled.h1`
color:white;
padding:30px;
margin:0;

`

const StyledSelect = styled.select`
padding:15px;
border-radius:4px;
background:silver;
outline:none;
font-size:18px;
`



const NavBar = () => {
 return (
     <StyledNav>
         <div style={{width:'100%', display:'flex', alignItems:"center"}}>
             <StyledH1>Find <br/> Stuff</StyledH1>
             <OrderFilter />
         </div>
         <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'flex-end',padding:'20px'}}>
             <SearchBar />
         </div>
     </StyledNav>
 )
}

export default NavBar;