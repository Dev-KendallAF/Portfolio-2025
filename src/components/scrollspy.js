import { Component,useEffect, version } from 'react'

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleCertifications from './titleCertifications';
import Skills from './skills';
import Experience from './expirience';


class ScrollSpy extends Component  {
    state=
    {
      certifications: [
        { title: 'Udemy',description:"Advanced React JS Fundamentals by Nicolas Schurmann", year: 2024, svg: '/icons/udemy.svg',link:'#' },
        { title: 'Microsoft',description:"Professional Fundamentals of Data Analysis.", year: 2023, svg: './icons/microsoft.svg',link:'#' },
        { title: 'Microsoft',description:"Professional Fundamentals of Project Management", year: 2023, svg: './icons/microsoft.svg',link:'#' },
        { title: 'SCRUM Study',description:" Accreditation Body for Scrum and Agile", year: 2022, svg: './icons/scrum.svg',link:'https://drive.google.com/file/d/1kYKvJuh3bihRPZyAsRzbgz6l6BmDkS0k/view?usp=drive_link' },
        { title: 'Cisco Networking Academy',description:"PC Hardware and Software.", year: 2022, svg: './icons/cisco.svg',link:'https://drive.google.com/file/d/1BTmS2JxW1zqEJz_Z8htfsbUK7Dsh4iZC/view?usp=drive_link' },
        { title: 'Cisco Networking Academy',description:"PCAP Programming Essentials in Python", year: 2022, svg: './icons/cisco.svg',link:'https://drive.google.com/file/d/1QH69HUDHk9MA9mKZAbnF5J1jlGwf2CZn/view?usp=drive_link' },
        { title: 'Google Activate',description:" Cybersecurity in Telecommuting.", year: 2021, svg: './icons/google.svg',link:'https://drive.google.com/file/d/15D5iJY8LaN0MOgeKYwSzT2iLaaubVvcF/view?usp=drive_link' },
      ],
      skills: [
        { name: 'HTML5',description:"Frontend"},
        { name: 'CSS3',description:"Frontend"},
        { name: 'SASS',description:"Framework"},
        { name: 'JavaScript',description:"Programing"},
        { name: 'React JS',description:"Framework"},
        { name: 'PHP',description:"Programing"},
        { name: 'Laravel 11',description:"Programing"},
        { name: 'Bootstrap',description:"Library"},
        { name: 'Tailwind UI',description:"Library"},
        { name: 'Git',description:"Repository"},
        { name: 'GitHub',description:"Repository"},
        { name: 'SQL',description:"Database"},
        { name: 'MySQL',description:"Database"},
      ],
      experiences: [
        { company: 'Freelancer',position:'Web Developer',description:"As a freelancer, I have dedicated myself to developing custom software solutions for small and large businesses in my community, taking more than 10 businesses to the next level in the digital age. My work has included everything from creating optimized and responsive multi-platform websites that increase visibility and attract potential customers, to image renovation and social media positioning strategies. My focus is on offering comprehensive solutions that transform the digital presence of each business and expand its reach.",
          activity:'null',start: 'May 2022',end: "present", techstack: "null",tools:'null' },

        { company: 'Grupo Aduanero Tropical',position:'IT engineer',description:"Improved problem resolution efficiency by 30%, optimizing troubleshooting processes and reducing downtime through automated solutions and continuous training for the technical staff besides collaborated in the deinstallation of customs agencies across the country, ensuring smooth transitions in operations and the timely relocation of equipment.",
          activity:[
            {description:'Installation, configuration, maintenance and repair of equipment and systems; technical assistance and personnel management.'},
            {description:'Support in network infrastructure, Implementation of new technologies, inventory management, database and monitoring'}
          ],
          start: 'May 2024',end: "Octuber 2024", techstack: [
            {tech:'SQL Server',version:'2016'},
            {tech:'Power BI',version:'2.1'},
            {tech:'Oracle Cloud',version:'null'},
            {tech:'Office 365',version:'2024 LTS'},
          ],tools:'null' },

          { company: 'ARCAVI Software',position:'Web Developer ASP.NET',description:"Arcavi Software is a company dedicated to providing innovative solutions, custom software creation and inventory management to help companies improve the efficiency and profitability of their operations. My contribution to the company was to be a software developer and implement innovative ideas during the creation of several applications for multiple companies.",
            activity:[
              {description:'Develop functional apps in the C# and ASP.NET programming language environment'},
              {description:'Manage projects using SCRUM'},
              {description:'Implementation of SQL database for the use of applications'},
              {description:'Be the main person in charge of the UI and UX design of the application as a Frontend developer'},
            ],
            start: 'May 2024',end: "Octuber 2024", techstack: [
              {tech:'SQL Server',version:'2016'},
              {tech:'ASP.NET',version:'4.8'},
              {tech:'Entity Framework',version:'EF6'},
              {tech:'PHP Laravel',version:'8'},
              {tech:'SASS',version:'null'},
              {tech:'Vue.js',version:'null'},
            ],tools:[
              {tool:'SQL Server Management Studio ',type:'Data Base'},
              {tool:'Microsoft Visual Studio',type:'Code IDE'},
              {tool:'Figma',type:'Desing'},
            ],},
      ],
    }

    render(){

      return (
        <div className="row my-5">
          <div className="col-12 col-md-4">
          <h3>Get to know me </h3>
          <p>I'm always in learning mode and continually expanding my skills to stay ahead in the rapidly evolving world of web development.</p>

            <ListGroup id="list-example" className='py-4'>
              <ListGroup.Item action href="#list-item-1">Skills</ListGroup.Item>
              <ListGroup.Item action href="#list-item-2">Experiences</ListGroup.Item>
              <ListGroup.Item action href="#list-item-3">Certifications</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-12 col-md-8 p-sm-3 mt-5 mt-md-0 ">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example scroll_UI  scrollspy__opc"
              tabIndex="0"
              
              style={{ height: '400px', overflowY: 'scroll' }}  // Habilitar el desplazamiento
            >
            <div id="list-item-1">
                <h4  className='mb-3'>Skills</h4>
                <p>I have worked on different projects, gaining skills and knowledge in the following web development technologies</p>
                <div className="d-flex  mb-3 flex-wrap gap-3 mb-5 me-md-5">
                <Skills skills={this.state.skills}/>                    
                </div>
            </div>

            <div id="list-item-2"> 
                <h3 >Experience</h3>
                <Experience exp={this.state.experiences} />
            </div>   

            <div id="list-item-3">
                <h4>Certifications</h4>
                <div className="d-flex  mb-3 flex-wrap gap-3 mb-5 ">
                  <TitleCertifications certifications={this.state.certifications}/>                    
                </div>
                
            </div>

            </div>
          </div>
        </div>
      );
    }
}



export default ScrollSpy;
