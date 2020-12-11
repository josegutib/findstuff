import React, { useEffect, useState } from "react";
import { setPage, setProducts, setQuery } from "../actions/actions"
import { connect } from "react-redux";
import styled from 'styled-components';


const StyledDiv = styled.div`
height:60px;

`

const StyledInput = styled.input`
font-size:20px;
border-radius:4px;
outline:none;
height:100%;
margin:0;
padding:0;
padding-left:10px;
`

const StyledButton = styled.button`
font-size:20px;
border-radius:4px;
height:100%;
margin:0;
padding:6px;
margin-left:5px;
background:silver;
outline:none;
`


function searchProducts(string, filter, page) {
    return fetch("http://localhost:3001/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ string, filter, page })
    })
        .then(response => response.json())
}

const SearchBar = ({ setProducts, setQuery, filter, query, page, setPage }) => {
    const [string, setString] = useState("")
    const onButtonClick = async () => {
        setQuery(string)
        setPage(0)
    }


    const onButtonClickWrap = () => {
        if(string === ""){
            alert("Por favor ingrese una busqueda")
        }else{
            onButtonClick()
        }
    }

    useEffect(() => {


        const f = async () => {
            if (query) {
                const response = await searchProducts(query, filter, page)
                console.log(response)
                setProducts(response)
            } else {
                setProducts([])
            }
        }

        console.log({query,
                    filter,
                page})

        f()
    }, [query, filter, page, setProducts])




    return (
        <StyledDiv>
            <StyledInput placeholder="Search" onKeyUp={(e) => {
                if(e.keyCode === 13){
                    e.preventDefault();
                    onButtonClickWrap()
                }
                console.log(e.keyCode)
            } } onChange={(e) => setString(e.target.value)} />
            <StyledButton onClick={() => onButtonClickWrap()}>Search</StyledButton>
        </StyledDiv>

    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        filter: state.filter,
        query: state.query,
        page: state.page
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setProducts: (products) => dispatch(setProducts(products)),
//         setQuery: (string) => dispatch(setQuery(string)),
//         setPage: (page) => dispatch(setPage(page))
//     }
// }

const mapDispatchToProps = {
    setProducts,
    setQuery,
    setPage
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);