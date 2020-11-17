import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions/actions';
import styled from 'styled-components';


const StyledDiv = styled.div`
display: flex;
justify-content:center;
`



const PageIndicator = ({setPage, page}) => {
    return (
        <StyledDiv>
            <button style={{padding:"6px", margin:"10px"}}onClick={ () => {
                if(page > 0){
                    setPage(page-1)
                }
            }}>Anterior</button> 
            <p>{page+1}</p>
            <button style={{padding:"6px", margin:"10px"}} onClick={() => setPage(page+1)}>Siguiente</button>
        </StyledDiv>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (page) => {
            dispatch(setPage(page))
        }
    }
}


const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(PageIndicator)