import React from 'react'
import './Details.css'

export default function Details(props){

    return(
        <div className="col-sm-3">
            <div className="container">
              <h4 className = "bg-secondary text-white p-2 rounded">Details</h4>
              <ul className="list-group bg-light">
                  <div className="details-container border">
                  <li className="list-unstyled">Total Sentences</li><span className = "badge bg-secondary">{props.dispData.split(".").length-1}</span>
                  </div>
                  <div className="details-container border">
                  <li className="list-unstyled">Read time</li><span className = "badge bg-secondary">{(0.008*props.dispData.split(" ").length).toFixed(3)} minutes</span>
                  </div>
                  <div className="details-container border">
                  <li className="list-unstyled">Words</li><span className = "badge bg-secondary">{props.dispData.split(" ").length-1}</span>
                  </div>
                  <div className="details-container border">
                  <li className="list-unstyled">Characters</li><span className = "badge bg-secondary">{props.dispData.length}</span>

                  </div>
                  
                  <div className="details-container border">
                  <li className="list-unstyled">Speaking Time</li><span className="badge bg-secondary">{(props.dispData.split("").length/180*10).toFixed(1)} sec</span>

                  </div>
              </ul>
              
            </div>
            
        </div>
    )
}

