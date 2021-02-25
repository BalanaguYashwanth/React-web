import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function AdminNavbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand mx-5 "    href="#">Android Manifestor-Admin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                    
                    <li className="nav-item ">
                        <Link to="/updatelist"  className="nav-link"> Lists <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/secretadmin"  className="nav-link"> Overview </Link>
                    </li>
                    
                    <li className="nav-item">
                    { 
                    localStorage.getItem('admin-token') ? (<Link to="/adminlogout" className="nav-link" href="#">logout</Link> ) :

                    (<Link to="/adminlogin" className="nav-link" href="#">Login</Link> )
                        
                    }
                    </li>
                    </ul>
                </div>
              
        </nav>

        </div>
    )
}

export default AdminNavbar

