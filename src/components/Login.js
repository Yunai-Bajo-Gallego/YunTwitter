import React from 'react'
import ReactDOM from 'react-dom'

import Register from './Register'
import Main from './Main'
import '../index.css';

class Login extends React.Component{

    constructor(props){
        super()
        var datosLogin;
        if(props.estado){//Caso datos cacheados o viene desde 'registro'
            this.state = {
                checkRemember: true,
                nombreUsuario: props.estado.nombreUsuario,
                email: props.estado.email,
                password: props.estado.password,
            }
        }
        else{
            this.state = {
                checkRemember: true, 
            }
        }

        this.recordarDatos = this.recordarDatos.bind(this)
        this.irRegistro = this.irRegistro.bind(this)
        this.login = this.login.bind(this)
    }

    recordarDatos(){

        this.setState(prevState => {
            
            return({
                checkRemember: !prevState.checkRemember,
            })
        })

        console.log(this.state.checkRemember)
    }

    irRegistro(){
        ReactDOM.render(<Register/>,document.getElementById('root'))
    }

    irPantallaPrincipal(){
        ReactDOM.render(<Main/>,document.getElementById('root'))
    }

    login(){
        var datosCorrectos = true //comprobarDatos

        if(datosCorrectos){
            this.irPantallaPrincipal()
        }
    }

    render(){


        return(

            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row offset-3">
                                <div className="col-md-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">TwitterYun</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    className="form-control form-control-user" 
                                                    id="inputUser" 
                                                    name="email"
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Enter Email Address or username..."
                                                    value={this.state.email != "" ? this.state.email : this.state.nombreUsuario}
                                                    >
                                                    
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="password" 
                                                    className="form-control form-control-user" 
                                                    id="inputPass" 
                                                    name="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    >
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input" 
                                                        id="checkRemember" 
                                                        onChange={this.recordarDatos}></input>
                                                    <label className="custom-control-label" htmlFor="checkRemember">Remember Me</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-user btn-block" onClick={this.login}>
                                                Login
                                            </button>
                                        </form>
                                        <hr></hr>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        {/* <div className="text-center">
                                            <button className="small" href={'./src/pages/register.html'}>Create an Account!</button>
                                        </div> */}
                                        <div className="text-center">
                                            <button className="small btn btnPrincipal"  onClick={this.irRegistro}>Create an Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}


export default Login