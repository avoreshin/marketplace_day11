import React from 'react';
import logo from "../logo.svg";
import {AppBar, IconButton, Toolbar, Tooltip} from "@mui/material";
import Bange from "@mui/material/Badge"
import styled from "@emotion/styled";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';

const HeaderApp = (props: { count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    const LinkCustom = styled(Link)`
      margin: 0 30px 0 auto;
      color: #61dafb;
    `
    const ToolbarPlus = styled(Toolbar)`
      background-color: #1E212A;
    `
    const Img = styled.img`
      height: 100px;
      animation: App-logo-spin infinite 20s linear;
    `
    const Wrapper = styled.div`
      float: right;
      margin: 0 100px 0 auto;
      color: #61dafb;
    `
    const LinkM100 = styled.a`
      margin: 0 100px 0 auto;
    `
    const LogoutIconCustom = styled(LogoutIcon)`
      color: #E26060;
      transition: all 1s ease-in-out;

      :hover {
        color: #7A1958;
        transition: all 1s ease-out;
      }
    `

    return (
        <AppBar
            position="sticky" sx={{height: 100}}>
            <ToolbarPlus>
                <a href="/"><Img src={logo} alt="logo"/></a>
                <Wrapper>
                    <LinkCustom to="/my-orders">
                        <IconButton>
                            <Bange badgeContent={props.count} color={"error"}>
                                <Tooltip title={'Basket'}>
                                    <LocalGroceryStoreIcon sx={{color: '#E26060'}} fontSize={'large'}/>
                                </Tooltip>
                            </Bange>
                        </IconButton>
                    </LinkCustom>
                    <LinkM100 href={"/"}>

                        <IconButton>
                            <Tooltip title={'Logout'}>
                                <LogoutIconCustom fontSize={'large'}/>
                            </Tooltip>
                        </IconButton>
                    </LinkM100>
                </Wrapper>
            </ToolbarPlus>
        </AppBar>
    );
}

export default HeaderApp;