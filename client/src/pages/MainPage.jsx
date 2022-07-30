import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import logo from "../logo.svg";
import App from "../App";
import {AppBar, Container, IconButton,  ListItem, Toolbar} from "@mui/material";
import Bange from "@mui/material/Badge"
import styled from "styled-components/macro";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import dataimport from '../api/data.json'

function MainPage(props) {
    const [search, setSeatch] = useState('');
    const [data, setData] = useState();
    const [basket, setBasket] = useState('')
    const [count, setCount] = useState(0)
    const [login, setLogin] = useState('false')

    fetch('../api/data.json')
        .then((res) => res.json())
        .then((data) => {setData(data)
            console.log(data)
        });

    console.log(data);
    return (

        <div css={`background-color: #282c34;
          height: 100vh`}>

            <AppBar
                position="sticky" sx={{height: 100}}>
                <Toolbar css={`background-color: #1E212A`}>
                    <a href="/">
                        <img src={logo} alt="logo"
                             css={`height: 100px;
                               animation: App-logo-spin infinite 20s linear`}/>
                    </a>
                    <div css={`float: right;
                      margin: 0 100px 0 auto;
                      color: #61dafb;`}>

                        <IconButton onClick={()=>{return (setCount(count+1))}}>
                            <Bange badgeContent={count} color={"error"}>
                                <LocalGroceryStoreIcon fontSize={'large'} css={`color: #E26060;`}/>
                            </Bange>
                        </IconButton>

                    </div>
                </Toolbar>

            </AppBar>
            <Container>

                {data? data.map((item, index) => {
                    return (<ProductCard key={index} data={item}/>)
                }):""}

            </Container>


        </div>
    );
}

export default MainPage;