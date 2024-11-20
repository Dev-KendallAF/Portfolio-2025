import { Component } from "react";
import ProjectDescription from "./projectDescription";
import ProjectVideo from "./projectVideo";



class Project extends Component {
    render() {
        const { projects } = this.props;

        if (!projects || !Array.isArray(projects)) {
            return <div>No hay proyectos disponibles</div>;
        }
        return (
            projects.map((p,index) =>
                <div key={index} className="container mt-5 p-4">
                    <div className="row" style={{ marginBottom: "5em" }}>
                        <div className="col-12 col-md-6" style={{ marginBottom: "-5em" }}>
                            <ProjectVideo url={p.url} />
                        </div>
                        <div className="col-12 col-md-6 " >
                            <ProjectDescription title={p.title} description={p.description} techstack={p.techstack} />
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default Project