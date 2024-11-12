import { Component } from 'react'

class CertificationCard extends Component {
  render() {
    const { certification } = this.props;
    return (
        <a  href={certification.link}   {...certification.link !== '#' ? { target: "_blank" } : {}} style={{textDecoration:"none",cursor:"pointer"}}>
        <div className="card ms-mb-0 certifications__card" >
            <img src={certification.svg}  className='img-fluid px-5 mt-5' style={{height:"80px" }}   alt="logo-certification"/>
            <div className="card-body">
                <h6 className="card-title">{certification.title}<span className='color-primary'>-{certification.year}</span></h6>
                <p className="card-text" style={{fontSize:'0.8em'}}>{certification.description}</p>
            </div>
        </div> 
        </a>


    );
  }
}

export default CertificationCard