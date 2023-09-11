import React from 'react';
import { Link } from 'react-router-dom';
 
 

const Navbar = (props) => {
    return (
        <div className="Navbar " style={{width:'100%',position:'fixed'}}>

            <nav className="navbar navbar-expand-lg " style={{backgroundColor:props.mode==='dark'?'black':'whitesmoke', color:props.mode==='dark'?'white':'black',boxShadow:'0px -5px 15px black'}} >
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/" style={{ color:props.mode==='dark'?'white':'black'}}>ConText</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{backgroundColor:props.mode==='dark'?'white':'whitesmoke', color:props.mode==='dark'?'white':'black'}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"style={{backgroundColor:props.mode==='dark'?'white':'whitesmoke', color:props.mode==='dark'?'white':'black'}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"  > 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color:props.mode==='dark'?'white':'black'}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doc" style={{ color:props.mode==='dark'?'white':'black'}}>Doc</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color:props.mode==='dark'?'white':'black'}}>Blogs</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ color:props.mode==='dark'?'white':'black'}}>Contact</Link>
                            </li>


                        </ul>
                        <form className="d-flex"  >

                            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                                <input className="form-check-input" onClick={props.darkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Reading Mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar