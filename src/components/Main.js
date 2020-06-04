import React from 'react'
import ReactDOM from 'react-dom'

import Tweet from './Tweet'
import Profile from "./Profile";

function Main(){
    
    return(
        <div>

            <Profile/>

            <div className="row" name="tweets">
                <div className="col-md-6 offset-3">
                    <ul className="list-group">
                        
                        <Tweet></Tweet>
                        <Tweet></Tweet>

                        {/* <li className="list-group-item">
                            <Tweet></Tweet>
                        </li> */}
                    </ul>
                </div>
            </div>

        </div>



    )
}



export default Main