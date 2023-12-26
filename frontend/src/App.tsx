import {GlobalContext} from "./context";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Main from "./pages/Main/Main";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import {useEffect, useState} from "react";
import viewsHistory from "@/utils/ViewsHistory";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {

    useEffect(() => {
        //Создаём объект для хранения истории просмотров в localStorage
        viewsHistory.init()
        localStorage.setItem('token', '10')

    }, [])


    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([
        'Новости',
    ]);
    return (
        <GlobalContext.Provider value={{breadcrumbs, setBreadcrumbs}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/article" element={<ArticlePage admin={false}/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>

                    {/*Cтраница ошибки 404, 502 ...*/}
                    <Route path="/error" element={<ErrorPage/>}/>

                    {/* <Route path="/admin" element={<PrivateRoute><AdminPage/></PrivateRoute>}/> */}
                    {/* TODO: Дописать вход */}
                    {/*<Route path="/article-edit" element={<PrivateRoute><ArticlePage admin/></PrivateRoute>}/>*/}

                    {/* Перекидываю на ошибку 404 при неправильном url */}
                    <Route path="*" element={<Navigate to="/error?code=404"/>}/>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}

export default App
