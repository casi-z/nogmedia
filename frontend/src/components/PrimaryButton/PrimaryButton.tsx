import usePrimaryButtonStyles from './PrimaryButton.style'
import { ReactChild, FC } from 'react'
import {ReactComponent as Arrow} from '@/svg/arrow.svg'

const { log } = console

interface PrimaryButtonProps {
   
   children: ReactChild,
   
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children }) => {
const S = usePrimaryButtonStyles()

    return(
      <S.PrimaryButton data-cursor-pointer variant="contained" className="PrimaryButton" endIcon={<Arrow/>}>
          {children}
      </S.PrimaryButton>
    )
}
export default PrimaryButton