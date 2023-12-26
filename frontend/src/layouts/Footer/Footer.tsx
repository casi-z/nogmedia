import useFooterStyles from './Footer.style'
import { ReactChild, FC } from 'react'
import { ReactComponent as InstagramIcon } from "../../svg/InstagramIcon.svg";
import { ReactComponent as VKIcon } from "../../svg/VKIcon.svg";
import { ReactComponent as FacebookIcon } from "../../svg/FacebookIcon.svg";

import {Box, Button, Divider, IconButton, Input, Link} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import PrimaryHeader from '@/components/PrimaryHeader/PrimaryHeader';
const { log } = console

interface FooterProps {

    children?: ReactChild,
    className?: string,

}

const Footer: FC<FooterProps> = ({ children, className }) => {

    const Styles = useFooterStyles()

    const socialIcons = [
        { icon: <VKIcon />, href: 'vk.com' },
        { icon: <FacebookIcon />, href: 'facebook.com' },
        { icon: <InstagramIcon />, href: 'instagram.com' },
    ]
    return (

        <Box className='Footer footer' component={Styles}>

            <Box className={'footer__circle'} />

            <Box className='footer__body'>

                <Box className="footer__contact">

                    <PrimaryHeader>Связаться с нами:</PrimaryHeader>

                    <Box component='span' className='footer__email'>

                        demolutionclub@gmail.com
                        
                    </Box>

                </Box>

                <Box className='footer__socials'>

                    <PrimaryHeader>Наши соцсети</PrimaryHeader>

                    <Box className='footer__socials-buttons'>

                        <IconButton href='https://t.me/nogmedia'><TelegramIcon color='secondary' /></IconButton>

                        <IconButton href='https://vk.com/nogmedia'><VKIcon /></IconButton>
                    </Box>

                </Box>

            </Box>

            <Box component={'ul'} className='footer__bottom'>
                

                <Box component={'li'}>
                Все права защищены © Медиацентр&nbsp;<Link className={'footer__link'} href={'https://nogkolledzh.ru/'}>Ногинского колледжа</Link>
                </Box>
                <Box component={'li'}>
                    made by&nbsp;
                    <Link className={'footer__link'} href={'https://casi-z.github.io'}>casi-z</Link>

                </Box>

            </Box>

        </Box>
    )
}
export default Footer