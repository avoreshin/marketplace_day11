import React from 'react';
import styled from "styled-components/macro";
import {Card} from "@mui/material";
import logo from "../logo.svg";

function ProductCard(props) {
    const {title, price} = props.data

    console.log(props)

    return (
        <div css={` padding: 20px;
          width: 300px;
          background-color: #292D39;
          border-radius: 3px;
          border: 1px solid #F7F7F7;

          :hover {
            background-color: rgba(41, 45, 57, 0.52);
            border: 1px solid rgba(231, 232, 245, 0.52);
          }
        `}>

            <img src={logo} alt=""/>
            <div css={`display: block`}>
                <span css={`font-size: 36px;
                  color: #39D88F`}>{title}</span>
                <span css={`font-size: 36px;
                  color: #F2F2F2;
                  float: right`}>{price}</span>
            </div>
        </div>
    );
}

export default ProductCard;