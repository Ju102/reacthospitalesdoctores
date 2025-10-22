import { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuHospitales from './components/MenuHospitales'
import Home from './components/Home'
import Doctores from './components/Doctores'
import CreateHospital from './components/CreateHospital'
import Hospitales from './components/Hospitales'

class Router extends Component {
    render() {

        function DoctoresElement(props) {
            let { idHospital } = useParams();
            return <Doctores idHospital={idHospital}></Doctores>
        }

        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctores/:idHospital" element={<DoctoresElement />} />
                    <Route path="/createhospital" element={<CreateHospital />} />
                    <Route path="/hospitales" element={<Hospitales />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;