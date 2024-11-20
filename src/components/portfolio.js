import { Component } from "react";
import Projects from "./projects";



class Portfolio extends Component {

    render() {
        return (
            <div className="container my-5 p-4">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <h1 data-aos="fade-right"  data-aos-duration="1000">Portfolio</h1>
                        <span  data-aos="zoom-in-down"  data-aos-duration="2000" className="color-primary">Check out my latest projects</span>
                        <p data-aos="zoom-in-right"  className="mt-4">Over the past 3 years I have collaborated and developed custom applications for various companies</p>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <div className="form-group " data-aos="fade-right"  data-aos-duration="1000" style={{marginLeft:"3em"}} >
                            <input  className="form-check-input fs-2" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                            <label className="form-check-label ms-2 fs-2" htmlFor="flexCheckDefault">
                                Dev Kendall F
                            </label>
                        </div>
                        <input type="range" data-aos="fade-in"  data-aos-duration="2000" className="ms-5 mt-3" min="0" max="60" defaultValue={10} />
                        <div className="card w-75 mb-3" data-aos="zoom-in-down"  data-aos-duration="1000">
                            <div className="card-body">
                                <h5 className="card-title">Web Desing</h5>
                                <p className="card-text" style={{ fontSize: "0.8em" }}>UI desing from web sites responsives, using figma and others</p>
                            </div>
                        </div>
                        <div className="card w-50" data-aos="zoom-in-up"  data-aos-duration="1000" style={{ position: "relative", left: "20em", bottom: "12em" }} >
                            <img src="./assets/img/card-1.png" className="card-img-top" alt="Software Development" />

                            <div className="card-body">
                                <h5 className="card-title">Web Aplications</h5>
                                <p className="card-text" style={{ fontSize: "0.8em" }}>Custom software development</p>
                            </div>
                        </div>
                    </div>

                </div>
                <Projects />
            </div>


        )
    }
}

export default Portfolio