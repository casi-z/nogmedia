import {ReactChild, FC} from 'react'
import {Box} from '@mui/material'
import {useTheme} from "@mui/material";
import React from 'react';
import styled from 'styled-components';

const {log} = console

interface PrimaryHeaderProps {

    children: ReactChild | React.ReactNode,
    className?: String

}


const PrimaryHeader: FC<PrimaryHeaderProps> = ({children, className}) => {
    const theme = useTheme()

    const Styles = styled.h3`
      
      
      font-family: Montserrat;
      text-transform: none!important;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;

    `

    return (
        <Box component={Styles} className={`PrimaryHeader ${className}`}>
            {children}
        </Box>
    )
}
export default PrimaryHeader