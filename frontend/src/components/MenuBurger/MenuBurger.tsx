import useMenuBurgerStyles from './MenuBurger.style'
import { ReactChild, FC, useState } from 'react'
import { Box, Button, Divider, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@/components/MenuItem/MenuItem';
import { IMenuItem } from '@/types/types';
import Logo from '../Logo/Logo';
const { log } = console

interface MenuBurgerProps {

    children?: ReactChild,
    menuItems: IMenuItem[],

}

const MenuBurger: FC<MenuBurgerProps> = ({ children, menuItems }) => {

    const Styles = useMenuBurgerStyles()


    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false)

    const handleClose = () => setIsMenuBurgerOpen(false)

    const handleOpen = () => setIsMenuBurgerOpen(true)

    return (<>

        <IconButton onClick={handleOpen}>

            <MenuIcon color='primary' />

        </IconButton>

        <Drawer
            onClick={handleClose}
            component={Styles}
            open={isMenuBurgerOpen}
            anchor={'right'}

        >

            <Box className='menu-burger__items'>

                {menuItems.map((menuItem, index) => (

                    <MenuItem
                        key={index}
                        href={menuItem.href}
                        onClick={handleClose}
                        onKeyDown={handleClose}
                    >
                        {menuItem.name}
                    </MenuItem>

                ))}

                <Divider />

            </Box>

            <Button
                href="https://google.com"
                onClick={handleClose}
                onKeyDown={handleClose}
            >
                <Logo />
            </Button>

        </Drawer>

    </>)
}
export default MenuBurger