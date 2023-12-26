import usePrimaryButtonStyles from './PrimaryButton.style'
import {ReactChild, FC, ReactNode} from 'react'
import {ReactComponent as Arrow} from '@/svg/arrow.svg'

const {log} = console

interface PrimaryButtonProps {

    onClick: (event: any) => void,
    children: ReactChild | ReactNode,

}

const PrimaryButton: FC<PrimaryButtonProps> = ({children, onClick}) => {
    const S = usePrimaryButtonStyles()

    return (
        <S.PrimaryButton onClick={onClick} data-cursor-pointer variant="contained" className="PrimaryButton" endIcon={<Arrow/>}>
            {children}
        </S.PrimaryButton>
    )
}
export default PrimaryButton