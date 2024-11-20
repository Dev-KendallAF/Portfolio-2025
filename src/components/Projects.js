import { Component } from "react";
import Project from "./project";



class Projects extends Component {
    state=
    {
        projects: [
            {
                title: "asd", description: "asd",url:"asd",
                techstack: [
                    { tech: 'SQL Server', version: '2016' },
                    { tech: 'ASP.NET', version: '4.8' },
                    { tech: 'Entity Framework', version: 'EF6' },
                    { tech: 'PHP Laravel', version: '8' },
                    { tech: 'SASS', version: 'null' },
                    { tech: 'Vue.js', version: 'null' },
                ]
            },
            {
                title: "asd", description: "asd",url:"asd",
                techstack: [
                    { tech: 'SQL Server', version: '2016' },
                    { tech: 'ASP.NET', version: '4.8' },
                    { tech: 'Entity Framework', version: 'EF6' },
                    { tech: 'PHP Laravel', version: '8' },
                    { tech: 'SASS', version: 'null' },
                    { tech: 'Vue.js', version: 'null' },
                ]
            },
        ],
    }
    render() {
        
        return (
            <Project projects={this.state.projects}/>
        )
    }
}

export default Projects