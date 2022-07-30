import React from 'react';
import HeaderApp from "../components/HeaderApp";
import styled from "styled-components/macro";
import {Container} from "@mui/material";
import BasketItens from "../components/BasketItems";

function MyOrders(props) {

    return (
       <div css={`background-color: #282c34;
          height: 100vh`}>
       <HeaderApp/>
           <Container>
               <BasketItens/>
           </Container>
       </div>
    );
}

export default MyOrders;