import useMenuStyles from './Menu.style'
import { ReactChild, FC, useState } from 'react'
import {Box, useMediaQuery} from '@mui/material'
import MenuItem from '@/components/MenuItem/MenuItem'
import MenuBurger from '@/components/MenuBurger/MenuBurger';
const { log } = console

interface MenuProps {

    children?: ReactChild,

}
const menuItems = [
    {
        name: 'Наша команда',

        href: '/'
    },
    {
        name: 'Статьи',
        href: '/'
    },
    {
        name: 'Видео',
        href: '/'
    },
    {
        name: 'Ногинский колледж',
        href: '/'
    },

]
const Menu: FC<MenuProps> = ({ children }) => {

    const Styles = useMenuStyles()

    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.up('sm'))

    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false)

    return (
        <>
            <Box component={Styles} className="Menu">

                {mobileVersion
                    ?
                        <>

                            {menuItems.map((menuItem, index) =>

                            <MenuItem key={index} href={menuItem.href} >
                                {menuItem.name}
                            </MenuItem>
                            )}
                        </>

                    : <MenuBurger menuItems={menuItems} />

                }

            </Box>

        </>
    )
}
export default Menu