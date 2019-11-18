import React from 'react';
import PropTypes from 'prop-types';

import './Projects.scss';

class Projects extends React.Component {

    // UNSAFE_componentWillMount(){
    //     this.style = { backgroundColor: 'gray' };
    // }
    
    shouldComponentUpdate(nextProps){
        return this.props.hideShowMore !== nextProps.hideShowMore
    }
    
    // UNSAFE_componentWillUpdate(nextProps){
    //     this.style = null;
    // }

    
    render(){
        const { 
            title, 
            href, 
            alt, 
            imgSrc, 
            paragraphs, 
            extraParagraph, 
            technologies, 
            linkGitHub, 
            extraLink,
            toggleShowMore,
            hideShowMore,
            id
        }  =  this.props;

        return (

            
            <div className="project-container" style={this.style}>

                <a href={href} target="_blank" rel='noreferrer noopener'>
                    <img src={imgSrc}
                        alt={alt}
                        className='animated fadeIn'
                    />
                </a>

                <div className="project-description animated fadeIn">
                    <h2>{title}</h2>
                    {paragraphs.map((a, i) => <p key={i}>{a}</p>)}
                    <p><nobr><span className="show-more" id={id} onClick={(e)=>toggleShowMore(e)}>{hideShowMore ? 'Show More +':'Show Less -'}</span></nobr></p>

                    <section className="more" style={ hideShowMore ? { 'display': 'none'} : { 'display': 'block'}}>
                        <p>{extraParagraph}{extraLink ? <a href={href}>{href}</a> : ''}</p>
                        <aside>
                            <h3>Technologies used:</h3>
                            <ul>
                                {technologies.map((a,i) => <li key={i}>{a}</li>)}
                            <li>
                                <a href={linkGitHub} target="_blank" rel='noreferrer noopener'>
                                <i className="fab fa-github-square github-icon"></i>
                                </a>
                            </li>
                            </ul>
                        </aside>
                    </section>
                </div>
            </div>
    
        )
    }

} 

Projects.propTypes = {
    title: PropTypes.string.isRequired,
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
