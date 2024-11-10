import { Component } from 'react'
import CertificationCard from './certificationCard'

class TitleCertifications extends Component {
  render() {
    const { certifications } = this.props;
    return (
        certifications.map((certification,index) =>
            <CertificationCard key={index} certification={certification}/>)

    );
  }
}

export default TitleCertifications