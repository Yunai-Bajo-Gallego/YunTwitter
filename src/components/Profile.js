import React from 'react'
import ReactDOM from 'react-dom'

import '../css/profile.css'

import image from '../profile.png'
import download from '../download.jpg'

import ProfileEdit from "./ProfileEdit"

function Follow(){


}

class Profile extends React.Component{


    constructor(){
        super()
        this.state = {
            following: false,
            textFollow: "Follow"
        }
        this.follow = this.follow.bind(this)
    }

    follow(){

        console.log(this.state)
        this.setState(prevState => {
            return({
                following: !prevState.following,
                textFollow: !prevState.following? "Unfollow" : "Follow"
            })
        })

    }

    editarPerfil(){
        ReactDOM.render(<ProfileEdit/>,document.getElementById('root'))
    }
    
    render(){
        
        //Esta info creo que la debería pasar el padre y no hacerlo en cada render
        // var textButton = "Follow"
        // var onClickAction = "follow"
        // // if(usuarioSession == profile_IdUser){
        // //     textButton = "Edit Profile"
        // //     onClickAction = "EditProfile"
        // // }
    
       
        
       return(
   
        // style={{backgroundImage: "url(" + download + ")", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}
           <div className="row profile" id="profile" name="profile" >
   
                   {/* <div name="cabecera"> */}
                       <div className="col-sm-8">
                           <div id="divImage">
                               <img src={image} name="userImage" width="100px" height="100px" borderRadius="50%"></img>
                           </div>
                           <div id="divUsuario">
                               <b>Nombre Usuario</b>
                           </div>
                           <div id="divUsuario">
                               @IdUsuario
                           </div>
                       </div>
                       <div className="col-sm-4">
                            <button className="btn btn-primary btn-md" onClick={this.follow} textFollow={this.state.textFollow}>{this.state.textFollow}</button>
                            <button className="btn btn-primary btn-md" onClick={this.editarPerfil}>Edit Profile</button>
                           {/* <botonPerfil textFollow={this.state.textFollow}></botonPerfil> */}
                       </div>
                   {/* </div> */}
   
                   <div className="row">
                       <p name="descripcion" style={{ marginTop: "20px" }}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ornare velit. Maecenas id dolor id nulla feugiat elementum eget et mi. Pellentesque aliquet lorem nec facilisis maximus. Nam finibus interdum     
                       </p>
                   </div>
   
           </div>
       )

   }

}

export default Profile 