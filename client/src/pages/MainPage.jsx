import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import logo from "../logo.svg";
import App from "../App";
import {AppBar, Container, IconButton, ImageList, ListItem, Toolbar, Tooltip} from "@mui/material";
import Bange from "@mui/material/Badge"
import styled from "styled-components/macro";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import dataimport from '../api/data.json'
import HeaderApp from "../components/HeaderApp";

function MainPage(props) {
    const [search, setSeatch] = useState('');
    const [data, setData] = useState([]);
    const [basket, setBasket] = useState('')
    const [count, setCount] = useState(0)
    const [login, setLogin] = useState('false')

    fetch('http://localhost:3000/products')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setData(data)
        });
    return (
        <div css={`background-color: #282c34;
          height: 100vh`}>
            <HeaderApp count={count} setCount={setCount}/>
            <Container>
                <ImageList cols={3} gap={10}>
                    {data.map((item, index) => {
                        return (<ProductCard count={count} setCount={setCount} key={index} data={item}/>)
                    })}
                </ImageList>
            </Container>


        </div>
    );
}

export default MainPage;