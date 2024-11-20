import React, { Component } from "react";

const styles = {
  navbar: {
    transition: "background-color 0.3s ease, box-shadow 0.3s ease" // Transición suave para color y sombra
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarBackground: "transparent",
      navbarShadow: "none" // Estado inicial sin sombra
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      this.setState({
        navbarBackground: "#ffffff", 
        navbarShadow: "17px 10px 60px #bebebe" 
      });
    } else {
      this.setState({
        navbarBackground: "transparent", 
        navbarShadow: "none" 
      });
    }
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm d-none d-sm-block py-3 px-5 fixed-top"
          style={{
            ...styles.navbar,
            backgroundColor: this.state.navbarBackground,
            boxShadow: this.state.navbarShadow
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Kendall Fern&aacute;ndez{" "}
              <span style={{ fontWeight: "bold" }} className="ms-2 color-secondary">
                <i className="fa-solid fa-code"></i>
              </span>
            </a>
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
                  <a className="nav-link active" aria-current="page" href="#projects">
                    <i className="fa-solid fa-laptop"></i> Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:7261960608407777281/">
                    <i className="fa-solid fa-file"></i> Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
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
                <a className="nav-link active" aria-current="page" href="#projects">
                  <i className="fa-solid fa-laptop"></i> <span>Projects</span>
                </a>
              </div>
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link" target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:7261960608407777281/">
                  <i className="fa-solid fa-file"></i> <span>Resume</span>
                </a>
              </div>
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link" href="#about">
                  <i className="fa-solid fa-user"></i> <span>About me</span>
                </a>
              </div>
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link" href="https://www.linkedin.com/in/kendall-andrey-fern%C3%A1ndez-siles-28478225b/">
                  <i className="fa-brands fa-linkedin"></i> <span>Linkedin</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
