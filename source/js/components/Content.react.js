var React = require('react');
var About = require('./About.react');
var Experience = require('./Experience.react');
var Education = require('./Education.react');
var Skills = require('./Skills.react');
var Interests = require('./Interests.react');
var Awards = require('./Awards.react');

class Content extends React.Component {
  render() {
    return <div className="container-fluid p-0">
  
      <About 
        linkedin="https://linkedin.com" 
        github="https://github.com"
        twitter="https://twitter.com"
        facebook="https://facebook.com"
        />

      <hr className="m-0" />

      <Experience />

      <hr className="m-0" />

      <Education />
      
      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Interests />

      <hr className="m-0" />

      <Awards />

    </div>;
  }
}

module.exports = Content;