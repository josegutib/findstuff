import React from "react";
import styled from 'styled-components'


const FlexDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:24px;
    justify-content:space-around;
    border:1px solid silver;
    border-radius:4px;
    box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    padding-top:20px;
    padding-left:40px;
    padding-right:40px;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledTitle = styled.p`
font-size:20px;
`

const CardBody = styled.div`
padding:20px;
`

const Product = ({ imagen, titulo, precio, condicion, stock }) => {
    return (
        <FlexDiv className="card" >
            <div style={{ width: "200px", height: "200px", border: "1px solid gray" }}>
                <img src={imagen} width="100%" height="100%" style={{ objectFit: "fill" }} alt="..." />
            </div>
            
            <CardBody>
                <StyledTitle className="card-title">{titulo}</StyledTitle>
                <p style={{fontStyle:"italic"}} className="card-text">Precio: {precio}</p>
                <p style={{fontStyle:"italic"}} className="card-text">Condicion: {condicion}</p>
                <p style={{fontStyle:"italic"}} className="card-text">Stock: {stock}</p>
            </CardBody>
        </FlexDiv>
    )
}
export default Product;