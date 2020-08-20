import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Insignia from '../components/Insignia.jsx'
import LogoHeader from '../images/LOGOPOLI.png'
import '../components/styles/insigniaNueva.css'
import InsigniaFormulario from '../components/InsigniaFormulario.jsx'

class InsigniaNueva extends React.Component{
    state={
        form: {
            firstName:'',
            lastName:'',
            email:'',
            ocupacion:'',
            username:''
                }
    }
    handleChange = e =>{
        const nextFormulario = this.state.form
        nextFormulario [e.target.name]= e.target.value
        this.setState({
            form:nextFormulario,
        })
    }


    render(){
        return(
            <div>
            <Navbar/>
            <div className='hero'>
                <img className='img-fluid' src={LogoHeader}/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Insignia 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            ocupacion={this.state.form.ocupacion}
                            username={this.state.form.username}
                        />
                    </div>
                    <div className='col-6'>
                        <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form}/>
                    </div>
                </div>
            </div>

            
            </div>
        )
    }
}
export default InsigniaNueva;