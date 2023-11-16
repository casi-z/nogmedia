import useArticlePageStyles from './ArticlePage.style'
import {ReactChild, FC, useState, useEffect} from 'react'
import { Box, Link } from '@mui/material'
import Page from '@/components/Page/Page'
import SecondaryNewsSection from '@/layouts/SecondaryNewsSection/SecondaryNewsSection'
import CategorySection from '@/layouts/CategorySection/CategorySection'
import NewsImage from '@/img/news-background.png'
import Text from '@/components/Text/Text'
import PrimaryHeader from '@/components/PrimaryHeader/PrimaryHeader'
import { ReactComponent as ViewsIcon } from '@/svg/views.svg'
import { ReactComponent as CommentsIcon } from '@/svg/comments.svg'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import {INews} from "@/types/types";
import NewsAPI from '@/api/news/news'

const { log } = console

interface ArticlePageProps {

    children?: ReactChild,

}

const news = new NewsAPI()

const ArticlePage: FC<ArticlePageProps> = ({ children }) => {

    const [articleData, setArticleData] = useState<INews>()

    const Styles = useArticlePageStyles()

    const tags = [
        { name: 'Ногинск', href: '#' },
        { name: 'Ногинск', href: '#' },
        { name: 'Ногинск', href: '#' },
        { name: 'Ногинск', href: '#' },

    ]

    async function loadArticleData () {
        const articleID = Number(window.location.hash.slice(1))
        log(articleID)
        await news.getNewsByID(articleID)
            .then(data => setArticleData(data))
    }

    useEffect(() => {
        loadArticleData ()
    }, [])

    return (
        <Box component={Styles} className="ArticlePage article-page">
            <Page>

                <Box className='article-page__left-container'>

                    <Box className={'article-page__content'}>

                        <img className={'article-page__image'} src={articleData?.image || NewsImage} alt="" />

                        <PrimaryHeader>
                            {articleData?.title}
                        </PrimaryHeader>

                        <Box className='primary-news__data'>
                            <span><ViewsIcon />{articleData?.views}</span>
                            <span><CommentsIcon />22222</span>

                        </Box>

                        <Text>{articleData?.text}</Text>

                        <PrimaryHeader>
                            Автор: <Link underline='none'>Иван Иванов</Link>
                        </PrimaryHeader>

                        <Box className='article-page__tags'>
                            <PrimaryHeader>
                                Теги:
                            </PrimaryHeader>
                            {tags.map(tag => (

                                <SecondaryButton href={tag.href}>{tag.name}</SecondaryButton>

                            ))}
                        </Box>

                    </Box>

                    <CategorySection />
                </Box>

            </Page>
        </Box>
    )
}
export default ArticlePage