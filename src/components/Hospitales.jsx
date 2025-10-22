import { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export class Hospitales extends Component {

    url = Global.apiHospitales;

    state = {
        hospitales: []
    }

    loadHospitales = () => {
        var request = "/webresources/hospitales/";

        axios.get(this.url + request).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    render() {
        return (
            <div className='m-4'>
                <h2>Lista de Hospitales</h2>
                {
                    this.state.hospitales.length != 0 &&
                    <table className='table table-hover table-bordered text-center w-75 mx-auto mt-4'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Camas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hospitales.map((hospital, index) => {
                                    return <tr key={index}>
                                        <td>{hospital.idhospital}</td>
                                        <td>{hospital.nombre}</td>
                                        <td>{hospital.direccion}</td>
                                        <td>{hospital.telefono}</td>
                                        <td>{hospital.camas}</td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                }
            </div>
        )
    }
}

export default Hospitales