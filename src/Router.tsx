import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusPage } from '@/pages';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BusPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
