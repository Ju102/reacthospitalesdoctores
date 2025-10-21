import { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

class DetallesDoctor extends Component {

    urlDoctor = Global.apiDoctores;

    state = {
        doctor: null
    }

    loadDoctorById = () => {
        var request = "api/Doctores/" + this.props.idDoctor;

        axios.get(this.urlDoctor + request).then((response) => {
            console.log("Leyendo información del doctor...");
            this.setState({
                doctor: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctorById();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idDoctor !== this.props.idDoctor) {
            console.log("Cambiando de ID de Doctor");
            this.loadDoctorById();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.doctor !== null &&
                    <table className='table table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Apellido</th>
                                <th>Especialidad</th>
                                <th>Salario</th>
                                <th>ID Hospital</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.doctor.idDoctor}</td>
                                <td>{this.state.doctor.apellido}</td>
                                <td>{this.state.doctor.especialidad}</td>
                                <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.state.doctor.salario)}</td>
                                <td>{this.state.doctor.idHospital}</td>

                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default DetallesDoctor;