import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillsSession extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open:false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ open: !this.state.open  });
    }

    render() { 
        const { title, contents, books,  span, hasAuthor} = this.props;
        let booksMarkUp = (
            <div>
                <h3>Finished</h3>
                <ul>
                    { hasAuthor ? 
                    books.filter(a => !a.reading)
                    .map((a, i) => <li key={i}>{a.title}<br /><span>{a.author}</span></li>) 
                    : null}
                </ul>
                <h3>Reading</h3>
                <ul>
                    {hasAuthor ? 
                    books.filter(a => a.reading)
                    .map((a, i) => <li key={i}>{a.title}<br /><span>{a.author}</span></li>) 
                    : null}
                </ul>
            </div>
        );

        let content = (
            <ul>
                {(title !== 'Books') ? 
                contents.map((a,i) => <li key={i}><span>{a.title + ' '}</span>{a.body}</li>) :
                null}
            </ul>
        );


        
        return ( 
            <div className="skills-section" onClick={this.handleClick}>
                <h2 className="skills-title"><div className="text">{ title }</div></h2>
                <section className={this.state.open ? 'skills-content' : 'skills-content hidden'}>
                    {!hasAuthor ? content : null}
                    {hasAuthor ? booksMarkUp: null}
                </section>
            </div>
         );
    }
}

SkillsSession.propTypes = {
    title: PropTypes.string.isRequired, 
    contents: PropTypes.array, 
    books: PropTypes.array,  
    span: PropTypes.bool.isRequired, 
    hasAuthor: PropTypes.bool.isRequired
}
 
export default SkillsSession;