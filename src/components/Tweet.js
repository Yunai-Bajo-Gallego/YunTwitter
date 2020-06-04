import React from 'react'
import ReactDOM from 'react-dom'

import '../css/tweet.css'
import image from '../profile.png'
function Tweet(){
    
    return(
                    
        <div className="tweet" name="tweet">
            <div className="row">
                <div className="col-md-2">
                    <img src={image} width="50px" height="50px" borderRadius="50%"></img>
                </div>
                <div className="col-md-4">
                    <h5>nombreUsuario</h5>
                </div>
                {/* <div className="col-md-4">
                    <span>*</span>
                    <span>+</span>
                </div> */}
                <div className="col-md-2">
                    04/06/2020
                </div>
            </div>
            <div className="row">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ornare velit. Maecenas id dolor id nulla feugiat elementum eget et mi. Pellentesque aliquet lorem nec facilisis maximus. Nam finibus interdum     
                </p>
            </div>
        </div>

    )
}



export default Tweet