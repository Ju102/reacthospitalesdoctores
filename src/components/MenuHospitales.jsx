import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export class MenuHospitales extends Component {

    url = Global.apiHospitales;

    state = {
        hospitales: []
    }

    loadHospitales = () => {
        let request = "webresources/hospitales";

        axios.get(this.url + request).then(response => {
            console.log("Leyendo hospitales...");
            this.setState({
                hospitales: response.data
            });
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }



    render() {

        return (
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid bg-primary">
                    <NavLink className="navbar-brand" to="/">API</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hospitales
                                </NavLink>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.hospitales.map((hospital, index) => {
                                            return (<li key={index}>
                                                <NavLink className="dropdown-item" to={"doctores/" + hospital.idhospital}>{hospital.nombre}</NavLink>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/createhospital">Crear Hospital</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/hospitales">Hospitales</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MenuHospitales;