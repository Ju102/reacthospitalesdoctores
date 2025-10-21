import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

class CreateHospital extends Component {

    state = {
        mensaje: ""
    }

    url = Global.apiHospitales;

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (event) => {
        event.preventDefault();

        let request = "webresources/hospitales/post";

        let id = parseInt(this.cajaId.current.value);
        let camas = parseInt(this.cajaCamas.current.value);

        let hospital = {
            idhospital: id,
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: camas
        }

        axios.post(this.url + request, hospital).then(response => {
            this.setState({
                mensaje: `¡Hospital ${hospital.idhospital} insertado con éxito!`
            });
            console.log("Hospital insertado con exito!");
        });
        window.location.href="/";
    }

    render() {
        return (
            <div className='m-4'>

                <h2 className='mb-5'>Crear Hospital</h2>
                <form className='w-50 bg-primary p-5 rounded-2' onSubmit={this.insertHospital}>
                    <div className='mb-3'>
                        <label className='form-label'>ID</label>
                        <input className='form-control' type='text' ref={this.cajaId} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input className='form-control' type='text' ref={this.cajaNombre} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Dirección</label>
                        <input className='form-control' type='text' ref={this.cajaDireccion} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Teléfono</label>
                        <input className='form-control' type='text' ref={this.cajaTelefono} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Camas</label>
                        <input className='form-control' type='text' ref={this.cajaCamas} />
                    </div>
                    <button className='btn btn-success w-50'>Enviar</button>
                </form>

                {
                    this.state.mensaje != "" &&
                    <span>
                        {this.state.mensaje}
                    </span>
                }
            </div >
        )
    }
}

export default CreateHospital;