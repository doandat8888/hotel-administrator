import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ReservationForecast from '../pages/ReservationForecast';
import PeriodDetail from '../pages/PeriodDetail';
import consts from '../consts';

const RoutesApp = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservationforecast" element={<ReservationForecast />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/perioddetail' element={<PeriodDetail />}/>
        </Routes>
    )
}

export default RoutesApp;