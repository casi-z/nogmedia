import {GlobalContext} from "./context";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./pages/Main/Main";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
function App() {

    return (
        <GlobalContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/article" element={<ArticlePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}

export default App
