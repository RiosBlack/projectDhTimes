import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import TimesPage from './pages/times';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/times" element={<TimesPage />} />
            </Routes>
        </BrowserRouter>
    );
}
