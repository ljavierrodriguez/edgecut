import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo">
                            <Link to="/">
                                <img src="images/logo.png" />
                            </Link>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">
                                        Gallery
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </>
  )
}

export default Menu