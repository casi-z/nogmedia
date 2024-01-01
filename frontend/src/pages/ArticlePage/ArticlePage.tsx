import useArticlePageStyles from './ArticlePage.style'
import {ReactChild, FC, useState, useEffect, useContext, useRef} from 'react'
import {Box, Link} from '@mui/material'
import Page from '@/components/Page/Page'
import SecondaryNewsSection from '@/layouts/SecondaryNewsSection/SecondaryNewsSection'
import CategorySection from '@/layouts/CategorySection/CategorySection'
import NewsImage from '@/img/news-background.png'
import Text from '@/components/Text/Text'
import PrimaryHeader from '@/components/PrimaryHeader/PrimaryHeader'
import {ReactComponent as ViewsIcon} from '@/svg/views.svg'
import {ReactComponent as CommentsIcon} from '@/svg/comments.svg'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import {INews} from "@/types/types";
import NewsAPI from '@/api/news/news'
import {GlobalContext} from "@/context";
import {Navigate} from 'react-router-dom'
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
// @ts-ignore
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import {UploadFile} from "@mui/icons-material";
import URLutil from "@/utils/URLutil";

const {log} = console

interface ArticlePageProps {

    admin?: boolean,

}

const news = new NewsAPI()

const ArticlePage: FC<ArticlePageProps> = ({admin}) => {

    const [articleData, setArticleData] = useState<INews>()
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(false);

    const {setBreadcrumbs} = useContext(GlobalContext)


    const titleRef = useRef<HTMLSpanElement>();
    const textRef = useRef<HTMLParagraphElement>();
    const imageRef = useRef<HTMLInputElement>(null);

    const Styles = useArticlePageStyles()

    const tags = [
        {name: 'Ногинск', href: '#'},
        {name: 'Ногинск', href: '#'},
        {name: 'Ногинск', href: '#'},
        {name: 'Ногинск', href: '#'},

    ]


    async function loadArticleData(id: number) {

        const result = await news.getByID(id)

        if (!result.type) {
            setArticleData(result)
            //@ts-ignore
            setBreadcrumbs(prevState => [...prevState, result.title])
            await news.addView(id)

        } else {
            window.location.href = '/error?code=404'
        }

    }

    function handleEdit(event: any) {
        if(admin){
            event.target.setAttribute('contenteditable', 'true')
            setIsEdit(true)
        }

    }

    async function handleSave() {
        if(admin){
            setFetching(true)

            const data = {
                ...articleData,
                //@ts-ignore
                title: titleRef?.current?.textContent,
                //@ts-ignore
                text: textRef.current?.textContent,
                //@ts-ignore


            }


            const formData = new FormData()
            formData.append('id', String(data.id))
            formData.append('title', String(data.title))
            formData.append('text', String(data.text))
            formData.append('views', String(data.views))
            formData.append('comments', String(data.comments))
            formData.append('category', String(data.category))
            //@ts-ignore
            formData.append('image', imageRef.current?.files[0])
            //@ts-ignore
            log(imageRef.current?.files[0])
            //@ts-ignore
            await news.edit(data)
            setFetching(false)
        }
    }


    useEffect(() => {

        // if (Number(window.location.search.slice(1))) {
        //     const articleID = Number(
        //         window.location.search.slice(1)
        //     )
        //
        //     loadArticleData(articleID)
        // } else {
        //
        // }

        const articleId = URLutil.search('id')
        if(articleId){
            loadArticleData(Number(articleId))
        } else{
            window.location.href = '/error?code=404'
        }

       

    }, [])

    

    return (

        <Box component={Styles} className="ArticlePage article-page">
            <Page>

                <Box className='article-page__left-container'>

                    <Box className={'article-page__content'}>

                        <img className={'article-page__image'} src={articleData?.image || NewsImage} alt="News image"/>
                        {admin ? <input ref={imageRef} type="file"/> : <></>}
                        <PrimaryHeader>
                            {/*@ts-ignore*/}
                            <span ref={titleRef} onClick={handleEdit}>{articleData?.title}</span>
                        </PrimaryHeader>

                        <Box className='primary-news__data'>
                            <span><ViewsIcon className={'primary-news__icon'}/>{articleData?.views}</span>
                            <span><CommentsIcon className={'primary-news__icon'}/>22222</span>

                        </Box>

                        <Text>
                            {/*@ts-ignore*/}
                            <p onClick={handleEdit} ref={textRef}>
                                {articleData?.text}
                            </p>
                        </Text>

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
                        {isEdit
                            ?
                            <LoadingButton
                                onClick={handleSave}
                                loading={fetching}
                                loadingPosition="start"
                                startIcon={<UploadFile/>}
                                variant="outlined"
                            >
                                Сохранить
                            </LoadingButton>
                            :
                            <></>
                        }
                    </Box>

                    <CategorySection/>
                </Box>

            </Page>
        </Box>

    )
}
export default ArticlePage