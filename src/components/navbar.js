import { Component} from "react";


const styles = 
{
    navbar:
    {
        boxShadow: '0 2px 3px #11111110'
    }
}
class Navbar extends Component
{
    render()
    {
        return(
            <div>
                <nav className="navbar navbar-expand-sm  d-none d-sm-block py-3 px-5 fixed-top" style={{background:"#ffffff"}}>
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">Kendall Fern&aacute;ndez <span style={{fontWeight:'bold'}} className="ms-2"><i className="fa-solid fa-code"></i></span></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto"> 
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <i className="fa-solid fa-laptop"></i> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa-solid fa-file"></i> Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa-solid fa-user"></i> About me
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>

                <nav className="navbar-mobile d-block d-sm-none">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3 navbar-mobile__item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="fa-solid fa-laptop"></i> <span>Projects</span>
                                </a>
                            </div>
                            <div className="col-3 navbar-mobile__item">
                                <a className="nav-link" href="#">
                                    <i className="fa-solid fa-file"></i> <span>Resume</span>
                                </a>
                            </div>
                            <div className="col-3 navbar-mobile__item">
                                <a className="nav-link" href="#">
                                    <i className="fa-solid fa-user"></i> <span>About </span>
                                </a>
                            </div>
                            <div className="col-3 navbar-mobile__item">
                                <a className="nav-link" href="#">
                                <i className="fa-brands fa-linkedin"></i> <span>social</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
           

      )
    }
}

export default Navbar