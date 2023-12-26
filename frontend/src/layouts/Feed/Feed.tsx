import useFeedStyles from './Feed.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'

const { log } = console

interface FeedProps {
   
   children?: ReactChild,
   
}

const Feed: FC<FeedProps> = ({ children }) => {
const Styles = useFeedStyles()

    return(
      <Box component={Styles} className="Feed">
         { children }
      </Box>
    )
}
export default Feed