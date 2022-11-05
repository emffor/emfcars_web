import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home'


export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
