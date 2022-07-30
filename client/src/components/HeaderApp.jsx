import React, {useState} from 'react';
import logo from "../logo.svg";

import {AppBar, IconButton, Toolbar, Tooltip} from "@mui/material";
import Bange from "@mui/material/Badge"
import styled from "styled-components/macro";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function HeaderApp({count, setCount, children}) {

    return (
            <AppBar
                position="sticky" sx={{height: 100}}>
                <Toolbar css={`background-color: #1E212A`}>
                    <a href="/">
                        <img src={logo} alt="logo"
                             css={`height: 100px;
                               animation: App-logo-spin infinite 20s linear`}/>
                    </a>
                    <a href={"/my-orders"} css={`float: right;
                      margin: 0 100px 0 auto;
                      color: #61dafb;`}>

                        <IconButton onClick={() => {
                            setCount(count + 1)
                        }}>
                            <Bange badgeContent={count} color={"error"}>
                                <Tooltip title={'Basket'}>
                                    <LocalGroceryStoreIcon fontSize={'large'} css={`
                                      color: #E26060;
                                    `}/>
                                </Tooltip>
                            </Bange>
                        </IconButton>
                    </a>
                </Toolbar>
            </AppBar>

    );
}

export default HeaderApp;