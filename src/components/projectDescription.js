import { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";



class ProjectDescription extends Component {
    render() {
    const { title,description,techstack } = this.props;

        return (
            <div >
                <h5 data-aos="zoom-in">{title}</h5>
                <span className="divider" data-aos="zoom-out-right"></span>
                <p data-aos="fade-up">{description}</p>
                {techstack.map((t,index) => (
                     <OverlayTrigger key={index}
                     placement="bottom"
                     overlay={<Tooltip id="linkedin-tooltip">{t.version}</Tooltip>}
                   >
                <div  className="techstack" data-aos="fade-down-right" data-aos-duration={`${index}50`} >{t.tech}</div>
                </OverlayTrigger>
            ))}
            </div>


        )
    }
}

export default ProjectDescription