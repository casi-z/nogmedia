import { ReactChild, FC } from 'react'
import { Box, Button, useTheme } from '@mui/material'
import styled from 'styled-components'

const { log } = console

interface SecondaryButtonProps {

    children: ReactChild,
    icon?: ReactChild,
    color?: String,
    className?: string,
    href?: string,

}


const SecondaryButton: FC<SecondaryButtonProps> = ({ className, children, icon, color, href }) => {
    const theme = useTheme()

    const Styles = styled.a`
        color: ${theme.palette.primary.main};
        border: 1px solid ${theme.palette.primary.main};
        text-align: center;
        font-family: Lato;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 99.4%; /* 11.928px */
        text-transform: capitalize;
    `

    return (
        <Button
            className={`SecondaryButton ${className}`}
            endIcon={icon || null}
            variant={'text'}
            href={href}
            component={Styles}

        >
            {children}
        </Button>
    )
}
export default SecondaryButton