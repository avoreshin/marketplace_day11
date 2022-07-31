import React from 'react';
import styled from "styled-components/macro";
import {useSelector} from "react-redux";

function BasketItems(props) {
    return (

        <div css={`background-color: #ffffff;
          height: 200px`}>
            <div css={`display: flex;
              margin: 30px 0;
              justify-content: space-between;
              align-items: center;
              //border-radius: 6px;
              border: 1px solid #1f9d93;
              height: 100%;
              padding: 0 50px`}>
                <div><img css={`height: 195px; :hover{filter: blur(4px); transition: all 2s ease-in-out }`} src={props.item.photo.url} alt=""/></div>
                <div><h2>{props.item.title}</h2></div>
                <div><h2>{props.item.price} RUB</h2></div>
            </div>
        </div>
    );
}

export default BasketItems;