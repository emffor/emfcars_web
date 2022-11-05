import { Routes, Route, Navigate } from 'react-router-dom'
import { ListBrands } from '../pages/Brands';
import { CreateBrand } from '../pages/Brands/CreateBrand';
import { ListCars } from '../pages/Cars';
import { CreateCar } from '../pages/Cars/CreateCar';

import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home'
import { ListTransmissions } from '../pages/Transmission';
import { CreateTransmission } from '../pages/Transmission/CreateTransmission';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/carros" element={<ListCars />} />
            <Route path="/cadastrar-carro" element={<CreateCar />} />
            <Route path="/marcas" element={<ListBrands />} />
            <Route path="/cadastrar-marca" element={<CreateBrand />} />
            <Route path="/cambios" element={<ListTransmissions />} />
            <Route path="/cadastrar-cambio" element={<CreateTransmission />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
