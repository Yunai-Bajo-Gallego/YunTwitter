import React from 'react'
import ReactDOM from 'react-dom'

import Register from './Register'

class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            checkRemember: true,
        }
        this.recordarDatos = this.recordarDatos.bind(this)
        this.irRegistro = this.irRegistro.bind(this)
        
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
                                                <input type="email" className="form-control form-control-user" id="inputUser" aria-describedby="emailHelp" placeholder="Enter Email Address or username..."></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" id="inputPass" placeholder="Password"></input>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input" 
                                                        id="checkRemember" 
                                                        onChange={this.recordarDatos}></input>
                                                    <label className="custom-control-label" for="checkRemember">Remember Me</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                        </form>
                                        <hr></hr>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <button className="small" href={'./src/pages/register.html'}>Create an Account!</button>
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