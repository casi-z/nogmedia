import {
    Box,
    Drawer,
    IconButton,
    useTheme
} from "@mui/material"
import styled from "styled-components"

function useMenuBurgerStyles() {

    const theme = useTheme()

    return styled.div`
        .MuiDrawer-paper{
            background: ${theme.palette.secondary.light};
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            padding-bottom: 5%;
        }

        .menu-burger__items{
            width: 60vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0;

        }
        

    `
}
//MenuBurger: styled(Drawer)({
//    '.MuiDrawer-paper':{
//         background: theme.palette.secondary.main,
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexDirection: 'column',
//         paddingBottom: '5%'

//     }
// }),
// MenuBurger__Items: styled(Box)({
//  	width: '60vw',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//  	flexDirection: 'column',
//     background: theme.palette.secondary.main,
//     padding: 0,
// }),
// BurgerButton: styled(IconButton)({

// })
export default useMenuBurgerStyles