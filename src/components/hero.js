import { Component} from "react";
import SocialButton from "./social_button.js"; 
import TypeWriter from "./typeWriter.js";



class Hero extends Component
{
    
    render()
    {
        return(
            <div className="container-fluid hero position-relative">
                <div className="row ">
                    <div className="col-12 text-center">
                        <h1  data-aos="zoom-in"  data-aos-duration="750" >Hi I'm <span className="color-secondary" >Kendall Fern&aacute;ndez </span></h1>
                        <span className="divider" data-aos="zoom-out-right"></span>
                        <TypeWriter text="Welcome to my portfolio, I am a lover of technology and web design. I like to create solid and scalable frontend products with excellent user experiences." className="hero__aboutme" data-aos="fade-up"  as="p" />
                    </div>
                    <div className="col-12 text-center">
                        <a className="btn btn__split  btn__split-secondary px-5 py-3 m-3" href="#projects" data-aos="zoom-in-up" data-aos-duration="1000">Projects</a>
                    </div>
                </div>
                <SocialButton />

            </div>
           

      )
    }
}

export default Hero