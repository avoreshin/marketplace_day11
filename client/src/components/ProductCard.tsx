import React from 'react';
import styled from "@emotion/styled";
import {Button} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {OptionsObject, useSnackbar, VariantType} from "notistack";
import {useDispatch, useSelector} from "react-redux";

function ProductCard(props: { data: { photo?: any; title?: any; price?: any; }; setCount: (arg0: any) => void; count: number; }) {
    const {title, price} = props.data
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant: VariantType | undefined) => () => {
        enqueueSnackbar('Add card to Basket!', {variant});
        props.setCount(props.count + 1)
        dispatch({type: "ADD_ORDER", payload: props.data})
    };

    const WrapCard = styled.div`
      width: 330px;
      background-color: #292D39;
      border-radius: 3px;
      border: 1px solid #F7F7F7;

      :hover {
        background-color: rgba(41, 45, 57, 0.52);
        border: 1px solid rgba(231, 232, 245, 0.52);
      }`

    const BgWrite = styled.div`
      background-color: #ffffff;
      text-align: center
    `
    const Img = styled.img`
      height: 100%;
    `
    const CardText = styled.div`
      display: block;
      padding: 0 20px
    `
    const P1 = styled.p`
      font-size: 20px;
      color: #39D88F
    `
    const S1 = styled.span`
      font-size: 20px;
      color: #F2F2F2;
      float: right;
    `
    const CenterWhile = styled.span`
      text-align: center;
      color: #ffffff;
    `
    const Button100 = styled(Button)`
      width: 100%
    `
    return (
        <WrapCard>
            <BgWrite>
                <Img src={props.data.photo.url} alt={props.data.photo.alt}
                />
            </BgWrite>
            <CardText>
                <P1>{title}</P1>
                <S1>{price}</S1>
            </CardText>
            <CenterWhile>
                <Button100 onClick={handleClickVariant("success")}>
                    <LocalGroceryStoreIcon fontSize={'large'}/>
                    <h3>ADD to cart </h3>
                </Button100>
            </CenterWhile>

        </WrapCard>
    );
}

export default ProductCard;