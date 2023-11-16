import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useSliderStyles() {

    const theme = useTheme()


    return (
        styled.section`
          width: 100%;
          color: black;
          z-index: 10;

          .swiper {
            width: 100%;
            border-radius: 7px;
          }

          .swiper-slide img {
            
            width: 100%;
            height: 100%;
            object-fit: cover;
            
          }

          .Slider__item {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 50%;
            padding: 3% 25%;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            .SecondaryHeader{
              display: flex;
              justify-content: center;
            }
          }
        `
    )
}

export default useSliderStyles