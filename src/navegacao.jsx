import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio';



export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
               
            </Routes>
        </BrowserRouter>
    )
}

