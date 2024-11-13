import { Component } from "react";



class Projects extends Component {

    render() {
        return (
            <div className="container my-5 p-4">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <h1>Portfolio</h1>
                        <span className="color-primary">Check out my latest projects</span>
                        <p className="mt-4">Over the past 3 years I have collaborated and developed custom applications for various companies</p>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <div className="form-group " style={{marginLeft:"3em"}} >
                            <input class="form-check-input fs-2" type="checkbox" value="" id="flexCheckDefault" checked />
                            <label class="form-check-label ms-2 fs-2" for="flexCheckDefault">
                                Dev Kendall F
                            </label>
                        </div>
                        <input type="range" class="ms-5 mt-3" min="0" max="60" value={10} />
                        <div class="card w-75 mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Web Desing</h5>
                                <p class="card-text" style={{ fontSize: "0.8em" }}>UI desing from web sites responsives, using figma and others</p>
                            </div>
                        </div>
                        <div class="card w-50" style={{ position: "relative", left: "20em", bottom: "12em" }} >
                            <img src="./assets/img/card-1.png" class="card-img-top" alt="Software Development" />

                            <div class="card-body">
                                <h5 class="card-title">Web Aplications</h5>
                                <p class="card-text" style={{ fontSize: "0.8em" }}>Custom software development</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        )
    }
}

export default Projects