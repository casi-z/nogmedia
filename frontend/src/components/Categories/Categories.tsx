import useCategoriesStyles from './Categories.style'
import { ReactChild, FC, useEffect, useState } from 'react'
import { Box, Button, Link, List, ListItem, Skeleton } from '@mui/material'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import CategoriesAPI from '@/api/categories/categories'

const { log } = console

interface CategoriesProps {

    children?: ReactChild,

}

const categoriesAPI = new CategoriesAPI()

const Categories: FC<CategoriesProps> = ({ children }) => {

    const [categoriesData, setCategoriesData] = useState<{ name: string }[]>([])

    const [isLoadingFailed, setIsLoadingFailed] = useState<boolean>(false)

    async function getCategoriesData() {



        const response = await categoriesAPI.getCategories()
        if (response.type = 'error') {
            console.error(response.error)
            setIsLoadingFailed(true)
            return
        }

        setCategoriesData(response.data)

    }

    useEffect(() => {
        getCategoriesData()
        log(categoriesData)
    }, [])


    const Styles = useCategoriesStyles()

    return (<>
        {!isLoadingFailed
            ?
            <List
                component={Styles}
                className="Categories categories"
                subheader={
                    <SecondaryHeader>Category</SecondaryHeader>
                }
            >

                {categoriesData.length > 0
                    ? categoriesData.map(category => (

                        <ListItem disablePadding>
                            <Button className='categories__item'>{category.name}</Button>
                        </ListItem>

                    ))
                    : Array.from({ length: 3 }).map(() => (
                        <Skeleton width={'100%'}>
                            <ListItem>
                                <Button className='categories__item'>Lorem ipsum dolor sit.</Button>
                            </ListItem>
                        </Skeleton>
                    ))
                }




            </List >
            : <List
                component={Styles}
                className="Categories categories"
                subheader={
                    <SecondaryHeader>Category</SecondaryHeader>
                }
            >
                <ListItem disablePadding>
                    Ошибка загрузки
                </ListItem>
            </List>
        }
    </>)
}
export default Categories