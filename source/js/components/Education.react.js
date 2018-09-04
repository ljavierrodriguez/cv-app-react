var React = require('react');

class Education extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            education : [
                {
                    institute: 'University of Colorado Boulder',
                    degree: 'Bachelor of Science',
                    carreer: 'Computer Science - Web Development Track',
                    score: 3.23,
                    date: 'August 2006 - May 2010'
                },
                {
                    institute: 'James Buchanan High School',
                    degree: 'Technology Magnet Program',
                    carreer: '',
                    score: 3.56,
                    date: 'August 2002 - May 2006'
                },
            ]
        }
    }
    render(){
        var edu = this.state.education.map(function(row){
            return <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{row.institute}</h3>
              <div className="subheading mb-3">{row.degree}</div>
              <div>{row.carreer}</div>
              <p>GPA: {row.score}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{row.date}</span>
            </div>
          </div>
        });
        return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

            { edu }

        </div>
      </section>;
    }
}

module.exports = Education;