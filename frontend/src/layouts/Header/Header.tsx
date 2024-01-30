import React, {ReactChild, FC, useState, MouseEventHandler, useContext} from 'react'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import {Avatar, Box, Button,} from '@mui/material';
import useHeaderStyles from './Header.style'
import Logo from '@/components/Logo/Logo';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import MenuIcon from '@mui/icons-material/Menu';
import './snow.css'
import {Menu as MUIMenu} from '@mui/material';
import {MenuItem as MUIMenuItem} from '@mui/material';
import {GlobalContext} from "@/context";

const {log} = console

interface HeaderProps {

    children?: ReactChild,

}

const Header: FC<HeaderProps> = ({children}) => {

    const context = useContext(GlobalContext)

    const Styles = useHeaderStyles()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (

        <Box
            className='Header header'
            component={Styles}

        >

            <Box className='header__top'>

                <Box className={'header__title'}>
                    <Logo/>

                </Box>

                <div className="header__menu-container">
                    <Menu/>
                    {true
                        ?
                        <>
                            <Button
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<MenuIcon/>}
                                className='header__user-data'
                            >
                                grtet
                            </Button>
                            <MUIMenu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MUIMenuItem onClick={handleClose}>Profile</MUIMenuItem>
                                <MUIMenuItem onClick={handleClose}>My account</MUIMenuItem>
                                <MUIMenuItem onClick={handleClose}>Logout</MUIMenuItem>
                            </MUIMenu>
                        </>
                        :
                        <></>
                    }
                    {/*{context.isAuth ? <><Avatar>{context.userData.username[0]}</Avatar> {context.userData.username}</> : <></>}*/}
                </div>


            </Box>


            <Box className='header__background'>

                {Array.from({length: 200}).map((none, index) => (

                    <div key={index} className="snow"></div>

                ))}

                <Box className={'header__circle'}/>

            </Box>

            <Breadcrumbs/>

        </Box>
    )
}
export default Header