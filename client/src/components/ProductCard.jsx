import React from 'react';
import styled from "styled-components/macro";
import {Card} from "@mui/material";
import logo from "../logo.svg";

function ProductCard(props) {
    const {title, price} = props.data

    // console.log(props)

    return (
        <div css={`
          width: 330px;
          background-color: #292D39;
          border-radius: 3px;
          border: 1px solid #F7F7F7;

          :hover {
            background-color: rgba(41, 45, 57, 0.52);
            border: 1px solid rgba(231, 232, 245, 0.52);
          }
        `}>
            <div css={`background-color: #ffffff;
              text-align: center`}>
                <img src={props.data.photo.url} alt={props.data.photo.alt}
                     css={` height: 100%`}
                />
            </div>
            <div css={`display: block;
              padding: 20px`}>
                <span css={`font-size: 20px;
                  color: #39D88F`}>{title}</span>
                <span css={`font-size: 20px;
                  color: #F2F2F2;
                  float: right`}>{price}</span>
            </div>
        </div>
    );
}

export default ProductCard;