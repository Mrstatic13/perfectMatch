import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyH from '../Pages/DailyHoro';
import SignT from '../Pages/SignTraits';
import Home from '../Pages/Home';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function NavBar() {
    return (

    <BrowserRouter>   
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand navbar-light" href="../Pages/Home">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href ='../Pages/Home'><Link to ='/'>Home</Link></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href = '../Pages/DailyHoro'><Link to ='/dailyH'>Daily Phrase</Link></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href = '../Pages/SignTraits'><Link to ='/signT'>Sign Traits</Link></a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
        </div>
        </nav>
            <Routes>
                <Route path = '/' element = {<Home />}>

                </Route>
                <Route path = '/dailyH' element = {<DailyH />}>

                </Route>
                <Route path = '/signT' element = {<SignT/>}>

                </Route>
            </Routes>
    
    </BrowserRouter>
    ); 
}
export default NavBar;