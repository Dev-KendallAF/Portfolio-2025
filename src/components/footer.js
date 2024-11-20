import { Component} from "react";
import ScrollSpy from "./scrollspy.js"; 



class Footer extends Component
{
    
    render()
    {
        return(
            <div className="container-fluid  p-0">
                <div className="row" style={{margin:"5em 0px 12em 0px"}}>
                    <div className="col-12 text-center mb-5">
                        <h2 data-aos="zoom-in" className="my-3">Interested in collaborating with me?</h2>
                        <span className="divider" data-aos="zoom-out-right"></span>
                        <p className="" data-aos="fade-up">I’m always open to discussing product design work or partnership opportunities.</p>
                        
                    </div>
                    <div className="col-12 text-center">
                        <a className="btn btn__split  btn__split-secondary px-5 py-3 " href="mailto:fernandez.kendall.an@gmail.com" data-aos="zoom-in-up" data-aos-duration="1000"><i className="fa-regular fa-paper-plane pe-3"></i> Send Email</a>
                    </div>
                </div>
                <div className="row " style={{margin:"0px",padding:"7em",background:"#111"}}>
                    <div className="col-12 text-center mb-5">
                        <span data-aos="zoom-in" className="color-secondary fs-1"> Thanks You</span>


                        <div data-aos="zoom-in" className="copyright mt-3"><p>Handcrafted by me <i className="fa-regular fa-copyright"></i> Dev_KendallFS</p></div>
                    </div>
                </div>
            </div>
           

      )
    }
}

export default Footer