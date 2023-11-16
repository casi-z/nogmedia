import usePrimaryNewsSectionStyles from './PrimaryNewsSection.style'
import {ReactChild, FC, useEffect, useState} from 'react'
import {Box, useMediaQuery} from '@mui/material'
import PrimaryNews from '@/components/PrimaryNews/PrimaryNews'
import {Slider} from "@/layouts/Slider/Slider";
import {SwiperSlide} from 'swiper/react';
import NewsAPI from "@/api/news/news";
import {INews} from "@/types/types";
import axios from "axios";

const {log} = console

interface PrimaryNewsSectionProps {

    children?: ReactChild,

}

const news = new NewsAPI()

let primaryNewsDataCopy: INews[] = []

const PrimaryNewsSection: FC<PrimaryNewsSectionProps> = ({children}) => {

    const [primaryNewsData, setPrimaryNewsData] = useState<INews[]>([])

    useEffect(() => {

        async function loadPrimaryNews () {

            for (let i = 1; i < 4; i++) {

                await news.getNewsByID(i)
                    .then(data => {
    
                        return primaryNewsDataCopy.push(data)
                    })


            }

            setPrimaryNewsData(primaryNewsDataCopy)
        }

        loadPrimaryNews()

    },[])

    const Styles = usePrimaryNewsSectionStyles()

    const desktopVersion = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

    return (
        <>
            {primaryNewsData.length > 0 ?

                <>

                    {desktopVersion
                        ?
                        <Box component={Styles} className="PrimaryNewsSection primary-news-section">
                            <PrimaryNews
                                className='primary-news-section__big-news'
                                id={primaryNewsData[0].id}
                                title={primaryNewsData[0].title}
                                text={primaryNewsData[0].text}
                                views={primaryNewsData[0].views}
                                comments={primaryNewsData[0].comments}
                                image={primaryNewsData[0].image}

                            />

                            <Box className='primary-news-section__small-news-container' component={'section'}>

                                {primaryNewsData.slice(1, 3).map(primaryNewsDataItem => (

                                    <PrimaryNews

                                        id={primaryNewsDataItem.id}
                                        title={primaryNewsDataItem.title}
                                        text={primaryNewsDataItem.text}
                                        views={primaryNewsDataItem.views}
                                        comments={primaryNewsDataItem.comments}
                                        image={primaryNewsDataItem.image}

                                    />

                                ))}

                            </Box>

                        </Box>
                        :
                        <Slider>
                            {primaryNewsData.map(primaryNewsDataItem => (

                                <SwiperSlide>

                                    <PrimaryNews

                                        id={primaryNewsDataItem.id}
                                        className='primary-news-section__slider-news'
                                        title={primaryNewsDataItem.title}
                                        text={primaryNewsDataItem.text}
                                        views={primaryNewsDataItem.views}
                                        comments={primaryNewsDataItem.comments}
                                        image={primaryNewsDataItem.image}

                                    />

                                </SwiperSlide>

                            ))}

                        </Slider>

                    }
                </>
            : <h2>Loading...</h2>}
        </>
    )
}
export default PrimaryNewsSection