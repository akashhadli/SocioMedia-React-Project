import { useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/homePage/HomePage';
import LoginPage from 'scenes/loginPage/LoginPage';
import ProfilePage from 'scenes/profilePage/ProfilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { ThemeProvider } from '@emotion/react';

function App() {
	const mode = useSelector((state) => state.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className='app'>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route path='/' element={<loginPage />} />
						<Route path='/home' element={<homePage />} />
						<Route path='/profile/:userId' element={<profilePage />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
