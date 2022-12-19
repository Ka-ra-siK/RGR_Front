import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './app.css'
import {ClientPage} from "./component/client/ClientPage";
import { Header } from './component/Header'
import {MasterPage} from "./component/masters/MasterPage";
import {MaterialsPage} from "./component/materials/MaterialsPage";
import {MovingInformationPage} from "./component/moving_information/MovingInformationPage";
import {OrderServicePage} from "./component/order_service/OrderServicePage";
import {StaffPage} from "./component/staff/StaffPage";
import {SpecializationPage} from "./component/specialization/SpecializationPage";
export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/clients" element={<ClientPage/>} />
                    <Route path="/masters" element={<MasterPage/>} />
                    <Route path="/materials" element={<MaterialsPage/>} />
                    <Route path="/moving_information" element={<MovingInformationPage/>} />
                    <Route path="/services" element={<OrderServicePage/>} />
                    <Route path="/staff" element={<StaffPage/>} />
                    <Route path="/specializations" element={<SpecializationPage/>} />
                </Routes>
        </BrowserRouter>
    )
}
