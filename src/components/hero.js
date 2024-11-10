import { Component} from "react";
import SocialButton from "./social_button.js"; 



class Hero extends Component
{
    
    render()
    {
        return(
            <div className="container-fluid hero position-relative">
                <div className="row ">
                    <div className="col-12 text-center">
                        <h1>Hi I'm Kendall Fern&aacute;ndez </h1>
                        <span className="divider"></span>
                        <p className="hero__aboutme">A Result-Oriented Web Developer building and managing WebSites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn__split  btn__split-secondary px-5 py-3 m-3">Projects</button>
                    </div>
                </div>
                <SocialButton />

            </div>
           

      )
    }
}

export default Hero