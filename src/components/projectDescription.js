import { Component } from "react";



class ProjectDescription extends Component {
    render() {
    const { title,description,techstack } = this.props;

        return (
            <div>
                <h5>{title}</h5>
                <span className="divider" ></span>
                <p>{description}</p>
                
            </div>


        )
    }
}

export default ProjectDescription