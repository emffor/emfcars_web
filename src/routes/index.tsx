import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { ListBrands } from '../pages/Brands';
import { CreateBrand } from '../pages/Brands/CreateBrand';
import { EditBrand } from '../pages/Brands/EditBrand';
import { ListCars } from '../pages/Cars';
import { CreateCar } from '../pages/Cars/CreateCar';
import { EditCar } from '../pages/Cars/EditCar';
import { FilterBrand } from '../pages/Cars/FilterBrand';
import { FilterTransmission } from '../pages/Cars/FilterTransmission';

import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home'
import { ListTransmissions } from '../pages/Transmission';
import { CreateTransmission } from '../pages/Transmission/CreateTransmission';
import { EditTransmission } from '../pages/Transmission/EditTransmission';

export function AppRoutes() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/carros" element={<ListCars />} />
            <Route path="/carros/cadastrar-carro" element={<CreateCar />} />
            <Route path="/carros/editar-carro" element={<EditCar />} />
            <Route path="/carros/editar-carro/:id" element={<EditCar />} />
            <Route path="/carros/filtrar-marcas-carros" element={<FilterBrand />} />
            <Route path="/carros/filtrar-cambio-carros" element={<FilterTransmission />} />
            <Route path="/marcas" element={<ListBrands />} />
            <Route path="/marcas/cadastrar-marca" element={<CreateBrand />} />
            <Route path="/marcas/editar-marca" element={<EditBrand />} />
            <Route path="/marcas/editar-marca/:id" element={<EditBrand />} />
            <Route path="/cambios" element={<ListTransmissions />} />
            <Route path="/cambios/cadastrar-cambio" element={<CreateTransmission />} />
            <Route path="/cambios/editar-cambio" element={<EditTransmission />} />
            <Route path="/cambios/editar-cambio/:id" element={<EditTransmission />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
