import { ReactChild, FC, ReactNode } from 'react'
import { Box, useTheme } from '@mui/material'
import styled from 'styled-components'

const { log } = console

interface TextProps {

    children: ReactChild | ReactNode,
    className?: String

}


const Text: FC<TextProps> = ({ children, className }) => {

    const theme = useTheme()

    const Styles = styled.p`
        color: ${theme.palette.text.primary};
        font-family: Rubik;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 22px; /* 157.143% */
    `

    return (
        <Box component={Styles} className={`Text ${className}`}>
            {children}
        </Box>
    )
}
export default Text