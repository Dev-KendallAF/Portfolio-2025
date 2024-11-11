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
                        <h1>Hi I'm <span className="color-secondary">Kendall Fern&aacute;ndez </span></h1>
                        <span className="divider"></span>
                        <p className="hero__aboutme">Welcome to my portfolio, I am a lover of technology and web design. I like to create solid and scalable frontend products with excellent user experiences.
                        </p>
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