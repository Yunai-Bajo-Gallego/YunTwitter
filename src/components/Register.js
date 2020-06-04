import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'

class Register extends React.Component{

    constructor(){
      super()
      this.state = {}
      this.handleInput = this.handleInput.bind(this)
      this.RegistrarUsuario = this.RegistrarUsuario(this)
      this.irLogin = this.irLogin.bind(this)
    }

    irLogin(){
      ReactDOM.render(<Login estado={this.state}/>,document.getElementById('root'))
    }

    RegistrarUsuario(){
        
    }

    handleInput(event){
      const {name, type, value, checked} = event.target
      var valor = type=="checkbox" ? checked : value
      this.setState({
          [name]: valor
      })
    }

    render(){
        return(

            <div className="row">
                  <div className="col-lg-6 offset-3">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account</h1>
                      </div>
                      <form className="user">
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0 offset-3">
                            <input 
                              type="text" 
                              className="form-control form-control-user" 
                              id="inputNombreUsuario" 
                              name="nombreUsuario"
                              placeholder="Username" 
                              onChange={this.handleInput}></input>
                          </div>
                        </div>
                        <div className="form-group">
                          <input 
                            type="email" 
                            className="form-control form-control-user" 
                            id="inputMail" 
                            name="email"
                            placeholder="Email Address" 
                            onChange={this.handleInput}></input>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input 
                              type="password" 
                              className="form-control form-control-user" 
                              id="inputPassword" 
                              name="password"
                              placeholder="Password" 
                              onChange={this.handleInput}></input>
                          </div>
                          <div className="col-sm-6">
                            <input 
                              type="password" 
                              className="form-control form-control-user" 
                              id="inputRepeatPassword" 
                              name="repeatPassword"
                              placeholder="Repeat Password" 
                              onChange={this.handleInput}></input>
                          </div>
                        </div>
                        <button onClick={this.RegistrarUsuario} className="btn btn-primary btn-user btn-block">
                          Register Account
                        </button>
                        <hr></hr>
                        
                      </form>
                      <hr></hr>
                      {/* <div className="text-center">
                        <a className="small" href="">Forgot Password?</a>
                      </div> */}
                      <div className="text-center">
                        <button className="small" onClick={this.irLogin}>Already have an account? Login!</button>
                      </div>
                    </div>
                  </div>
                </div>
        )

    }

}

export default Register


