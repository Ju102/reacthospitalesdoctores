import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';

class Doctores extends Component {

  url = Global.apiDoctores;

  state = {
    doctores: [],
    idDoctor: 0
  }

  loadDoctoresByIdHospital = () => {
    var request = "api/Doctores/DoctoresHospital/" + this.props.idHospital;

    axios.get(this.url + request).then((response) => {
      console.log("Leyendo doctores del hospital " + this.props.idHospital + "...");
      this.setState({
        doctores: response.data,
        idDoctor: 0
      })
    })
  }

  componentDidMount = () => {
    this.loadDoctoresByIdHospital();
  }

  componentDidUpdate = (oldProps) => {
    if (oldProps.idHospital !== this.props.idHospital) {
      console.log("Cambiando de ID");
      this.loadDoctoresByIdHospital();
    }
  }

  render() {
    return (
      <div className='m-4'>
        <h2 className='mb-5'>Lista de Doctores (Hospital ID {this.props.idHospital})</h2>
        <table className='table table-hover table-bordered text-center w-75 mx-auto'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.doctores.map((doctor, index) => {
                return (
                  <tr key={index}>
                    <td>{doctor.idDoctor}</td>
                    <td>{doctor.apellido}</td>
                    <td>
                      <button className='btn btn-warning' onClick={() => {
                        this.setState({
                          idDoctor: doctor.idDoctor
                        })
                      }}>Detalles</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <hr className='m-4'></hr>
        {
          this.state.idDoctor !== 0 &&
          <DetallesDoctor idDoctor={this.state.idDoctor}></DetallesDoctor>
        }
      </div>
    )
  }
}

export default Doctores;