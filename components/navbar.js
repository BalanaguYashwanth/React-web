import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function navbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand mx-5 "    href="#">Android Manifestor</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                    
                    <li className="nav-item ">
                        <Link to="/"  className="nav-link">Courses <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing"  className="nav-link"> Pricing </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to='/about' >About</Link>
                    </li>
                    <li className="nav-item">
                    { 
                    localStorage.getItem('access-token') ? (<Link to="/logout" className="nav-link" href="#">logout</Link> ) :

                    (<Link to="/login" className="nav-link" href="#">Login</Link> )
                        
                    }
                    </li>
                    </ul>
                </div>
              
        </nav>

        </div>
    )
}

export default navbar

