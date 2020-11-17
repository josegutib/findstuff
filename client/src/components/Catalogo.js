import React from "react"
import Product from "../components/ProductCard"
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 50%;
`


const CatalogoContainer = ({ products, query, filter }) => {

    console.log(filter)
    
        return (
            <StyledDiv className="container-fluid  ">
                { products.map(prod => {
                    return <Product
                        key={prod.id}
                        imagen={prod.thumbnail}
                        titulo={prod.title}
                        precio={prod.price}
                        condicion={prod.condition}
                        stock={prod.available_quantity}
                    />
                })
                }
            </StyledDiv>
        )
   
}
//imagen, titulo, precio, condicion, stock
const mapStateToProps = (state) => {
    return {
        products: state.products,
        query: state.query,
        filter: state.filter
    }
}
export default connect(mapStateToProps, undefined)(CatalogoContainer);