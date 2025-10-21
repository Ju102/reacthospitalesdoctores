import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

class Doctores extends Component {

  url = Global.apiDoctores;

  state = {
    doctores: []
  }

  loadDoctoresByIdHospital = () => {
    var request = "api/Doctores/DoctoresHospital/" + this.props.idHospital;

    axios.get(this.url + request).then((response) => {
      console.log("Leyendo doctores del hospital " + this.props.idHospital + "...");
      this.setState({
        doctores: response.data
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
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.doctores.map((doctor,index) => {
                return (
                  <tr key={index}>
                    <td>{doctor.idDoctor}</td>
                    <td>{doctor.apellido}</td>
                    <td>{doctor.especialidad}</td>
                    <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(doctor.salario)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Doctores;