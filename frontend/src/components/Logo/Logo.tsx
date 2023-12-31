import {ReactChild, FC, useState, useEffect} from 'react'
import {Box, Button, Link, useTheme} from '@mui/material'
import styled from 'styled-components'
import randomElement from '@/utils/randomElement'

const {log} = console

interface LogoProps {

    children?: ReactChild,

}


const Logo: FC<LogoProps> = ({children}) => {

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

    const [logoColor, setLogoColor] = useState<string>('')

   
    useEffect(() => {

        setLogoColor(randomElement(logoColors))

    }, [])

    const Styles = styled.a`

      color: ${logoColor};
      font-family: 'Pretoria Deco';
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      text-transform: none;
      margin: 3.5vh 0;


    `
    return (
        <Button href='/' component={Styles} className="Logo">
            МЕДИаЦЕНТР
        </Button>
    )
}
export default Logo