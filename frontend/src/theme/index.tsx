import React, { FC, useEffect, useState } from 'react';
import { CssBaseline } from "@mui/material"
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { useMemo } from "react"
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    


    //Создаю тему

	const theme = useMemo(
		() => createTheme({
            palette: {
                primary:{
                    main: '#5B41F5'
                },
                text: {
                    primary: '#000',
                    secondary: '#fff',
                    disabled: 'rgba(255, 255, 255, 0.81)',
                    //disabledOpacity: '#fff',
                },
                secondary: {
                    light: '#F49137',
                    main: '#EBEBEB',
                    dark: '#5B41F5',
                    
                    
                }
            },
            
		}), []
    )
    

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyle />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
    );
};

export default ThemeProvider;