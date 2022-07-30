import React from 'react';
import styled from "styled-components/macro";
import {Button, Card} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {useSnackbar} from "notistack";

function ProductCard(props) {
    const {title, price} = props.data

    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant =(variant)  => ()=> {
        enqueueSnackbar('Add card to Basket!', (variant));
        props.setCount(props.count + 1)
    };
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
              padding: 0 20px`}>
                <p css={`font-size: 20px;
                  color: #39D88F`}>{title}</p>
                <span css={`font-size: 20px;
                  color: #F2F2F2;
                  float: right`}>{price}</span>
            </div>
            <div css={`
              text-align: center; color: #ffffff;`}>

                <Button css={`width: 100%`} onClick={handleClickVariant("susses")}>
                    <LocalGroceryStoreIcon fontSize={'large'}/>
                    <h3>ADD to cart </h3>
                </Button>
            </div>

        </div>
    );
}

export default ProductCard;