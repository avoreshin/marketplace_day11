import React from 'react';
import HeaderApp from "../components/HeaderApp";
import {Container} from "@mui/material";
import BasketItems from "../components/BasketItems";
import { useSelector} from "react-redux";

function MyOrders(props) {

    const orders = useSelector(state=>state.orders)
    return (
       <div css={`background-color: #282c34;
          height: 100vh`}>
       <HeaderApp/>
           <Container>
               {Boolean(orders) && orders.map((item) => {
                   return <BasketItems key = {item.id} item = {item}/>
               })}
           </Container>
       </div>
    );
}

export default MyOrders;