import usePrimaryNewsSectionStyles from './PrimaryNewsSection.style'
import {ReactChild, FC, useEffect, useState} from 'react'
import {Box, useMediaQuery} from '@mui/material'
import PrimaryNews from '@/components/PrimaryNews/PrimaryNews'
import {Slider} from "@/layouts/Slider/Slider";
import {SwiperSlide} from 'swiper/react';
import NewsAPI from "@/api/news/news";
import {INews} from "@/types/types";
import axios from "axios";
import PrimaryNewsSkeleton from "@/components/PrimaryNews/PrimaryNewsSkeleton";

const {log} = console

interface PrimaryNewsSectionProps {

    children?: ReactChild,

}


const news = new NewsAPI()

let primaryNewsDataCopy: INews[] = []

const PrimaryNewsSection: FC<PrimaryNewsSectionProps> = ({children}) => {

    const [primaryNewsData, setPrimaryNewsData] = useState<INews[]>([])

    async function loadPrimaryNews() {

        for (let i = 1; i < 4; i++) {

            await news.getByNumber(i)
                .then(data => {

                    return primaryNewsDataCopy.push(data)
                })


        }

        setPrimaryNewsData(primaryNewsDataCopy)
    }

    useEffect(() => {

        loadPrimaryNews()

    }, [])

    const Styles = usePrimaryNewsSectionStyles()

    const desktopVersion = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

    return (


        <>

            {desktopVersion
                ?
                <Box component={Styles} className="PrimaryNewsSection primary-news-section">

                    {primaryNewsData.length > 0
                        ?
                            <PrimaryNews
                                className='primary-news-section__big-news'
                                id={primaryNewsData[0].id}
                                title={primaryNewsData[0].title}
                                text={primaryNewsData[0].text}
                                views={primaryNewsData[0].views}
                                comments={primaryNewsData[0].comments}
                                image={primaryNewsData[0].image}

                            />
                        :
                            <PrimaryNewsSkeleton/>
                    }

                    <Box className='primary-news-section__small-news-container' component={'section'}>

                        {primaryNewsData.length > 0

                            ?
                                primaryNewsData.slice(1, 3).map(primaryNewsDataItem => (

                                    <PrimaryNews
                                        key={primaryNewsDataItem.id}
                                        id={primaryNewsDataItem.id}
                                        title={primaryNewsDataItem.title}
                                        text={primaryNewsDataItem.text}
                                        views={primaryNewsDataItem.views}
                                        comments={primaryNewsDataItem.comments}
                                        image={primaryNewsDataItem.image}

                                    />

                                ))

                            :
                                Array.from({length: 2}).map(() => (
                                    <PrimaryNewsSkeleton/>

                                ))

                        }

                    </Box>

                </Box>
                :
                <Slider>
                    {primaryNewsData.length > 0
                        ?
                            primaryNewsData.map(primaryNewsDataItem => (

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

                            ))
                        :
                            Array.from({length: 3}).map(() => (
                                <SwiperSlide>
                                    <PrimaryNewsSkeleton/>
                                </SwiperSlide>
                            ))

                    }

                </Slider>

            }
        </>

    )
}
export default PrimaryNewsSection