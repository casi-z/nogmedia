import React, {ReactChild, FC, useState, MouseEventHandler, useContext} from 'react'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import LoginIcon from '@mui/icons-material/Login';
import {Avatar, Box, InputAdornment, Link, TextField, Typography, useMediaQuery, useTheme} from '@mui/material';
import useHeaderStyles from './Header.style'
import Logo from '@/components/Logo/Logo';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import './snow.css'
import {GlobalContext} from "@/context";

const { log } = console

interface HeaderProps {

    children?: ReactChild,

}

const Header: FC<HeaderProps> = ({ children }) => {

    const context = useContext(GlobalContext)

    const Styles = useHeaderStyles()


    return (

        <Box
            className='Header header'
            component={Styles}

        >

            <Box className='header__top'>

                <Box className={'header__title'}>
                    <Logo />

                </Box>

                <div className="header__menu-container">
                    <Menu />
                    {context.isAuth ? <><Avatar>{context.userData.username[0]}</Avatar> {context.userData.username}</> : <></>}
                </div>




            </Box>



            <Box className='header__background'>

                {/*{Array.from({length: 200}).map((none, index) => (*/}

                {/*    <div key={index} className="snow"></div>*/}

                {/*))}*/}

                <Box className={'header__circle'} />

            </Box>

            <Breadcrumbs />

        </Box>
    )
}
export default Header