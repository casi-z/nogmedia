import { ReactChild, FC } from 'react'
import {Box, IconButton, useTheme} from '@mui/material'
import styled from 'styled-components'
import Text from "@/components/Text/Text";
import {ReactComponent as FacebookIcon} from "@/svg/Socials/facebook.svg";
import {ReactComponent as TweeterIcon} from "@/svg/Socials/twitter.svg";
import {ReactComponent as InstagramIcon} from "@/svg/Socials/instagram.svg";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

const { log } = console

interface SocialIconsProps {
   

   
}



const SocialIcons: FC<SocialIconsProps> = ({}) => {

    const theme = useTheme()

    const Styles = styled.div`

      display: flex;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      .SocialIcons__text{
        padding-right: 2%;
        white-space: nowrap;
      }
      .socialIcon{
        transform: rotate(-90deg);
      }

    `

    const socials = [
        {
            href: 'facebook.com',
            icon: <FacebookIcon data-cursor-pointer/>,

        },
        {
            href: 'twitter.com',
            icon: <TweeterIcon data-cursor-pointer/>,

        },
        {
            href: 'instagram.com',
            icon: <InstagramIcon data-cursor-pointer/>,

        },
    ]

    return(

        <Box component={Styles}>
            <VisuallyHidden>Мы в соцсетях</VisuallyHidden>
            <Text className={'SocialIcons__text'}>Follow us</Text>

            {socials.map(social => (

                <IconButton
                    className={'socialIcon'}
                    href={`https://${social.href}`}
                >
                    {social.icon}
                </IconButton>

            ))}

        </Box>
    )
}
export default SocialIcons