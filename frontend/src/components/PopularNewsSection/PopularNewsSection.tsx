import usePopularNewsSectionStyles from './PopularNewsSection.style'
import { ReactChild, FC } from 'react'
import { Box, Button } from '@mui/material'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import Text from '../Text/Text'
import NewsBackground from '@/img/news-background.png'
import { INews } from '@/types/types'

const { log } = console

interface PopularNewsSectionProps {

    children?: ReactChild,

}

const PopularNewsSection: FC<PopularNewsSectionProps> = ({ children }) => {

    const Styles = usePopularNewsSectionStyles()

    const popularNews = [
        { name: 'Name news here', text: 'FROG is a deflationary token with', href: '#' },
        { name: 'Name news here', text: 'FROG is a deflationary token with', href: '#' },
        { name: 'Name news here', text: 'FROG is a deflationary token with', href: '#' },
    ]

    return (
        <Box component={Styles} className="PopularNews popular-news">

            <SecondaryHeader>
                Popular news
            </SecondaryHeader>

            {popularNews.map(news => (

                <Button href={news.href} className='popular-news__news'>

                    <img src={NewsBackground} alt="news" />

                    <Box className='popular-news__content'>
                        
                        <PrimaryHeader>{news.name}</PrimaryHeader>

                        <Text>{news.text}</Text>

                    </Box>
                </Button>

            ))}


        </Box>
    )
}
export default PopularNewsSection