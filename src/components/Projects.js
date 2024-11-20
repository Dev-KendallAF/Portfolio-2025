import { Component } from "react";
import Project from "./project";



class Projects extends Component {
    state=
    {
        projects: [
            {
                title: "Tecnoverde - Product Orders and Management", 
                description: "Development of a customized website designed for companies seeking to enhance their reach and improve interaction with their target audience. The application integrates social media, a chat system via WhatsApp, and a product order management feature. From the administrative side, it allows efficient control of sales and user management, providing key tools for better business decision-making.",
                url:"https://drive.google.com/file/d/1JRPzHT07pdlY82CNVe1Nf3sSMtZ0Y784/preview",
                techstack: [
                    { tech: 'PHP', version: 'v8.2' },
                    { tech: 'SASS', version: 'v1.62' },
                    { tech: 'GitHub', version: 'for version control' },
                    { tech: 'Laravel', version: 'v10.0' },
                    { tech: 'jQuery', version: 'v3.6.4' },
                    { tech: 'MySQL', version: 'v8.0' },
                    { tech: 'Bootstrap ', version: 'v5.0'},

                ]
            },
            {
                title: "GRSTraking - Customs Container Tracking System ", 
                description: "A comprehensive web application and API solution designed to efficiently manage and track container operations. This system allows for the registration of containers, client management, and automated email notifications, providing seamless communication. Additionally, it supports the bulk upload and storage of data from Excel documents, ensuring quick and easy integration of external data. The system offers robust functionality to streamline logistics, improve operational efficiency, and enhance data accuracy.",
                url:"https://drive.google.com/file/d/14-fdMhy9QvaCjdmm4Jqz2OUW7bKWIyWw/preview",
                techstack: [
                    { tech: 'C#', version: 'v11.0' },
                    { tech: 'ASP.NET Core', version: 'v7.0' },
                    { tech: 'Entity Framework', version: 'v7.0' },
                    { tech: 'SQL Server', version: '2022' },
                    { tech: 'Azure Cloud', version: 'for version control' },
                    { tech: 'Postman', version: 'for API testing and documentation' }
                ]
            },
            {
                title: "LOGIKARGO - Electronic Invoicing System ", 
                description: "A comprehensive web application designed for inventory management and electronic invoicing, integrated with the government tax authority (Hacienda). The system includes features for creating and managing products, clients, invoices, and other essential functions. It uses SAP Crystal Reports for digital signature management, Bootstrap for responsive design, and SQL Server for efficient data storage and retrieval. The application interacts seamlessly with Hacienda’s API to ensure real-time electronic invoicing and tax compliance.",
                url:"https://drive.google.com/file/d/1wkJHDGGnKRXLlIMm20ghXDKahiwVNLbS/preview",
                techstack: [
                    { tech: 'C#', version: 'v11.0' },
                    { tech: 'ASP.NET Core', version: 'v7.0' },
                    { tech: 'SAP Crystal Reports', version: 'v2023' },
                    { tech: 'Bootstrap', version: 'v5.3' },
                    { tech: 'Hacienda API', version: 'v2023' }
                ]
            },
            {
                title: "Arte Blanco - Cafeteria Management System ", 
                description: "A full-featured web application designed to manage inventory, orders, and available tables for a cafeteria or restaurant. The system allows administrators to control and track products, manage orders, and assign them to available tables seamlessly. It also includes functionalities such as generating QR codes for easy order tracking and in-store pickup, streamlining the customer experience. This solution ensures efficient management of both virtual and physical orders, enhancing service delivery.",
                url:"https://drive.google.com/file/d/1A3VnBqOU6aubz9DJ_3Aan0WxYNYHbVPW/preview",
                techstack: [
                    { tech: 'PHP', version: 'v8.1' },
                    { tech: 'Laravel', version: 'v10' },
                    { tech: 'MySQL', version: 'v8.0' },
                    { tech: 'Bootstrap', version: 'v5.3' },
                    { tech: 'jQuery', version: 'v3.6.4' },
                    { tech: 'Node.js', version: 'v18.17.1' }
                ]
            },
            {
                title: "Hospicio de Huerfanos de Cartago - Human Resources Management System ", 
                description: "This comprehensive HR management system was developed as a final project at the Colegio Vocacional de Artes y Oficios de Cartago (COVAO), in collaboration with the students of the Software Development program. The system allows candidates to apply for job vacancies posted by HR, and HR administrators can efficiently manage these applications. It also includes features for posting new job openings, tracking application statuses, and handling various HR-related tasks. The system aims to streamline the recruitment process and enhance organizational efficiency.",
                url:"https://drive.google.com/file/d/1tqHugvM43SV33LnL7C_Z_KM_Z-Fm-F4s/preview",
                techstack: [
                    { tech: 'PHP', version: 'v7.4' },
                    { tech: 'MySQL', version: 'v8.0' },
                    { tech: 'Bootstrap', version: 'v4.5' },
                    { tech: 'jQuery', version: 'v3.6.0' },
                ]
            },
        ],
    }
    render() {
        
        return (
            <div id="projects">
            <Project projects={this.state.projects}/>
            </div>
        )
    }
}

export default Projects