import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Projects.scss';
import Loading from '../../Loading/Loading';
import { FaReact } from 'react-icons/fa';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            hidden: true,
            loading: true,
            react: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        this.setState(prevState => {return { loading:!prevState.loading }});
    }
    
    shouldComponentUpdate(nextProps){
        return this.state.hidden !== nextProps.hidden
    }
    
    handleClick(){
        this.setState({ hidden: !this.state.hidden  });
    }
    
    componentDidMount(){
        if(this.props.technologies.some(a => a === 'React JS')){
           this.setState({ react: true  });
        }
    }

    render() {
        const { title, href, alt, imgSrc, paragraphs, extraParagraph, technologies, linkGitHub, extraLink} = this.props;
        return (
            <div style={ this.style } className="project-container">

                <a href={href} target="_blank" rel='noreferrer noopener'>
                    {
                        this.state.loading ?
                        <Loading className="react-logo"/> :
                        <img src={imgSrc}
                            alt={alt}
                            className='animated fadeIn'
                            SameSite="None"
                        />
                    }
                </a>

                <div className="project-description animated fadeIn">
                    {
                        this.state.react ?
                        <h2><FaReact className="react-logo" width={'2em'}/> {title}</h2> :
                        <h2>{title}</h2>
                    }
                    {paragraphs.map((a, i) => <p key={i}>{a}</p>)}
                    <p><nobr><span className="show-more" onClick={this.handleClick}>{this.state.hidden ? 'Show More +':'Show Less -'}</span></nobr></p>

                    <section className="more" style={this.state.hidden ? { 'display': 'none'} : { 'display': 'block'}}>
                        <p>{extraParagraph}{extraLink ? <a href={href}>{href}</a> : ''}</p>
                        <aside>
                            <h3>Technologies used:</h3>
                            <ul>
                                {technologies.map((a,i) => <li key={i}>{a}</li>)}
                            <li><a href={linkGitHub} target="_blank" rel='noreferrer noopener'>
                                <i className="fab fa-github-square github-icon"></i>
                            </a></li>
                            </ul>
                        </aside>
                    </section>
                </div>
            </div>
        );
    }
}

Projects.propTypes = {
    // title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
    extraParagraph: PropTypes.array,
    technologies: PropTypes.array.isRequired,
    extraLink: PropTypes.bool.isRequired,
    linkGitHub: PropTypes.string.isRequired
}

export default Projects;
