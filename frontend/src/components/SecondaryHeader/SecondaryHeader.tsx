
import { ReactChild, FC, ReactNode } from 'react'
import { Box, useTheme } from '@mui/material'
import styled from "styled-components";

const { log } = console

interface SecondaryHeaderProps {

    children?: ReactChild | ReactNode,
    outlined?: 'right' | 'left' | 'all',

}

const SecondaryHeader: FC<SecondaryHeaderProps> = ({ children, outlined }) => {
    const theme = useTheme()


    const Styles = styled.h3`
        color: ${theme.palette.text.primary};
        font-family: Montserrat;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 99.4%; /* 24.85px */
      
    `


    return (
        <Box component={Styles} className="SecondaryHeader">

            {children}

        </Box>
    )
}
export default SecondaryHeader