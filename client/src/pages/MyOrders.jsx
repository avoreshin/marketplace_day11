import React from 'react';
import HeaderApp from "../components/HeaderApp";
import styled from "styled-components/macro";
import {Container} from "@mui/material";
import BasketItens from "../components/BasketItems";
import data from '../api/data.json'

function MyOrders(props) {

    const [filter, setFilter] = React.useState('')
    const [dataId, setDataId] = React.useState(data)

    // setDataId(()=>{
    //      return (data.filter(item=> item.id === 0))
    // })

    console.log(dataId)
    return (
       <div css={`background-color: #282c34;
          height: 100vh`}>
       <HeaderApp/>
           <Container>
               {Boolean(dataId) && dataId.map((item) => {
                   return <BasketItens key = {item.id} item = {item}/>
               })}

           </Container>
       </div>
    );
}

export default MyOrders;