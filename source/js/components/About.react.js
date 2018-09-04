var React = require('react');

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Luis J. Rodriguez O.',
            address: '3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·',
            email: 'lrodriguez@4geeks.co',
            description: 'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
        }
    }
    render() {
        return <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
                <h1 className="mb-0">
                    <span className="text-primary">{this.state.name}</span>
                </h1>
                <div className="subheading mb-5">{this.state.address}
                    <a href={"mailto:" + this.state.email}>{this.state.email}</a>
                </div>
                <p className="lead mb-5">{this.state.description}</p>
                <div className="social-icons">
                    <a href={this.props.linkedin}>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={this.props.github}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={this.props.twitter}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={this.props.facebook}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </section>;
    }
}

module.exports = About;