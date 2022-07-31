import React, {useState} from 'react';
import logo from "../logo.svg";

import {AppBar, IconButton, Toolbar, Tooltip} from "@mui/material";
import Bange from "@mui/material/Badge"
import styled from "styled-components/macro";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LogoutIcon from '@mui/icons-material/Logout';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function HeaderApp({count, setCount, children}) {

    return (
        <AppBar
            position="sticky" sx={{height: 100}}>
            <Toolbar css={`background-color: #1E212A`}>
                <Link to="/">
                    <img src={logo} alt="logo"
                         css={`height: 100px;
                           animation: App-logo-spin infinite 20s linear`}/>
                </Link>

                <div css={`float: right;
                  margin: 0 100px 0 auto;
                  color: #61dafb;`}>
                    <Link to="/my-orders" css={`
                      margin: 0 30px 0 auto;
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
                    </Link>

                    <Link to="/" css={`
                      margin: 0 100px 0 auto;
                    `}>

                        <IconButton>
                            <Tooltip title={'Logout'}>
                                <LogoutIcon fontSize={'large'} css={`
                                  color: #E26060;
                                  transition: all 1s ease-in-out;

                                  :hover {
                                    color: #7A1958;
                                    transition: all 1s ease-out;
                                  }
                                `}/>
                            </Tooltip>
                        </IconButton>


                    </Link>
                </div>
            </Toolbar>
        </AppBar>

    );
}

export default HeaderApp;