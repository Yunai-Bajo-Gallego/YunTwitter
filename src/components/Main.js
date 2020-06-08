import React from 'react'
import ReactDOM from 'react-dom'

import Tweet from './Tweet'
import Profile from "./Profile"
import FollowUsers from './FollowUsers'
function Main(){
    
    return(
        <div>
            <div className="row">
                <div className="col-md-6 offset-3">     
                    <Profile/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2" style={{paddingLeft: "40px"}}>
                    <FollowUsers></FollowUsers>
                </div>             

                <div className="col-md-6 offset-1" name="tweets">
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