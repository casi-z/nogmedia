import useVideoSliderStyles from './VideoSlider.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'

const { log } = console

interface VideoSliderProps {
   
   children?: ReactChild,
   
}

const VideoSlider: FC<VideoSliderProps> = ({ children }) => {
const Styles = useVideoSliderStyles()

    return(
      <Box component={Styles} className="VideoSlider">
         
      </Box>
    )
}
export default VideoSlider