import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import HabitsPage from "./components/pages/HabitsPage";
import TodayPage from "./components/pages/TodayPage";
import HistoryPage from "./components/pages/HistoryPage";

export default function App() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(0)

    return (
        <TokenContext.Provider value={{ setToken, token }}>
            <UserContext.Provider value={{ user, setUser, progress, setProgress}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="cadastro" element={<RegisterPage />} />
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route path="/hoje" element={<TodayPage />} />
                        <Route path="/historico" element={<HistoryPage />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </TokenContext.Provider>
    )
}