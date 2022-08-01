import React from 'react';
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

function BasketItems(props: { item: { photo: { url: string | undefined; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) {

    const CardItem = styled.div`
      display: flex;
      margin: 30px 0;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #1f9d93;
      height: 100%;
      padding: 0 50px
    `
    const Wrapper = styled.div`
      background-color: #ffffff;
      height: 200px
    `
    const Img = styled.div`
      height: 195px;

      :hover {
        filter: blur(4px);
        transition: all 2s ease-in-out
      }
    `
    return (
        <Wrapper>
            <CardItem>
                <Img><img src={props.item.photo.url} alt=""/></Img>
                <div><h2>{props.item.title}</h2></div>
                <div><h2>{props.item.price} RUR</h2></div>
            </CardItem>

        </Wrapper>
    );
}

export default BasketItems;