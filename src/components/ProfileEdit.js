import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

function actualizarPerfil(){

    //Insert code
    
    ReactDOM.render(<Main></Main>,document.getElementById('root'))
}

function ProfileEdit(){

    return(

        <div className="row">

            <div className="col-sm-4 offset-4">
                <h1>Edit Profile</h1>
                <br></br>
                <form>
                    <div class="form-group">
                        <label for="inputImage">Profile Image </label>
                        <input type="file" class="form-control" id="inputImage" accept="image/*"></input>
                    </div>
    
                    <div class="form-group">
                        <label for="inputDescripcion">Add a description to your profile</label>
                        <textarea class="form-control" id="inputDescripcion" rows="3" maxlength="200" style={{resize: "none"}}></textarea>
                    </div>
                    <div class="form-group">
                        <button className="btn btn-primary btn-md" onClick={actualizarPerfil}>Update</button>
                    </div>
                </form>
            </div>
        </div>
        )

}

export default ProfileEdit 