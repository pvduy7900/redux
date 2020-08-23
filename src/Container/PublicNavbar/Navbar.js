import React from 'react'
import './Navbar.css'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Navbar({ isAuthenticated, loading }) {

    const handleLogout = () => {
        // TODO: handle Logout
    };
    const authLinks = (
        <Nav>
            <Nav.Link as={Link} to="/dashboard">
                <i className="fas fa-chart-line" /> Dashboard
          </Nav.Link>
            <Nav.Link onClick={handleLogout}>
                <i className="fas fa-sign-out-alt" /> Logout
          </Nav.Link>
        </Nav>
    );
    const publicLinks = (
        <Nav>
            <Nav.Link as={Link} to="/register">
                <i className="fas fa-registered" /> Register
          </Nav.Link>
            <Nav.Link as={Link} to="/login">
                <i className="fas fa-sign-in-alt" /> Login
          </Nav.Link>
        </Nav>
    );

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" className="mr-auto">
                <img src='https://www.sacvang.com/data/01/logo-co-gai-02.jpg' alt="CoderSchool" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
            </Navbar.Collapse>
        </Navbar>
        // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        //     <a className="navbar-brand" href="hehe">Expand at md</a>
        //     <div className="collapse navbar-collapse" id="navbarsExample04">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Link</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="#">Disabled</a>
        //             </li>

        //         </ul>
        //         {/* <img className="navbar-nav mr-auto" src="https://cdn.24h.com.vn/upload/1-2020/images/2020-02-25/1582633836-1-thieu-bao-tram-2-1582624390-width600height748.jpg" alt="Avatar" className="avatar" />
        //         <p className="navbar-nav mr-auto">Đây là tên</p> */}
        //         <form className="form-inline my-2 my-md-0">
        //             <input className="form-control" type="text" placeholder="Search" />
        //         </form>
        //     </div>
        // </nav>
    )
}
