import {
    Box, Button,
    styled,
    useTheme

} from "@mui/material"

function usePrimaryButtonStyles() {

    const theme = useTheme()

    return {

        PrimaryButton: styled(Button)({
            padding: '2%',
            background: '#4F9CF9',
            "fontFamily": "Inter",
            "fontSize": "18px",
            "fontWeight": "500",
            "lineHeight": "23px",
            "letterSpacing": "-0.02em",
            "textAlign": "left",
            minWidth: '0',
        })
    }
}
export default usePrimaryButtonStyles