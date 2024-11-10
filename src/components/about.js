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
                        <p className="hero__aboutme">I actively seek new opportunities to develop web applications and am flexible to adapt to the needs of the company, adjusting to any programming language required.</p>
                    </div>
                </div>
                <ScrollSpy />
            </div>
           

      )
    }
}

export default About