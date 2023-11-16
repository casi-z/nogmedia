import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useBreadcrumbsStyles() {

    const theme = useTheme()


    return (

        styled.div`
           align-self: flex-start;
           .breadcrumbs__link{
            color: ${theme.palette.primary.main};
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px; 
        
           }
        `

    )
}
export default useBreadcrumbsStyles