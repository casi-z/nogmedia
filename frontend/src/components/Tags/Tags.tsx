import useTagsStyles from './Tags.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'

const { log } = console

interface TagsProps {

    children?: ReactChild,

}

const Tags: FC<TagsProps> = ({ children }) => {
    const Styles = useTagsStyles()

    const tags = [
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',
        'Tags',

    ]

    return (
        <Box component={Styles} className="Tags tags">

            <SecondaryHeader>#Тэги</SecondaryHeader>

            <Box className='tags__content'>

                {tags.map(tag => (

                    <SecondaryButton>{tag}</SecondaryButton>

                ))}

            </Box>


        </Box>
    )
}
export default Tags