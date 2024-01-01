import useSecondaryNewsStyles from './SecondaryNews.style'
import {ReactChild, FC} from 'react'
import {Box, Button, Skeleton} from '@mui/material'
import {INews, ITag} from '@/types/types'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import Text from '../Text/Text'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import NewsBackground from '@/img/news-background.png'
import {ReactComponent as ViewsIcon} from '@/svg/views.svg'
import {ReactComponent as CommentsIcon} from '@/svg/comments.svg'

const {log} = console

interface SecondaryNewsProps {

    tags: ITag[],
    newsData: INews

}

const SecondaryNews: FC<SecondaryNewsProps> =
    ({newsData, tags}) => {
        const Styles = useSecondaryNewsStyles()

        return (<>
            <Button href={`/article?id=${newsData.id}`} component={Styles} className="SecondaryNews secondary-news">

                <img src={newsData.image || NewsBackground} alt="title"/>

                <Box className='secondary-news__content'>

                    <PrimaryHeader>{newsData.title}</PrimaryHeader>

                    <Text>{newsData.text?.slice(0, 110)}...</Text>

                    <Box className='secondary-news__data'>

                        <span><ViewsIcon className='secondary-news__icon'/>{newsData.views}</span>
                        <span><CommentsIcon className='secondary-news__icon'/>{newsData.comments}</span>

                    </Box>

                    <Box className='secondary-news__tags'>

                        {tags.map(tag => (

                            <SecondaryButton href={tag.href}>{tag.name}</SecondaryButton>

                        ))}

                    </Box>
                </Box>

            </Button>
        </>)
    }
export default SecondaryNews