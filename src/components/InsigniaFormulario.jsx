import React from 'react'


class InsigniaFormulario extends React.Component{
    /* state={
        firstName:'Derly'
    }; */

 //EVENTO DEL INPUT
//  handleChange = (e) =>{
//    /*   console.log({
//          name: e.target.name,
//          value: e.target.value
//      }); */
//      this.setState({[e.target.name]: e.target.value})
//  }

//EVENTO BOTÓN
 handleClick = (e)=>{
     console.log('Botón presionado')
 }

 //EVENTO FORMULARIO
 handleSubmit = (e)=>{
    e.preventDefault();
    console.log('Submit')
    console.log(this.state)
 }

 render(){
     return(
        <div>
            <h1>Formulario estudiante</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label> Nombre:</label>
                    <input onChange={this.props.onChange} className='form-control' name='firstName'
                        value={this.props.formValues.firstName}
                    />

                    <label> Apellido:</label>
                    <input onChange={this.props.onChange} className='form-control' name='lastName'
                                                value={this.props.formValues.lastName}

                    />

                    <label> Email:</label>
                    <input onChange={this.props.onChange} className='form-control' name='email' type='email'
                     value={this.props.formValues.email}

                    />

                    <label> Ocupación:</label>
                    <input onChange={this.props.onChange} className='form-control' name='ocupacion'                                                 
                    value={this.props.formValues.ocupacion}
/>

                    <label> Usuario de git:</label>
                    <input onChange={this.props.onChange} className='form-control' name='username'                                                 
                    value={this.props.formValues.username}
/>

                    <button onClick={this.handleClick} className='btn btn-primary' >Registrar</button>
                </div>
            </form>
        </div>
     )
 }
}

export default InsigniaFormulario ;