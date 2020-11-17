import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { setFilter } from '../actions/actions'


const StyledSelect = styled.select`
padding:15px;
border-radius:4px;
background:silver;
outline:none;
font-size:18px;
`


const OrderFilter = ({cambiarBusqueda}) => {

    return (
        <div style={{ display: 'flex', alignItems: "center" }}>
            <h3>Order</h3>
            <StyledSelect style={{ marginLeft: "20px" }} onChange={(e) => cambiarBusqueda(e.target.value)}>
                <option>Mas Relevantes</option>
                <option>Mayor Precio</option>
                <option>Menor Precio</option>
            </StyledSelect>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
 return {
     cambiarBusqueda: (valor) => {
        dispatch(setFilter(valor))
     }
 }
}


export default connect(undefined,mapDispatchToProps)(OrderFilter)