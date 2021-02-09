import React from 'react'

const Navbar = () => {

    return (
        <div className="navbar">
            
            <h2 className="kapitus-logo">Stock-Checker</h2>
            
            <div className='nav-menu'>
                <h5 className="nav-item">Home</h5>
                <h5 className="nav-item">Search</h5>
                <a href="https://github.com/dldimartino/stock-checker" className="nav-item">
                <h5>GitHub</h5>
                </a>
                <h5 className="nav-item">Contact Us</h5>
            </div>

        </div>
    )
}



export default Navbar