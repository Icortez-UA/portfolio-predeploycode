import React from 'react';
import Janelogo from '../../assets/images/janelogo.jpg'

function Project(props){



    return(
            <div className= "row">
                <div className="col-md-4 m-3">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">{props.projectTitle}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{props.projectSubtitle}</h6>
                          <p className="card-text">{props.projectText}
                          </p>
                          <a href= {props.projectLink} className= "btn btn-info">Github project repo</a>
                        </div>
                    </div>
                </div>
                <div className= "col-md-6 m-3">
    <a href={props.projectUrl}><img className= "img-fluid shadow p-3 mb-4 bg-white rounded" src={props.code} alt= {props.altNm}></img></a>
                    <div className="textbox mr-3">
    <h4>{props.projectName}</h4>
                    </div>
                </div>
            </div>
    )
}

export default Project;