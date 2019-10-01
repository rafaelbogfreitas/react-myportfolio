import React, { Component } from 'react';

import './Projects.scss';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state = { 
            hidden: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ hidden: !this.state.hidden  });
    }

    render() { 
        return ( 
            <div className="project-container">
                <a href={this.props.content.href} target="_blank" rel='noreferrer noopener'>
                    <img src={this.props.content.imgSrc} alt={this.props.content.alt} />
                </a>
                <div className="project-description">
                    <h2>{this.props.content.title}</h2>
                    {this.props.content.paragraphs.map((a, i) => <p key={i}>{a}</p>)}
                    <p><nobr><span className="show-more" onClick={this.handleClick}>{this.state.hidden ? 'Show More +':'Show Less -'}</span></nobr></p>

                    <section className="more" style={this.state.hidden ? { 'display': 'none'} : { 'display': 'block'}}>
                        <p>{this.props.content.extraParagraph}{this.props.content.extraLink ? <a href={this.props.content.href}>{this.props.content.href}</a> : ''}</p>
                        <aside>
                            <h3>Technologies used:</h3>
                            <ul>
                                {this.props.content.technologies.map((a,i) => <li key={i}>{a}</li>)}
                            <li><a href={this.props.content.linkGitHub}>
                                <i className="fab fa-github-square"></i>
                            </a></li>
                            </ul>
                        </aside>
                    </section>
                </div>
            </div>
        );
    }
}
 
export default Projects;