import { ReactChild, FC } from 'react'
import {Box, Skeleton, useTheme} from '@mui/material'
import styled from 'styled-components'
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import Text from "@/components/Text/Text";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import useSecondaryNewsStyles from "@/components/SecondaryNews/SecondaryNews.style";
import {ReactComponent as ViewsIcon} from '@/svg/views.svg'
import {ReactComponent as CommentsIcon} from '@/svg/comments.svg'

const { log } = console

interface SecondaryNewsSkeletonProps {
   
   children?: ReactChild,
   
}


const SecondaryNewsSkeleton: FC<SecondaryNewsSkeletonProps> = ({ children }) => {

const theme = useTheme()

const Styles = useSecondaryNewsStyles()
    return(
           <Box component={Styles} className="SecondaryNews secondary-news">
               <Skeleton variant="rectangular" width={'100%'} height={'50%'} />

               <Box className='secondary-news__content'>



                   <Skeleton>
                       <PrimaryHeader>Lorem ipsum dolor, sit amet consectetur adipisicing.</PrimaryHeader>

                   </Skeleton>



                   <Skeleton>
                       <Text>

                           Историю Российского кинематографа принято отсчитывать с 1908 года.<br/> Ровно 115 лет назад, свет увидел первый Рос...


                       </Text>
                   </Skeleton>

                   <Box className='secondary-news__data'>

                       <Skeleton>
                                <span>
                                    <ViewsIcon className='secondary-news__icon' />12345
                                </span>
                       </Skeleton>
                       <Skeleton>
                                <span>
                                    <ViewsIcon className='secondary-news__icon' />12345
                                </span>
                       </Skeleton>


                   </Box>

                   <Box className='secondary-news__tags'>

                       {Array.from({ length: 3 }).map(() => (
                           <Skeleton>
                               <SecondaryButton>Ногинск</SecondaryButton>
                           </Skeleton>
                       ))}

                   </Box>

               </Box>



           </Box>
    )
}
export default SecondaryNewsSkeleton