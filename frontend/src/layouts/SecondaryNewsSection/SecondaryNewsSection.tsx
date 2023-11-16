import useSecondaryNewsSectionStyles from './SecondaryNewsSection.style'
import { ReactChild, FC, useEffect, useState, useRef } from 'react'
import { Box, Skeleton } from '@mui/material'
import SecondaryNews from '@/components/SecondaryNews/SecondaryNews'
import { INews } from "@/types/types";
import GetNewsByID from "@/api/news/news";
import { CSSTransition } from "react-transition-group";

const { log } = console

interface SecondaryNewsSectionProps {

    children?: ReactChild,

}

const news = new GetNewsByID()

let lastNewsID = 5

const SecondaryNewsSection: FC<SecondaryNewsSectionProps> = ({ children }) => {

    const Styles = useSecondaryNewsSectionStyles()

    const [secondaryNewsData, setSecondaryNewsData] = useState<INews[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isLoadingFinished, setIsLoadingFinished] = useState<boolean>(false)

    const secondaryNewsRef = useRef<HTMLDivElement>()

    async function loadSecondaryNews(newsID: number) {

        const data = await news.getNewsByID(newsID)
        setSecondaryNewsData([data])

    }

    async function lazyLoadNews() {
        const scrollHeight = window.scrollY + window.innerHeight
        //@ts-ignore
        if (scrollHeight > secondaryNewsRef.current.getBoundingClientRect().height - 300) {
            const data = await news.getNewsByID(lastNewsID)
            if (data.result) {
                alert(true)
                
            }
            lastNewsID++
            setSecondaryNewsData(prevState => [...prevState, data])
        }
    }

    useEffect(() => {
        if (isLoading) {
            lazyLoadNews().then(() => setIsLoading(false))
        }
    }, [isLoading])

    useEffect(() => {
        loadSecondaryNews(4)
        window.addEventListener('scroll', () => setIsLoading(true))
    }, [])

    return (
        <Box ref={secondaryNewsRef} component={Styles} className="SecondaryNewsSection secondary-news-section">

            {secondaryNewsData.map(element => (

                <SecondaryNews
                    tags={[
                        { name: 'Ногинск', href: '' },
                        { name: 'Ногинск', href: '' },
                        { name: 'Ногинск', href: '' },
                    ]}
                    id={element.id}
                    title={element.title}
                    text={element.text}
                    views={element.views}
                    comments={23454}
                    image={element.image}

                />

            ))}

            {/* Этот элемент - скелетон поэтому в него передаются фейковые данные */}
            {!isLoadingFinished &&
                <SecondaryNews
                    skeleton
                    tags={[

                    ]}
                    id={1}
                    title={''}
                    text={''}
                    views={1}
                    comments={1}
                    image={''}

                />
            }

        </Box>
    )
}
export default SecondaryNewsSection