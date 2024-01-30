import usePrimaryNewsStyles from './PrimaryNews.style'
import {ReactChild, FC} from 'react'
import {Box, Button} from '@mui/material'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import Text from '../Text/Text'
import {ReactComponent as ViewsIcon} from '@/svg/views.svg'
import {ReactComponent as CommentsIcon} from '@/svg/comments.svg'
import {INews} from '@/types/types'
import NewsBackground from '@/img/news-background.png'
import textUtil from "@/utils/textUtil";

const {log} = console

interface PrimaryNewsProps extends INews {


    className?: string,

}

const PrimaryNews: FC<PrimaryNewsProps> =
    ({className, title, text, views, comments, id, image}) => {

        const Styles = usePrimaryNewsStyles()


        return (
            <Button
                href={`/article?id=${id}`}
                component={Styles}
                sx={{background: `linear-gradient(0deg, rgba(8, 4, 53, 0.81) 33.01%, rgba(8, 4, 53, 0.00) 79.18%), url(${image}) center/cover`}}
                className={`PrimaryNews primary-news ${className}`}
            >

                <Box className='primary-news__content'>
                    <PrimaryHeader>{textUtil.max(title, 60)}</PrimaryHeader>

                    <Text>{textUtil.max(text, 110)}</Text>

                    <Box className='primary-news__data'>
                        <span><ViewsIcon/>{views}</span>
                        <span><CommentsIcon/>{comments}</span>

                    </Box>
                </Box>


            </Button>
        )
    }
export default PrimaryNews