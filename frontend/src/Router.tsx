import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusPage } from '@/pages';
import { BusArrival } from '@/components/Bus/BusArrival';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<BusPage />} /> */}
                <Route path="/" element={<BusArrival name="name" arrmsg1="arrmsg1" />} />
            </Routes>
        </BrowserRouter>
    );
}
