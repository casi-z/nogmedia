import {ReactChild, FC} from 'react'
import {Box, Button, Skeleton, useTheme} from '@mui/material'
import styled from 'styled-components'
import usePrimaryNewsStyles from "@/components/PrimaryNews/PrimaryNews.style";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import Text from "@/components/Text/Text";
import {ReactComponent as ViewsIcon} from '@/svg/views.svg'
import {ReactComponent as CommentsIcon} from '@/svg/comments.svg'

const {log} = console

interface PrimaryNewsSkeletonProps {

    className?: string
}

const PrimaryNewsSkeleton: FC<PrimaryNewsSkeletonProps> = ({className}) => {


    const Styles = usePrimaryNewsStyles()

    return (

        <Button
            component={Styles}
            className={`PrimaryNews primary-news ${className}`}
        >

            <Box className='primary-news__content'>

                <Skeleton><PrimaryHeader>День народного единства</PrimaryHeader></Skeleton>

                <Skeleton>
                    <Text>
                        4 ноября в России отмечается День народного единства.
                        Праздник был учрежден в 2005 году и с этого момента явля...
                    </Text>
                </Skeleton>

                <Box className='primary-news__data'>
                    <Skeleton><span><ViewsIcon/>12345</span></Skeleton>
                    <Skeleton><span><CommentsIcon/>12345</span></Skeleton>

                </Box>

            </Box>

        </Button>

    )
}
export default PrimaryNewsSkeleton