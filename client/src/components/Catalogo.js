import React from "react"
import Product from "../components/ProductCard"
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display:grid;
    width:90%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap:20px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width:90%;
        grid-template-columns: 1fr;
  }
`


const CatalogoContainer = ({ products, query, filter }) => {

    
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