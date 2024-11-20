import { Component } from 'react'

class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
        skills.map((skill,i) =>
            <div key={i} className="p-2 btn btn__split btn__split-secondary" data-aos="fade-down" data-aos-duration={`${i}00`}>{skill.name}</div>
            )
    );
  }
}

export default Skills