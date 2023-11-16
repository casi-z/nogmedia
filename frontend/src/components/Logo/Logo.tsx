import { ReactChild, FC, useState, useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import styled from 'styled-components'
import randomElement from '@/utils/randomElement'

const { log } = console

interface LogoProps {

   children?: ReactChild,

}


const Logo: FC<LogoProps> = ({ children }) => {

   const theme = useTheme()

   const logoColors = [

      '#FFFFFF',
      '#FAFF00',
      '#42FF00',
      '#00E0FF',
      '#0047FF',
      '#0F6B00',
      '#59009F',
      '#BD0000',

   ]

   const [logoColor, setLogoColor] = useState('')

   function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }

   useEffect(() => {

      setLogoColor(getRandomColor())

   }, [])

   const Styles = styled.h1`

    color: ${logoColor};
    font-family: 'Pretoria Deco';
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    

`
   return (
      <Box component={Styles} className="Logo">
         МЕДИаЦЕНТР
      </Box>
   )
}
export default Logo