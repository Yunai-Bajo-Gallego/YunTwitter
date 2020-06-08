
import React from 'react'
import ReactDOM from 'react-dom'
import image from '../profile.png'
import Main from './Main'

function irPerfil(){
    //ReactDOM.render(<Main></Main>,document.getElementById('root'))
}

function FollowUsers(){

    return(
        <div id="followUsers" style={{backgroundColor: "#EEEEFF"}}>
            <ul className="list-group">                
                
                {/* <User></User> */}

                <div style={{margin: "5px"}}>
                    <div id="divImage">
                        <img  src={image} name="userImage" width="40px" height="40px" borderRadius="50%"></img>
                        <button className="btn btn-primary btn-sm" style={{marginLeft: "5px"}}>Follow</button>
                    </div>
                    <div id="divUsuario">
                        <div style={{fontSize: "12px"}}>
                            <a href={irPerfil()}>Nombre Usuario</a>
                        </div>
                        <div style={{fontSize: "12px"}}>
                            <span>@IdUsuario</span>
                        </div>
                    </div>
                </div>


                <div style={{margin: "5px"}}>
                    <div id="divImage">
                        <img  src={image} name="userImage" width="40px" height="40px" borderRadius="50%"></img>
                        <button className="btn btn-primary btn-sm" style={{marginLeft: "5px"}}>Follow</button>
                    </div>
                    <div id="divUsuario">
                        <div style={{fontSize: "12px"}}>
                            <a href={irPerfil()}>Nombre Usuario</a>
                        </div>
                        <div style={{fontSize: "12px"}}>
                            <span>@IdUsuario</span>
                        </div>
                    </div>
                </div>

            </ul>
        </div>
    )

}

export default FollowUsers