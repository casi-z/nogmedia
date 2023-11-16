import useSecondaryNewsStyles from './SecondaryNews.style'
import { ReactChild, FC } from 'react'
import { Box, Button, Skeleton } from '@mui/material'
import { INews, ITag } from '@/types/types'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import Text from '../Text/Text'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import NewsBackground from '@/img/news-background.png'
import { ReactComponent as ViewsIcon } from '@/svg/views.svg'
import { ReactComponent as CommentsIcon } from '@/svg/comments.svg'

const { log } = console

interface SecondaryNewsProps extends INews {

    tags: ITag[],
    skeleton?: boolean,

}

const SecondaryNews: FC<SecondaryNewsProps> =
    ({ title, id, text, views, comments, tags, image, skeleton }) => {
        const Styles = useSecondaryNewsStyles()

        return (<>

            {!skeleton
                ?

                <Button href={`/article#${id}`} component={Styles} className="SecondaryNews secondary-news">

                    <img src={image || NewsBackground} alt="title" />

                    <Box className='secondary-news__content'>

                        <PrimaryHeader>{title}</PrimaryHeader>

                        <Text>{text?.slice(0, 110)}...</Text>

                        <Box className='secondary-news__data'>

                            <span><ViewsIcon className='secondary-news__icon' />{views}</span>
                            <span><CommentsIcon className='secondary-news__icon' />{comments}</span>

                        </Box>

                        <Box className='secondary-news__tags'>

                            {tags.map(tag => (

                                <SecondaryButton href={tag.href}>{tag.name}</SecondaryButton>

                            ))}

                        </Box>
                    </Box>

                </Button>
                :
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
            }
        </>)
    }
export default SecondaryNews