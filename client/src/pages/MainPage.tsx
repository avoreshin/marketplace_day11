import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, ImageList} from "@mui/material";
import styled from "@emotion/styled";

import dataimport from '../api/data.json'
import HeaderApp from "../components/HeaderApp";
import {useDispatch, useSelector} from "react-redux";
import {createInterface} from "readline";

function MainPage() {
    // const [search, setSeatch] = useState('');
    // const [data, setData] = useState([]);
    // const [basket, setBasket] = useState('')
    const [count, setCount] = useState(0)
    // const [login, setLogin] = useState('false')

    const WrapperBody = styled.div`
      background-color: #282c34;
      height: 100vh
    `
    return (
        <WrapperBody>
            <HeaderApp count={count} setCount={setCount}/>
            <Container>
                <ImageList cols={3} gap={10}>
                    {dataimport.map((item, index) => {
                        return (<ProductCard count={count} setCount={setCount} key={index} data={item}/>)
                    })}
                </ImageList>
            </Container>


        </WrapperBody>
    );
}

export default MainPage;