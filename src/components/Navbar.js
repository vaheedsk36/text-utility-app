import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
    return (
        <div className={`container-fluid bg-${props.mode}`}>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} container`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <a href="https://vaheedsk36.herokuapp.com/" target="_blank" rel='noreferrer' className="nav-link active">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a href="https://github.com/vaheedsk36" target="_blank" rel='noreferrer' className="nav-link active">Source Code</a>
                    </li>
                    
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode==='light'?'dark':'white'}`} htmlFor="flexSwitchCheckDefault">
                        Enable Dark Mode
                    </label>
                </div> 


                </div>
            </div>
</nav>
        </div>
    )
}





Navbar.propTypes = {title:PropTypes.string,about:PropTypes.string }
Navbar.defaultProps = {title:'Set title here',about:'About text here' }