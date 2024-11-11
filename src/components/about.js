import { Component} from "react";
import ScrollSpy from "./scrollspy.js"; 



class About extends Component
{
    
    render()
    {
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2>About me</h2>
                        <span className="divider"></span>
                        <p className="hero__aboutme">I’m a junior developer eager to gain experience in building custom applications and software solutions. I’m passionate about developing interfaces that not only look great but are optimized for functionality and user needs. My goal is to deepen my skills at the intersection of design and development, delivering high-quality solutions that are both effective and user-centered</p>
                    </div>
                </div>
                <ScrollSpy />
            </div>
           

      )
    }
}

export default About