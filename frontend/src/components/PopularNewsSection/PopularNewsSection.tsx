import usePopularNewsSectionStyles from './PopularNewsSection.style'
import { ReactChild, FC, useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import Text from '../Text/Text'
import NewsBackground from '@/img/news-background.png'
import { INews } from '@/types/types'
import NewsAPI from '@/api/news/news'

const { log } = console

interface PopularNewsSectionProps {

    children?: ReactChild,

}

const news = new NewsAPI()

const PopularNewsSection: FC<PopularNewsSectionProps> = ({ children }) => {

    const Styles = usePopularNewsSectionStyles()

    const [popularNews, setPopularNews] = useState<INews[]>([])

    async function getPopularNews() {
        const result = await news.getAllPopular()
        if(true){
            setPopularNews(result)
        }
    }

    useEffect(() => {
        getPopularNews()
    },[])

    return (
        <Box component={Styles} className="PopularNews popular-news">

            <SecondaryHeader>
                Популярные ⚡️
            </SecondaryHeader>

            {popularNews.map(news => (

                <Button href={`/article?id=${news.id}`} className='popular-news__news'>

                    <img src={NewsBackground} alt="news" />

                    <Box className='popular-news__content'>
                        
                        <PrimaryHeader>{news.title}</PrimaryHeader>

                        <Text>{news.text.slice(0, 20)}...</Text>

                    </Box>
                </Button>

            ))}


        </Box>
    )
}
export default PopularNewsSection