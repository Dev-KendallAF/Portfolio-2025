import { Component } from 'react'

class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
        skills.map((skill) =>
            <div className="p-2 btn btn__split btn__split-secondary">{skill.name}</div>
            )
    );
  }
}

export default Skills