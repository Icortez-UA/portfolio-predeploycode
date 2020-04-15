import React from 'react'

function Card({props,children}){


    return(<div className= "col-md-6 m-3">
        {children}
                    <div className="textbox mr-3">
    <h4>{props.projectName}</h4>
                    </div>
                </div>
    )
}