import { Component,useEffect } from 'react'

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleCertifications from './titleCertifications';

class ScrollSpy extends Component  {
    state=
    {
      certifications: [
        { title: 'Udemy',description:"Advanced React JS Fundamentals by Nicolas Schurmann", year: 2024, svg: './icons/udemy.svg',link:'#' },
        { title: 'Microsoft',description:"Professional Fundamentals of Data Analysis.", year: 2023, svg: './icons/microsoft.svg',link:'#' },
        { title: 'Microsoft',description:"Professional Fundamentals of Project Management", year: 2023, svg: './icons/microsoft.svg',link:'#' },
        { title: 'SCRUM Study',description:" Accreditation Body for Scrum and Agile", year: 2022, svg: './icons/scrum.svg',link:'https://drive.google.com/file/d/1kYKvJuh3bihRPZyAsRzbgz6l6BmDkS0k/view?usp=drive_link' },
        { title: 'Cisco Networking Academy',description:"PC Hardware and Software.", year: 2022, svg: './icons/cisco.svg',link:'https://drive.google.com/file/d/1BTmS2JxW1zqEJz_Z8htfsbUK7Dsh4iZC/view?usp=drive_link' },
        { title: 'Cisco Networking Academy',description:"PCAP Programming Essentials in Python", year: 2022, svg: './icons/cisco.svg',link:'https://drive.google.com/file/d/1QH69HUDHk9MA9mKZAbnF5J1jlGwf2CZn/view?usp=drive_link' },
        { title: 'Google Activate',description:" Cybersecurity in Telecommuting.", year: 2021, svg: './icons/google.svg',link:'https://drive.google.com/file/d/15D5iJY8LaN0MOgeKYwSzT2iLaaubVvcF/view?usp=drive_link' },
      ],
      
    }

    render(){

      return (
        <div className="row my-5">
          <div className="col-12 col-md-4">
          <h3>Get to know me </h3>
          <p>I am a passionate web developer with a strong love for building and managing websites and web applications that drive success. I specialize in creating user-friendly, efficient, and scalable solutions that meet business goals and provide excellent user experiences.</p>

            <ListGroup id="list-example" className='py-4'>
              <ListGroup.Item action href="#list-item-1">Skills</ListGroup.Item>
              <ListGroup.Item action href="#list-item-2">Experiences</ListGroup.Item>
              <ListGroup.Item action href="#list-item-3">Certifications</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-12 col-md-8 p-3 mt-5 mt-md-0 ">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example scroll_UI"
              tabIndex="0"
              
              style={{ height: '500px', overflowY: 'scroll' }}  // Habilitar el desplazamiento
            >
            <div id="list-item-1">
                <h4  className='mb-3'>Skills</h4>
                <div className="d-flex  mb-3 flex-wrap gap-3 mb-5 me-md-5">
                <div className="p-2 btn btn__split btn__split-primary">HTML5</div>
                <div className="p-2 btn btn__split btn__split-primary">CSS</div>
                <div className="p-2 btn btn__split btn__split-primary">SASS</div>
                <div className="p-2 btn btn__split btn__split-primary">JavaScript</div>
                <div className="p-2 btn btn__split btn__split-primary">React JS</div>
                <div className="p-2 btn btn__split btn__split-primary">PHP</div>
                <div className="p-2 btn btn__split btn__split-primary">Laravel 11</div>
                <div className="p-2 btn btn__split btn__split-primary">Bootstrap</div>
                <div className="p-2 btn btn__split btn__split-primary">Tailwind UI</div>
                <div className="p-2 btn btn__split btn__split-primary">Git</div>
                <div className="p-2 btn btn__split btn__split-primary">Github</div>
                <div className="p-2 btn btn__split btn__split-primary">SQL</div>
                <div className="p-2 btn btn__split btn__split-primary">MySQL</div>
                </div>
            </div>

            <div id="list-item-2"> 
                <h3 >Experiences</h3>
                {/*Web Developer SP*/}
                <div className='my-3'>
                    <h5>Web Developer, Profesional Services</h5>
                    <span className='color-primary'>May 2022 - Now</span>
                    <p>Web developer with experience in creating custom websites and applications that adapt to client needs. Specialized in front-end design and development, handling React and other modern technologies. Skilled in managing projects from start to finish, including requirements research, interface design, performance optimization, and testing. Committed to delivering effective, high-quality solutions that combine functionality and visual appeal, ensuring an optimal user experience in every project.</p>
                </div>
                {/*IT Engineer AT*/}
                <div className='my-3'>
                    <h5>IT engineer, Grupo Aduanero Tropical</h5>
                    <span className='color-primary'>May 2024 - October 2024</span>
                    <p>Improved problem resolution efficiency by 30%, optimizing troubleshooting
                        processes and reducing downtime through automated solutions and
                        continuous training for the technical staff besides collaborated in the
                        deinstallation of customs agencies across the country, ensuring smooth
                        transitions in operations and the timely relocation of equipment.</p>
                    <ul>
                        <li>Installation, configuration, maintenance and repair of equipment and
                        systems; technical assistance and personnel management.</li>
                        <li>Support in network infrastructure, Implementation of new
                        technologies, inventory management, database and monitoring</li>
                    </ul>
                    <span className='color-secondary'>Tech stack:</span>
                    <p className='fst-italic'>SQL Server 2016, SAP GUI 7.0, Power BI 2.137, Oracle Cloud</p>
                </div>
                {/*ASP.NET Developer AS*/}
                <div className='my-3'>
                    <h5>Web Developer ASP.NET , ARCAVI Software</h5>
                    <span className='color-primary'>Octuber 2022 - March 2023</span>
                    <p>Arcavi Software is a company dedicated to providing innovative solutions,
                    custom software creation and inventory management to help companies
                    improve the efficiency and profitability of their operations. My contribution to
                    the company was to be a software developer and implement innovative ideas
                    during the creation of several applications for multiple companies.</p>
                    <ul>
                        <li>Develop functional apps in the C# and ASP.NET programming language
                        environment</li>
                        <li>Manage projects using SCRUM</li>
                        <li>Implementation of SQL database for the use of applications</li>
                        <li>Be the main person in charge of the UI and UX design of the application as a Frontend developer</li>
                    </ul>
                    <span className='color-secondary'>Tech stack:</span>
                    <p className='fst-italic'>SQL Server 2016, ASP.NET 4.8, Entity Framework EF6, PHP Laravel 8, Sass, Vue.js</p>
                    <span className='color-secondary'>Tools:</span>
                    <p className='fst-italic'>Data Base: SQL Server Management Studio , Code IDE: Microsoft Visual Studio, Desing: Figma</p>
                
                </div>
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
