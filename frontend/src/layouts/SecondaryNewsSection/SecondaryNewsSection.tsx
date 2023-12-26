import useSecondaryNewsSectionStyles from './SecondaryNewsSection.style'
import { ReactChild, FC, useEffect, useState, useRef } from 'react'
import { Box, Skeleton } from '@mui/material'
import SecondaryNews from '@/components/SecondaryNews/SecondaryNews'
import { INews } from "@/types/types";
import getByNumber from "@/api/news/news";
import { CSSTransition } from "react-transition-group";
import NewsAPI from '@/api/news/news';
import SecondaryNewsSkeleton from "@/components/SecondaryNews/SecondaryNewsSkeleton";

const { log } = console

interface SecondaryNewsSectionProps {

    categoryID?: number

}

const news = new NewsAPI()

let lastNewsNumber = 5

const SecondaryNewsSection: FC<SecondaryNewsSectionProps> = ({ categoryID }) => {

    const Styles = useSecondaryNewsSectionStyles()

    const [secondaryNewsData, setSecondaryNewsData] = useState<INews[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isLoadingFinished, setIsLoadingFinished] = useState<boolean>(false)

    const secondaryNewsRef = useRef<HTMLDivElement>()

    async function loadSecondaryNews() {

        if (categoryID) {

            //@ts-ignore
            const data = await news.getByCategory(categoryID, 1)
            setSecondaryNewsData([data])

        } else {

            const data = await news.getByNumber(4)
            setSecondaryNewsData([data])
        }


    }

    async function lazyLoadNews() {
        const scrollHeight = window.scrollY + window.innerHeight
        //@ts-ignore
        if (scrollHeight > secondaryNewsRef.current.getBoundingClientRect().height - 300) {

            if (categoryID) {

                const data = await news.getByCategory(categoryID, lastNewsNumber)

                lastNewsNumber++

                log('загружаем', lastNewsNumber)

                setSecondaryNewsData(prevState => [...prevState, data])

            } else {

                const data = await news.getByNumber(lastNewsNumber)

                lastNewsNumber++

                log('загружаем', lastNewsNumber)

                setSecondaryNewsData(prevState => [...prevState, data])
            }
        }
    }

    useEffect(() => {
        if (isLoading) {
            lazyLoadNews().then(() => setIsLoading(false))
        }
    }, [isLoading])

    useEffect(() => {
        if(categoryID){
            lastNewsNumber = 2
        }
        loadSecondaryNews()
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
                    key={element.id}
                    newsData={element}

                />

            ))}

            {/* Скелетон виден при загрузке новости*/}
            {!isLoadingFinished &&
                <SecondaryNewsSkeleton/>
            }

        </Box>
    )
}
export default SecondaryNewsSection