import useMainScreenStyles from './MainScreen.style'
import {ReactChild, FC} from 'react'
import {Box, useTheme, useMediaQuery} from '@mui/material'
import { SwiperSlide } from 'swiper/react';
import {Slider} from '../Slider/Slider';
const {log} = console

interface MainScreenProps {

    children?: ReactChild,

}

const MainScreen: FC<MainScreenProps> = ({children}) => {

    const Styles = useMainScreenStyles()

    const theme = useTheme()

    const tabletVersion = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

    return (
        
        <Box className='MainScreen main-screen' component={Styles}>
            
            <Slider>
                {Array.from({length: 3}).map((element, index) => (

                    <SwiperSlide key={index} className='main-screen__new-video'>
                        Новое видео

                    </SwiperSlide>

                ))}
            </Slider>
            
        </Box>
    )
}
export default MainScreen