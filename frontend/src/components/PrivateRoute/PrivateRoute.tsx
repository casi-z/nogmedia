import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'
import { Navigate } from 'react-router-dom'

const { log } = console

interface PrivateRouteProps {
   
   children: ReactChild,
   
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {


    return(
      <>
        {
          localStorage.getItem('token') === '10'
            ? children
            : <Navigate to='/user'/>

        }
      </>
    )
}
export default PrivateRoute