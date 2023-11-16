import useSliderStyles from './Slider.style'
import { ReactChild, ReactNode, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '@/img/mountains-2.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Text from "@/components/Text/Text";

const { log } = console

interface SliderProps {

    children?: ReactChild | ReactNode,

}

export const Slider: FC<SliderProps> = ({ children }) => {

    const Styles = useSliderStyles()
    const theme = useTheme()

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class='${className} swiper-pagination__bullet'>${''}</span>`;
        },
    }
    return (
        <Box component={Styles} className="Slider">
            {

                <Swiper
                    // @ts-ignore
                    pagination={pagination}
                    autoplay={true}
                    modules={[Pagination]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    className="mySwiper"

                >

                    {children}

                </Swiper>
            }
        </Box>
    )
}

